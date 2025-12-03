import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function GET() {
  try {
    // 게시글 목록 가져오기
    const { data: posts, error } = await supabase
      .from('community')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 각 게시글의 실제 댓글 수를 가져와서 업데이트
    const postsWithActualCounts = await Promise.all(
      posts.map(async (post) => {
        const { count } = await supabase
          .from('comments')
          .select('*', { count: 'exact', head: true })
          .eq('post_id', post.id);

        return {
          ...post,
          comments_count: count ?? post.comments_count ?? 0,
        };
      })
    );

    return NextResponse.json(postsWithActualCounts);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, category, author, image, timestamp } = body;

    // timestamp는 클라이언트에서 보내지만, DB에는 created_at으로 저장됨 (자동 or 명시적)
    // 여기서는 DB의 created_at을 사용하거나, 클라이언트의 timestamp를 ISO string으로 변환해서 저장할 수 있음
    // 사용자가 "방금 전" 기능을 위해 timestamp를 보냈으므로, 이를 created_at으로 활용하는 것이 좋음

    const { data, error } = await supabase
      .from('community')
      .insert([
        {
          title,
          content,
          category,
          author,
          image,
          views: 0,
          likes: 0,
          comments_count: 0,
          // 클라이언트 timestamp가 있으면 그것을 사용, 없으면 현재 시간
          created_at: timestamp
            ? new Date(timestamp).toISOString()
            : new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating post:', error);
      return NextResponse.json(
        { error: error.message, details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Unexpected error:', error);
    const message =
      error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
