// 시드 기반 랜덤 생성 함수 (동일 시드 = 동일 결과)
function seededRandom(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// 댓글 풀 데이터
const COMMENT_POOL = [
  {
    author: '최우정',
    initial: '최',
    content: '정말 도움이 되는 정보네요! 감사합니다.',
    likes: 5,
  },
  {
    author: '박희선',
    initial: '박',
    content: '저도 이렇게 해봐야겠어요!',
    likes: 12,
  },
  {
    author: '함성희',
    initial: '함',
    content: '좋은 글 감사합니다 ^^',
    likes: 3,
  },
  {
    author: '김민준',
    initial: '김',
    content: '완전 공감되네요 ㅋㅋㅋ',
    likes: 8,
  },
  {
    author: '이서연',
    initial: '이',
    content: '이거 진짜 효과 있나요?',
    likes: 2,
  },
  {
    author: '정하윤',
    initial: '정',
    content: '저도 해봤는데 좋더라구요!',
    likes: 15,
  },
  {
    author: '강지우',
    initial: '강',
    content: '오 신기하네요 👍',
    likes: 7,
  },
  {
    author: '조예린',
    initial: '조',
    content: '이 방법 너무 좋아요',
    likes: 4,
  },
  {
    author: '윤시우',
    initial: '윤',
    content: '대박... 몰랐던 정보네요',
    likes: 11,
  },
  {
    author: '장서준',
    initial: '장',
    content: '꿀팁이네요 감사합니다!',
    likes: 6,
  },
];

const TIME_POOL = [
  '2분 전',
  '5분 전',
  '10분 전',
  '15분 전',
  '20분 전',
  '25분 전',
  '30분 전',
  '35분 전',
  '40분 전',
  '45분 전',
  '50분 전',
  '55분 전',
  '1시간 전',
  '2시간 전',
  '3시간 전',
  '5시간 전',
  '1일 전',
];

interface Comment {
  author: string;
  initial: string;
  content: string;
  likes: number;
  timeAgo: string;
  timestamp?: number;
}

// 시간 문자열을 밀리초로 변환하는 함수
function timeAgoToTimestamp(timeAgo: string): number {
  const now = Date.now();

  if (timeAgo.includes('방금')) return now - 1000;
  if (timeAgo.includes('분 전')) {
    const minutes = parseInt(timeAgo);
    return now - minutes * 60 * 1000;
  }
  if (timeAgo.includes('시간 전')) {
    const hours = parseInt(timeAgo);
    return now - hours * 60 * 60 * 1000;
  }
  if (timeAgo.includes('일 전')) {
    const days = parseInt(timeAgo);
    return now - days * 24 * 60 * 60 * 1000;
  }

  return now;
}

/**
 * 게시글 ID를 기반으로 고정된 댓글 목록 생성
 * @param postId 게시글 ID
 * @param count 생성할 댓글 수
 * @returns 댓글 배열
 */
export function generateComments(postId: number, count: number): Comment[] {
  const comments: Comment[] = [];

  for (let i = 0; i < count; i++) {
    const seed = postId * 1000 + i;

    // 시드 기반으로 댓글 풀에서 선택
    const commentIndex = Math.floor(seededRandom(seed) * COMMENT_POOL.length);
    const timeIndex = Math.floor(seededRandom(seed + 1) * TIME_POOL.length);

    const selectedComment = COMMENT_POOL[commentIndex];
    const timeAgo = TIME_POOL[timeIndex];
    const timestamp = timeAgoToTimestamp(timeAgo);
    
    // 1분 이내(60초) 댓글은 좋아요 0으로 설정
    const now = Date.now();
    const isRecent = now - timestamp < 60 * 1000;

    comments.push({
      ...selectedComment,
      likes: isRecent ? 0 : selectedComment.likes,
      timeAgo,
      timestamp,
    });
  }

  return comments;
}
