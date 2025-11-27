import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { author } = body;

    if (!id || !author) {
      return NextResponse.json(
        { error: 'Comment ID and author are required' },
        { status: 400 }
      );
    }

    // 1. 댓글 작성자 확인
    const { data: comment, error: fetchError } = await supabase
      .from('comments')
      .select('author, post_id')
      .eq('id', id)
      .single();

    if (fetchError || !comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    if (comment.author !== author) {
      return NextResponse.json(
        { error: 'Unauthorized: You can only delete your own comments' },
        { status: 403 }
      );
    }

    // 2. 댓글 삭제
    const { error: deleteError } = await supabase
      .from('comments')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Error deleting comment:', deleteError);
      return NextResponse.json({ error: deleteError.message }, { status: 500 });
    }

    // 3. 게시글의 댓글 수 감소 (선택사항, 트리거로 처리 가능)
    // 여기서는 일단 성공 응답만 반환

    return NextResponse.json({ message: 'Comment deleted successfully' });
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

    // 현재 좋아요 수 가져오기
    const { data: comment, error: fetchError } = await supabase
      .from('comments')
      .select('likes')
      .eq('id', id)
      .single();

    if (fetchError || !comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    const newLikes = increment ? comment.likes + 1 : Math.max(0, comment.likes - 1);

    const { data, error } = await supabase
      .from('comments')
      .update({ likes: newLikes })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating comment likes:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
