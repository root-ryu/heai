/**
 * 게시글의 표시용 카운트 값을 가져오는 유틸리티 함수
 * API 게시글은 DB 값을 그대로 사용하고, 더미 게시글은 localStorage를 참조
 */

interface PostCounts {
  likes: number;
  comments: number;
  views: number;
}

// 더미 게시글 ID 목록 (communityPosts.ts에 하드코딩된 것들)
const DUMMY_POST_IDS = [
  1, 2, 3, 4, 5, 6, 7, 101, 102, 103, 104, 105, 106, 201, 202, 301, 302,
];

/**
 * 더미 게시글인지 확인 (하드코딩된 ID 목록과 비교)
 */
export function isDummyPost(postId: number | string): boolean {
  const numId = typeof postId === 'string' ? parseInt(postId) : postId;
  return DUMMY_POST_IDS.includes(numId);
}

/**
 * 게시글의 표시용 카운트 값을 가져옴
 * @param postId - 게시글 ID
 * @param dbValues - DB에서 가져온 값 (likes, comments, views)
 * @param isMounted - 클라이언트에서 마운트되었는지 여부 (SSR 방지)
 */
export function getDisplayCounts(
  postId: number | string,
  dbValues: PostCounts,
  isMounted: boolean = true
): PostCounts {
  // API 게시글(더미가 아닌 것)은 DB 값을 그대로 사용
  if (!isDummyPost(postId)) {
    return dbValues;
  }

  // 더미 게시글은 localStorage에서 불러오기 (클라이언트에서만)
  if (!isMounted || typeof window === 'undefined') {
    return dbValues;
  }

  const storedLikes = localStorage.getItem(`post_${postId}_likes`);
  const storedComments = localStorage.getItem(`post_${postId}_commentsCount`);
  const storedViews = localStorage.getItem(`post_${postId}_views`);

  return {
    likes: storedLikes ? parseInt(storedLikes) : dbValues.likes,
    comments: storedComments ? parseInt(storedComments) : dbValues.comments,
    views: storedViews ? parseInt(storedViews) : dbValues.views,
  };
}
