import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const { data, error } = await supabase
      .from('community')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching post:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const { author } = await req.json(); // 요청 본문에서 작성자 정보 받기

    if (!author) {
      return NextResponse.json({ error: 'Author is required' }, { status: 400 });
    }

    // 1. 게시글 조회하여 작성자 확인
    const { data: post, error: fetchError } = await supabase
      .from('community')
      .select('author')
      .eq('id', id)
      .single();

    if (fetchError || !post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // 2. 작성자 불일치 시 거부
    if (post.author !== author) {
      return NextResponse.json(
        { error: 'Unauthorized: You can only delete your own posts' },
        { status: 403 }
      );
    }

    // 3. 삭제 진행
    const { error } = await supabase
      .from('community')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}



export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { increment } = body; // true for +1, false for -1

    if (typeof increment !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // 현재 좋아요 수 가져오기 (Concurrency 이슈 방지를 위해 RPC가 좋지만, 간단히 구현)
    const { data: post, error: fetchError } = await supabase
      .from('community')
      .select('likes')
      .eq('id', id)
      .single();

    if (fetchError || !post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const newLikes = increment ? post.likes + 1 : Math.max(0, post.likes - 1);

    const { data, error } = await supabase
      .from('community')
      .update({ likes: newLikes })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating likes:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Unexpected error:', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
