'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, MessageSquare, Bookmark, Share2, Trash2 } from 'lucide-react';
import { Top } from './Layout';
import { generateComments } from '../utils/commentGenerator';
import { COMMUNITY_POSTS, type Post } from '../data/communityPosts';
import { getUserNickname } from '../utils/nickname';
import svgPaths from '../imports/svg-jjl4gh5igk';

interface PostDetailPageProps {
  postId: number | string;
}

interface Comment {
  id?: string;
  author: string;
  initial: string;
  content: string;
  likes: number;
  timeAgo: string;
  timestamp?: number;
}

// 타임스탬프를 시간 문자열로 변환하는 함수
function getTimeAgoString(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return '방금 전';
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  return `${days}일 전`;
}

export default function CommunityDetailPage({ postId }: PostDetailPageProps) {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedVoteOption, setSelectedVoteOption] = useState<number | null>(
    null
  );
  const [votePercentages, setVotePercentages] = useState<number[]>([]);
  const [commentInput, setCommentInput] = useState('');
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [commentLikesState, setCommentLikesState] = useState<{
    [key: string]: { liked: boolean; count: number };
  }>({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{
    type: 'post' | 'comment';
    id?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasViewedRef = useRef(false);

  useEffect(() => {
    // ID를 문자열로 변환하여 비교 (API ID는 문자열일 수 있음)
    const foundDummyPost = COMMUNITY_POSTS.find((p: Post) => String(p.id) === String(postId));

    if (foundDummyPost) {
      const foundPost = foundDummyPost;
      setPost(foundPost);

      // localStorage에서 좋아요/댓글 수 불러오기
      const storedLikes = localStorage.getItem(`post_${postId}_likes`);
      const storedCommentsCount = localStorage.getItem(
        `post_${postId}_commentsCount`
      );
      const storedIsLiked = localStorage.getItem(`post_${postId}_isLiked`);
      const storedBookmarked = localStorage.getItem(
        `post_${postId}_bookmarked`
      );

      setLikesCount(storedLikes ? parseInt(storedLikes) : foundPost.likes);
      setCommentsCount(
        storedCommentsCount ? parseInt(storedCommentsCount) : foundPost.comments
      );
      setIsLiked(storedIsLiked === 'true');
      setIsBookmarked(storedBookmarked === 'true');

      // 조회수 불러오기 및 증가 (중복 실행 방지)
      const viewsKey = `post_${postId}_views`;
      const lastViewKey = `post_${postId}_lastView`;
      const storedViews = localStorage.getItem(viewsKey);
      const lastViewTime = localStorage.getItem(lastViewKey);
      const currentTime = Date.now();
      const currentViews = storedViews
        ? parseInt(storedViews)
        : foundPost.views;

      // 마지막 조회 후 1초 이상 지났을 때만 증가 (Strict Mode 중복 방지)
      if (!lastViewTime || currentTime - parseInt(lastViewTime) > 1000) {
        const newViews = currentViews + 1;
        console.log(
          '[조회수] postId:',
          postId,
          '이전:',
          currentViews,
          '증가 후:',
          newViews
        );
        setViewsCount(newViews);
        localStorage.setItem(viewsKey, newViews.toString());
        localStorage.setItem(lastViewKey, currentTime.toString());
      } else {
        console.log(
          '[조회수] 중복 방지 - postId:',
          postId,
          '현재:',
          currentViews
        );
        setViewsCount(currentViews);
      }

      // 게시글의 댓글 수에 맞춰 댓글 생성
      const generatedComments = generateComments(postId, foundPost.comments);

      // localStorage에서 사용자가 작성한 댓글 불러오기
      const storedComments = localStorage.getItem(`post_${postId}_comments`);
      const userComments = storedComments ? JSON.parse(storedComments) : [];

      // 사용자 댓글 + 생성된 댓글 합치기 후 날짜순 정렬 (최신순)
      const allComments = [...userComments, ...generatedComments];
      allComments.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      setComments(allComments);

      // 댓글 좋아요 상태 초기화 (타임스탬프 기반)
      const initialCommentLikes: {
        [key: string]: { liked: boolean; count: number };
      } = {};
      allComments.forEach((comment) => {
        if (!comment.timestamp) return; // timestamp가 없으면 스킵

        const commentId = comment.timestamp.toString();
        const likedKey = `post_${postId}_comment_${commentId}_liked`;
        const likesKey = `post_${postId}_comment_${commentId}_likes`;
        const storedLiked = localStorage.getItem(likedKey);
        const storedLikes = localStorage.getItem(likesKey);

        initialCommentLikes[commentId] = {
          liked: storedLiked === 'true',
          count: storedLikes ? parseInt(storedLikes) : comment.likes,
        };
      });
      setCommentLikesState(initialCommentLikes);

      // 투표 옵션 초기 퍼센테이지 설정
      if (foundPost.voteOptions) {
        const storedVoteOption = localStorage.getItem(
          `post_${postId}_voteOption`
        );
        const storedVotePercentages = localStorage.getItem(
          `post_${postId}_votePercentages`
        );

        if (storedVoteOption !== null) {
          setSelectedVoteOption(parseInt(storedVoteOption));
        }

        if (storedVotePercentages) {
          setVotePercentages(JSON.parse(storedVotePercentages));
        } else {
          setVotePercentages(
            foundPost.voteOptions.map((opt) => opt.percentage)
          );
        }
      }
      setIsLoading(false);
    } else {
      // API에서 게시글 불러오기
      const fetchPost = async () => {
        try {
          const res = await fetch(`/api/community/posts/${postId}`);
          if (res.ok) {
            const data = await res.json();
            
            // 카테고리 색상 매핑 (CommunityPage와 동일)
            const categoryInfo: Record<string, { color: string; bgColor: string }> = {
              '캐릭터': { color: '#FFB347', bgColor: 'rgba(255,179,71,0.67)' },
              '자유게시판': { color: '#FF8B80', bgColor: 'rgba(255,139,128,0.67)' },
              '루틴게시판': { color: '#22D760', bgColor: 'rgba(34,215,96,0.67)' },
              '꿀팁': { color: '#C8A5D8', bgColor: 'rgba(200,165,216,0.67)' },
            };
            const catInfo = categoryInfo[data.category] || { color: '#5A54FA', bgColor: 'rgba(90,84,250,0.67)' };
            const timestamp = new Date(data.created_at).getTime();

            const mappedPost: Post = {
              id: data.id,
              category: data.category,
              categoryColor: `bg-[${catInfo.bgColor}]`,
              categoryBgColor: catInfo.bgColor,
              title: data.title,
              content: data.content,
              image: data.image,
              views: data.views || 0,
              likes: data.likes || 0,
              comments: data.comments_count || 0,
              timeAgo: '방금 전',
              timestamp: timestamp,
              author: data.author,
            };

            setPost(mappedPost);
            setLikesCount(mappedPost.likes);
            setCommentsCount(mappedPost.comments);
            setViewsCount(mappedPost.views);
            
            // 조회수 증가 로직 (API 호출)
            // 쿨타임 없이 매번 증가 (사용자 요청)
            // React Strict Mode로 인한 중복 호출 방지
            if (!hasViewedRef.current) {
              hasViewedRef.current = true;
              try {
                await fetch(`/api/community/posts/${postId}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ type: 'view' }),
                });
                // UI 업데이트 (낙관적)
                setViewsCount((prev) => prev + 1);
              } catch (error) {
                console.error('Failed to increment views:', error);
              }
            }

            // API 게시글은 localStorage 좋아요/북마크 상태만 확인 (카운트는 DB 기준)
            const storedIsLiked = localStorage.getItem(`post_${postId}_isLiked`);
            const storedBookmarked = localStorage.getItem(`post_${postId}_bookmarked`);
            setIsLiked(storedIsLiked === 'true');
            setIsBookmarked(storedBookmarked === 'true');
            
            // 댓글 불러오기
            const commentsRes = await fetch(`/api/community/comments?postId=${postId}`);
            if (commentsRes.ok) {
              const commentsData = await commentsRes.json();
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const mappedComments: Comment[] = commentsData.map((c: any) => ({
                id: c.id, // ID 저장 (삭제 시 필요)
                author: c.author,
                initial: c.initial || c.author.charAt(0),
                content: c.content,
                likes: c.likes || 0,
                timeAgo: getTimeAgoString(new Date(c.created_at).getTime()),
                timestamp: new Date(c.created_at).getTime(),
              }));
              setComments(mappedComments);
              setCommentsCount(mappedComments.length);

              // 댓글 좋아요 상태 초기화 (API 댓글용)
              const initialCommentLikes: {
                [key: string]: { liked: boolean; count: number };
              } = {};
              mappedComments.forEach((comment) => {
                 const commentId = comment.id || comment.timestamp?.toString();
                 if (!commentId) return;
                 
                 const likedKey = `post_${postId}_comment_${commentId}_liked`;
                 const likesKey = `post_${postId}_comment_${commentId}_likes`;
                 const storedLiked = localStorage.getItem(likedKey);
                 const storedLikes = localStorage.getItem(likesKey);

                 initialCommentLikes[commentId] = {
                   liked: storedLiked === 'true',
                   count: storedLikes ? parseInt(storedLikes) : comment.likes,
                 };
              });
              setCommentLikesState(initialCommentLikes);
            }
          }
        } catch (error) {
          console.error('Failed to fetch post:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const handleVoteClick = (optionIndex: number) => {
    if (!post?.voteOptions) return;

    if (selectedVoteOption === optionIndex) {
      setSelectedVoteOption(null);
      const originalPercentages = post.voteOptions.map((opt) => opt.percentage);
      setVotePercentages(originalPercentages);
      localStorage.removeItem(`post_${postId}_voteOption`);
      localStorage.removeItem(`post_${postId}_votePercentages`);
      return;
    }

    setSelectedVoteOption(optionIndex);

    const totalVotes =
      post.voteOptions.reduce((sum, opt) => sum + opt.percentage, 0) || 1;
    const voteCounts = post.voteOptions.map((opt) =>
      Math.round((opt.percentage / 100) * totalVotes)
    );

    voteCounts[optionIndex] += 1;
    const newTotal = voteCounts.reduce((sum, count) => sum + count, 0);

    const newPercentages = voteCounts.map((count) =>
      Math.round((count / newTotal) * 100)
    );

    const diff = 100 - newPercentages.reduce((sum, p) => sum + p, 0);
    if (diff !== 0) {
      newPercentages[optionIndex] += diff;
    }

    setVotePercentages(newPercentages);

    localStorage.setItem(`post_${postId}_voteOption`, optionIndex.toString());
    localStorage.setItem(
      `post_${postId}_votePercentages`,
      JSON.stringify(newPercentages)
    );
  };

  const handleLikeToggle = async () => {
    const newIsLiked = !isLiked;
    const newLikesCount = newIsLiked ? likesCount + 1 : likesCount - 1;

    setIsLiked(newIsLiked);
    setLikesCount(newLikesCount);

    localStorage.setItem(`post_${postId}_isLiked`, newIsLiked.toString());
    localStorage.setItem(`post_${postId}_likes`, newLikesCount.toString());

    const isDummyPost = COMMUNITY_POSTS.some(p => String(p.id) === String(postId));

    if (!isDummyPost) {
      try {
        await fetch(`/api/community/posts/${postId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ increment: newIsLiked }),
        });
      } catch (error) {
        console.error('Failed to update likes:', error);
      }
    }
  };

  const handleBookmarkToggle = () => {
    const newBookmarked = !isBookmarked;
    setIsBookmarked(newBookmarked);
    localStorage.setItem(`post_${postId}_bookmarked`, newBookmarked.toString());
  };

  const handleDeletePost = () => {
    setDeleteTarget({ type: 'post' });
    setShowDeleteModal(true);
  };

  const handleDeleteComment = (commentId: string) => {
    setDeleteTarget({ type: 'comment', id: commentId });
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    const isDummyPost = COMMUNITY_POSTS.some(p => String(p.id) === String(postId));

    if (deleteTarget.type === 'post') {
      if (isDummyPost) {
        alert('타인이 작성한 게시글은 삭제할 수 없습니다.');
        return;
      }

      try {
        const res = await fetch(`/api/community/posts/${postId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ author: getUserNickname() }),
        });

        if (res.ok) {
          localStorage.removeItem(`post_${postId}_likes`);
          localStorage.removeItem(`post_${postId}_isLiked`);
          localStorage.removeItem(`post_${postId}_bookmarked`);
          localStorage.removeItem(`post_${postId}_views`);
          localStorage.removeItem(`post_${postId}_lastView`);
          localStorage.removeItem(`post_${postId}_comments`);
          localStorage.removeItem(`post_${postId}_commentsCount`);
          localStorage.removeItem(`post_${postId}_voteOption`);
          localStorage.removeItem(`post_${postId}_votePercentages`);

          router.push('/community');
        } else {
          alert('게시글 삭제에 실패했습니다.');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('오류가 발생했습니다.');
      }
    } else if (deleteTarget.type === 'comment' && deleteTarget.id) {
      if (isDummyPost) {
        const updatedComments = comments.filter(
          (comment) => comment.timestamp?.toString() !== deleteTarget.id
        );
        setComments(updatedComments);

        const userComments = updatedComments.filter((c) => c.author === getUserNickname());
        localStorage.setItem(
          `post_${postId}_comments`,
          JSON.stringify(userComments)
        );

        const newCommentsCount = updatedComments.length;
        setCommentsCount(newCommentsCount);
        localStorage.setItem(
          `post_${postId}_commentsCount`,
          newCommentsCount.toString()
        );

        localStorage.removeItem(`post_${postId}_comment_${deleteTarget.id}_liked`);
        localStorage.removeItem(`post_${postId}_comment_${deleteTarget.id}_likes`);

        setCommentLikesState((prev) => {
          const newState = { ...prev };
          delete newState[deleteTarget.id!];
          return newState;
        });
      } else {
        try {
          const res = await fetch(`/api/community/comments/${deleteTarget.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ author: getUserNickname() }),
          });

          if (res.ok) {
            const updatedComments = comments.filter(c => c.id !== deleteTarget.id);
            setComments(updatedComments);
            setCommentsCount(updatedComments.length);
            localStorage.setItem(
              `post_${postId}_commentsCount`,
              updatedComments.length.toString()
            );
            
            setCommentLikesState((prev) => {
              const newState = { ...prev };
              delete newState[deleteTarget.id!];
              return newState;
            });
          } else {
             // Alert removed as requested
             console.error('Failed to delete comment');
          }
        } catch (error) {
          console.error('Error deleting comment:', error);
        }
      }
    }

    setShowDeleteModal(false);
    setDeleteTarget(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteTarget(null);
  };

  const handleCommentLikeToggle = async (commentId: string) => {
    const currentLikeState = commentLikesState[commentId] || {
      liked: false,
      count: 0,
    };
    const newLiked = !currentLikeState.liked;
    const newCount = newLiked
      ? currentLikeState.count + 1
      : currentLikeState.count - 1;

    setCommentLikesState((prev) => ({
      ...prev,
      [commentId]: { liked: newLiked, count: newCount },
    }));

    localStorage.setItem(
      `post_${postId}_comment_${commentId}_liked`,
      newLiked.toString()
    );
    localStorage.setItem(
      `post_${postId}_comment_${commentId}_likes`,
      newCount.toString()
    );

    const isDummyPost = COMMUNITY_POSTS.some(p => String(p.id) === String(postId));
    const comment = comments.find(c => c.id === commentId || c.timestamp?.toString() === commentId);

    if (!isDummyPost && comment && comment.id) {
       try {
        await fetch(`/api/community/comments/${comment.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ increment: newLiked }),
        });
      } catch (error) {
        console.error('Failed to update comment likes:', error);
      }
    }
  };

  const handleCommentSubmit = async () => {
    if (!commentInput.trim()) return;

    const isDummyPost = COMMUNITY_POSTS.some(p => String(p.id) === String(postId));

    if (isDummyPost) {
      const nickname = getUserNickname();
      const newComment: Comment = {
        author: nickname,
        initial: nickname.charAt(0),
        content: commentInput,
        likes: 0,
        timeAgo: '방금 전',
        timestamp: Date.now(),
      };

      const updatedComments = [newComment, ...comments];
      updatedComments.sort(
        (a, b) => (b.timestamp || 0) - (a.timestamp || 0)
      );
      setComments(updatedComments);

      const newCommentId = newComment.timestamp!.toString();
      setCommentLikesState((prev) => ({
        ...prev,
        [newCommentId]: { liked: false, count: 0 },
      }));

      const newCommentsCount = commentsCount + 1;
      setCommentsCount(newCommentsCount);

      const userComments = updatedComments.filter(
        (c) => c.author === nickname
      );
      localStorage.setItem(
        `post_${postId}_comments`,
        JSON.stringify(userComments)
      );
      localStorage.setItem(
        `post_${postId}_commentsCount`,
        newCommentsCount.toString()
      );

      setCommentInput('');
      const textarea = document.querySelector('textarea');
      if (textarea) textarea.style.height = 'auto';
    } else {
      try {
        const res = await fetch('/api/community/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            postId,
            author: getUserNickname(),
            content: commentInput,
          }),
        });

        if (res.ok) {
          const newCommentData = await res.json();
          const newComment: Comment = {
            id: newCommentData.id,
            author: newCommentData.author,
            initial: newCommentData.initial || newCommentData.author.charAt(0),
            content: newCommentData.content,
            likes: 0,
            timeAgo: '방금 전',
            timestamp: new Date(newCommentData.created_at).getTime(),
          };

          setComments([newComment, ...comments]);
          setCommentsCount(commentsCount + 1);
          localStorage.setItem(
            `post_${postId}_commentsCount`,
            (commentsCount + 1).toString()
          );
          setCommentInput('');
          const textarea = document.querySelector('textarea');
          if (textarea) textarea.style.height = 'auto';
        } else {
          alert('댓글 작성에 실패했습니다.');
        }
      } catch (error) {
        console.error('Error posting comment:', error);
        alert('오류가 발생했습니다.');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5A54FA]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p className="font-pretendard text-[16px] text-[#999999]">
          게시글을 찾을 수 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col">
        <Top />

        {/* Header */}
        <div className="bg-white h-[48px] overflow-clip relative shrink-0 w-full">
          <div className="absolute content-stretch flex items-start justify-between left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
            <button
              onClick={() => router.back()}
              className="block cursor-pointer relative shrink-0 size-[30px] hover:opacity-70 transition-opacity"
            >
              <svg
                className="block w-[30px] h-[30px]"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 30 30"
              >
                <path
                  d="M21 26L10 15L21 4"
                  stroke="#5A54FA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <button
                onClick={() => router.push('/calendar')}
                className="relative shrink-0 size-[30px] cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 30 30"
                >
                  <path
                    d={svgPaths.p18c5f880}
                    stroke="#5A54FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                onClick={() => router.push('/notifications')}
                className="relative shrink-0 size-[30px] cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 30 30"
                >
                  <path
                    d={svgPaths.p20913a00}
                    stroke="#5A54FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="absolute font-pretendard font-semibold leading-[24px] left-1/2 not-italic text-[#02010e] text-[20px] text-center text-nowrap top-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
            {post.category}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
          <div className="flex flex-col gap-[12px]">
            {/* Post Header & Content */}
            <div className="bg-white">
              {/* Post Header */}
              <div className="border-b border-neutral-100 px-[16px] py-[18px]">
                <div className="flex items-start justify-between mb-[18px]">
                  <p className="font-pretendard font-bold leading-[27px] not-italic text-[#040415] text-[20px] flex-1">
                    {post.title}
                  </p>
                  {post.author === getUserNickname() && (
                    <button
                      onClick={handleDeletePost}
                      className="ml-[8px] text-[#999999] hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="size-[20px]" />
                    </button>
                  )}
                </div>
                <div className="flex gap-[12px] items-center">
                  <div className="bg-[rgba(0,0,0,0.2)] rounded-full size-[40px] flex items-center justify-center">
                    <p className="font-pretendard font-regular leading-[16px] not-italic text-[12px] text-white">
                      {post.author.charAt(0)}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-pretendard font-bold leading-[21px] not-italic text-[#151522] text-[14px]">
                      {post.author}
                    </p>
                    <div className="flex gap-[8px] items-center text-[#999999]">
                      <p className="font-pretendard font-regular leading-[16px] not-italic text-[12px]">
                        {post.timestamp
                          ? getTimeAgoString(post.timestamp)
                          : post.timeAgo}
                      </p>
                      <p className="font-arial font-regular text-[11px]">|</p>
                      <p className="font-pretendard font-regular leading-[16px] not-italic text-[12px]">
                        조회 {viewsCount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-[16px] py-[18px]">
                {post.content && (
                  <p className="font-pretendard font-regular leading-[24px] not-italic text-[#151522] text-[14px] whitespace-pre-wrap mb-[12px]">
                    {post.content}
                  </p>
                )}

                {/* Vote Section */}
                {post.hasVote && post.voteOptions && (
                  <div className="flex flex-col gap-[8px] mb-[12px]">
                    {post.voteOptions.map((option, idx) => {
                      const currentPercentage =
                        votePercentages[idx] ?? option.percentage;
                      const isSelected = selectedVoteOption === idx;
                      const hasVoted = selectedVoteOption !== null;

                      return (
                        <div
                          key={idx}
                          onClick={() => handleVoteClick(idx)}
                          className="relative rounded-[10px] overflow-hidden transition-all cursor-pointer bg-[#f8f8f8]"
                        >
                          <div className="p-[10px]">
                            {currentPercentage > 0 && (
                              <div
                                className="absolute h-full left-0 top-0 transition-all duration-500 ease-out rounded-tl-[10px] rounded-bl-[10px]"
                                style={{
                                  width: `${currentPercentage}%`,
                                  backgroundColor: isSelected
                                    ? '#5A54FA'
                                    : hasVoted
                                    ? 'rgba(90, 84, 250, 0.5)'
                                    : option.color,
                                }}
                              />
                            )}
                            <div className="relative z-10 flex items-center justify-between">
                              <p
                                className={`font-pretendard text-[16px] transition-colors ${
                                  isSelected
                                    ? 'text-white font-semibold'
                                    : currentPercentage > 0
                                    ? 'text-white font-semibold'
                                    : 'text-black'
                                }`}
                              >
                                {option.text}
                                {isSelected && (
                                  <span className="ml-[6px] text-[14px]">
                                    ✓
                                  </span>
                                )}
                              </p>
                              {isSelected && (
                                <p className="font-pretendard text-[14px] font-medium text-white">
                                  {currentPercentage}%
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {post.image && (
                  <div className="w-full rounded-[8px] overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Action Icons */}
            <div className="bg-white border-t border-b border-neutral-100 px-[36px] py-[18px]">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleLikeToggle}
                  className="flex gap-[8px] items-center cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <Heart
                    className={`size-[20px] ${
                      isLiked ? 'fill-red-500 text-red-500' : 'text-[#686873]'
                    }`}
                  />
                  <p className="font-roboto font-normal leading-[21px] text-[#686873] text-[14px]">
                    {likesCount}
                  </p>
                </button>
                <div className="flex gap-[8px] items-center">
                  <MessageSquare className="size-[20px] text-[#686873]" />
                  <p className="font-roboto font-normal leading-[21px] text-[#686873] text-[14px]">
                    {commentsCount}
                  </p>
                </div>
                <button
                  onClick={handleBookmarkToggle}
                  className="cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <Bookmark
                    className={`size-[20px] ${
                      isBookmarked
                        ? 'fill-[#5A54FA] text-[#5A54FA]'
                        : 'text-[#686873]'
                    }`}
                  />
                </button>
                <button className="flex gap-[8px] items-center cursor-pointer hover:opacity-70 transition-opacity">
                  <Share2 className="size-[20px] text-[#686873]" />
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white px-[16px] pb-[20px]">
              <div className="pb-[10px] pt-[18px]">
                <p className="font-pretendard font-bold leading-[24px] not-italic text-[#040415] text-[16px]">
                  댓글 {commentsCount}
                </p>
              </div>

              {comments.map((comment, index) => {
                const commentId = comment.id || comment.timestamp?.toString();
                if (!commentId) return null;

                const commentState = commentLikesState[commentId] || {
                  liked: false,
                  count: comment.likes,
                };

                // 동적 시간 계산
                const displayTime = comment.timestamp
                  ? getTimeAgoString(comment.timestamp)
                  : comment.timeAgo;

                return (
                  <div
                    key={commentId}
                    className="border-b border-neutral-100 flex gap-[12px] items-start pb-[13px] pt-[12px]"
                  >
                    <div className="bg-[rgba(0,0,0,0.2)] rounded-full size-[32px] flex items-center justify-center shrink-0">
                      <p className="font-pretendard font-regular leading-[16px] not-italic text-[12px] text-white">
                        {comment.initial}
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-[6px] items-center mb-[4px]">
                        <p className="font-pretendard font-bold leading-[21px] not-italic text-[#151522] text-[14px]">
                          {comment.author}
                        </p>
                        <p className="font-pretendard font-regular leading-[16px] not-italic text-[#999999] text-[12px]">
                          {displayTime}
                        </p>
                        {comment.author === getUserNickname() && (
                          <button
                            onClick={() => handleDeleteComment(commentId)}
                            className="ml-auto text-[#999999] hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="size-[16px]" />
                          </button>
                        )}
                      </div>
                      <p className="font-pretendard font-regular leading-[24px] not-italic text-[#151522] text-[14px] mb-[4px]">
                        {comment.content}
                      </p>
                      <div className="flex gap-[10px] items-center">
                        <button
                          onClick={() => handleCommentLikeToggle(commentId)}
                          className="flex gap-[4px] items-center cursor-pointer hover:opacity-70 transition-opacity"
                        >
                          <Heart
                            className={`size-[14px] ${
                              commentState.liked
                                ? 'fill-red-500 text-red-500'
                                : 'text-[#999999]'
                            }`}
                          />
                          <p className="font-roboto font-normal leading-[16px] text-[#999999] text-[12px]">
                            {commentState.count}
                          </p>
                        </button>
                        <p className="font-pretendard font-regular leading-[16px] not-italic text-[#999999] text-[12px]">
                          답글
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Comment Input Section */}
        <div className="bg-white border-t border-[#f0f0f0] px-[16px] py-[12px] shrink-0">
          <div className="flex gap-[8px] items-end">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="댓글을 입력하세요..."
              rows={1}
              className="flex-1 bg-[#F5F5F5] rounded-[20px] px-[16px] py-[10px] font-pretendard text-[14px] text-[#151522] placeholder:text-[#a4a4a4] outline-none caret-[#5A54FA] resize-none overflow-hidden min-h-[40px] max-h-[120px]"
              style={{ caretColor: '#5A54FA' }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
            <button
              onClick={handleCommentSubmit}
              disabled={!commentInput.trim()}
              className="bg-[#5A54FA] text-white rounded-[20px] px-[20px] py-[10px] font-pretendard font-medium text-[14px] disabled:bg-[#F5F5F5] disabled:text-[#a4a4a4] transition-colors shrink-0"
            >
              등록
            </button>
          </div>
        </div>
      </div>

      {/* 삭제 확인 모달 */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] p-[24px] w-[300px] mx-[16px]">
            <p className="font-pretendard font-bold text-[18px] text-[#040415] mb-[12px] text-center">
              {deleteTarget?.type === 'post' ? '게시글 삭제' : '댓글 삭제'}
            </p>
            <p className="font-pretendard font-regular text-[14px] text-[#686873] mb-[24px] text-center">
              {deleteTarget?.type === 'post'
                ? '게시글을 삭제하시겠습니까?'
                : '댓글을 삭제하시겠습니까?'}
            </p>
            <div className="flex gap-[8px]">
              <button
                onClick={cancelDelete}
                className="flex-1 bg-[#F5F5F5] text-[#686873] rounded-[12px] py-[12px] font-pretendard font-medium text-[14px] hover:bg-[#E5E5E5] transition-colors"
              >
                취소
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 bg-[#5A54FA] text-white rounded-[12px] py-[12px] font-pretendard font-medium text-[14px] hover:bg-[#4A44EA] transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
