import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabaseClient';

export async function GET() {
  try {
    // 1. Check if comments table exists and select one
    const { data: selectData, error: selectError } = await supabase
      .from('comments')
      .select('*')
      .limit(1);

    if (selectError) {
      return NextResponse.json({ step: 'select', error: selectError }, { status: 500 });
    }

    // 2. Try to insert a dummy comment (if we have a post ID)
    // First get a post ID
    const { data: post } = await supabase.from('community').select('id').limit(1).single();
    
    if (!post) {
       return NextResponse.json({ step: 'get_post', error: 'No posts found to attach comment to' }, { status: 404 });
    }

    const { data: insertData, error: insertError } = await supabase
      .from('comments')
      .insert([
        {
          post_id: post.id,
          author: 'DebugUser',
          content: 'Debug Comment',
          likes: 0
        }
      ])
      .select();

    if (insertError) {
      return NextResponse.json({ step: 'insert', error: insertError }, { status: 500 });
    }

    return NextResponse.json({ success: true, selectData, insertData });
  } catch (error: any) {
    return NextResponse.json({ step: 'catch', error: error.message }, { status: 500 });
  }
}
