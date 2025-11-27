
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
let envContent = '';
try {
  envContent = fs.readFileSync(envPath, 'utf8');
} catch (e) {
  console.error('Could not read .env.local:', e.message);
  process.exit(1);
}

const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    let value = match[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    envVars[key] = value;
  }
});

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyData() {
  console.log('Checking Posts...');
  const { data: posts, error: postsError } = await supabase
    .from('community')
    .select('*');

  if (postsError) {
    console.error('Error fetching posts:', postsError);
  } else {
    console.log(`Found ${posts ? posts.length : 0} posts.`);
    if (posts) {
      posts.forEach(p => console.log(`- [${p.id}] ${p.title} (Author: ${p.author})`));
    }
  }

  console.log('\nChecking Comments...');
  const { data: comments, error: commentsError } = await supabase
    .from('comments')
    .select('*');

  if (commentsError) {
    console.error('Error fetching comments:', commentsError);
  } else {
    console.log(`Found ${comments ? comments.length : 0} comments.`);
    if (comments) {
      comments.forEach(c => console.log(`- [${c.id}] ${c.content} (PostID: ${c.post_id})`));
    }
  }
}

verifyData();
