'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, MessageSquare, Bookmark, Share2 } from 'lucide-react';
import { Top } from './Layout';
import { generateComments } from '../utils/commentGenerator';
import { COMMUNITY_POSTS, type Post } from '../data/communityPosts';
import svgPaths from '../imports/svg-jjl4gh5igk';

interface PostDetailPageProps {
  postId: number;
}

interface Comment {
  author: string;
  initial: string;
  content: string;
  likes: number;
  timeAgo: string;
  timestamp?: number;
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

  useEffect(() => {
    // localStorage 사용자 게시글 + 기본 더미 데이터 합치기
    const userPosts = JSON.parse(
      localStorage.getItem('communityPosts') || '[]'
    );
    const allPosts = [...userPosts, ...COMMUNITY_POSTS];
    const foundPost = allPosts.find((p: Post) => p.id === postId);

    if (foundPost) {
      setPost(foundPost);

      // localStorage에서 좋아요/댓글 수 불러오기
      const storedLikes = localStorage.getItem(`post_${postId}_likes`);
      const storedCommentsCount = localStorage.getItem(
        `post_${postId}_commentsCount`
      );
      const storedIsLiked = localStorage.getItem(`post_${postId}_isLiked`);
      const storedBookmarked = localStorage.getItem(`post_${postId}_bookmarked`);

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
      const currentViews = storedViews ? parseInt(storedViews) : foundPost.views;
      
      // 마지막 조회 후 1초 이상 지났을 때만 증가 (Strict Mode 중복 방지)
      if (!lastViewTime || currentTime - parseInt(lastViewTime) > 1000) {
        const newViews = currentViews + 1;
        console.log('[조회수] postId:', postId, '이전:', currentViews, '증가 후:', newViews);
        setViewsCount(newViews);
        localStorage.setItem(viewsKey, newViews.toString());
        localStorage.setItem(lastViewKey, currentTime.toString());
      } else {
        console.log('[조회수] 중복 방지 - postId:', postId, '현재:', currentViews);
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

      // 투표 옵션 초기 퍼센테이지 설정
      if (foundPost.voteOptions) {
        setVotePercentages(foundPost.voteOptions.map((opt) => opt.percentage));
      }
    }
  }, [postId]);

  const handleVoteClick = (optionIndex: number) => {
    if (!post?.voteOptions) return;

    // 같은 옵션 클릭 시 선택 취소
    if (selectedVoteOption === optionIndex) {
      setSelectedVoteOption(null);
      // 원래 퍼센테이지로 복원
      setVotePercentages(post.voteOptions.map((opt) => opt.percentage));
      return;
    }

    setSelectedVoteOption(optionIndex);

    // 투표 수 계산 (기존 퍼센테이지로부터 역산)
    const totalVotes =
      post.voteOptions.reduce((sum, opt) => sum + opt.percentage, 0) || 1;
    const voteCounts = post.voteOptions.map((opt) =>
      Math.round((opt.percentage / 100) * totalVotes)
    );

    // 선택된 옵션에 1표 추가
    voteCounts[optionIndex] += 1;
    const newTotal = voteCounts.reduce((sum, count) => sum + count, 0);

    // 새로운 퍼센테이지 계산
    const newPercentages = voteCounts.map((count) =>
      Math.round((count / newTotal) * 100)
    );

    // 반올림으로 인한 오차 조정 (총합이 100이 되도록)
    const diff = 100 - newPercentages.reduce((sum, p) => sum + p, 0);
    if (diff !== 0) {
      newPercentages[optionIndex] += diff;
    }

    setVotePercentages(newPercentages);
  };

  const handleLikeToggle = () => {
    const newIsLiked = !isLiked;
    const newLikesCount = newIsLiked ? likesCount + 1 : likesCount - 1;

    setIsLiked(newIsLiked);
    setLikesCount(newLikesCount);

    // localStorage에 저장
    localStorage.setItem(`post_${postId}_isLiked`, newIsLiked.toString());
    localStorage.setItem(`post_${postId}_likes`, newLikesCount.toString());
  };

  const handleBookmarkToggle = () => {
    const newBookmarked = !isBookmarked;
    setIsBookmarked(newBookmarked);
    // localStorage에 저장
    localStorage.setItem(`post_${postId}_bookmarked`, newBookmarked.toString());
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p className="font-pretendard text-[16px] text-[#999999]">
          게시글을 찾을 수 없습니다.
        </p>
      </div>
    );
  }

  const getCategoryBgColor = () => {
    if (post.categoryBgColor) return post.categoryBgColor;

    const colorMap: Record<string, string> = {
      자유게시판: 'rgba(255,139,128,0.67)',
      캐릭터: 'rgba(255,179,71,0.67)',
      루틴게시판: 'rgba(34,215,96,0.67)',
      꿀팁: 'rgba(200,165,216,0.67)',
    };
    return colorMap[post.category] || 'rgba(90,84,250,0.67)';
  };

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
                <p className="font-pretendard font-bold leading-[27px] not-italic text-[#040415] text-[20px] mb-[18px]">
                  {post.title}
                </p>
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
                        {post.timeAgo}
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

                      return (
                        <div
                          key={idx}
                          onClick={() => handleVoteClick(idx)}
                          className={`relative rounded-[10px] border overflow-hidden transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#5A54FA]'
                              : 'border-[#f0f0f0] hover:border-[#5A54FA]'
                          }`}
                        >
                          <div className="p-[10px]">
                            {currentPercentage > 0 && (
                              <div
                                className="absolute h-full left-0 top-0 transition-all duration-500 ease-out"
                                style={{
                                  width: `${currentPercentage}%`,
                                  backgroundColor: isSelected
                                    ? '#5A54FA'
                                    : option.color,
                                }}
                              />
                            )}
                            <div className="relative z-10 flex items-center justify-between">
                              <p
                                className={`font-pretendard text-[16px] transition-colors ${
                                  currentPercentage > 0
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
                              <p
                                className={`font-pretendard text-[14px] font-medium transition-colors ${
                                  currentPercentage > 0
                                    ? 'text-white'
                                    : 'text-[#a4a4a4]'
                                }`}
                              >
                                {currentPercentage}%
                              </p>
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

              {comments.map((comment, index) => (
                <div
                  key={index}
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
                        {comment.timeAgo}
                      </p>
                    </div>
                    <p className="font-pretendard font-regular leading-[24px] not-italic text-[#151522] text-[14px] mb-[4px]">
                      {comment.content}
                    </p>
                    <div className="flex gap-[10px] items-center">
                      <div className="flex gap-[4px] items-center">
                        <Heart className="size-[14px] text-[#999999]" />
                        <p className="font-roboto font-normal leading-[16px] text-[#999999] text-[12px]">
                          {comment.likes}
                        </p>
                      </div>
                      <p className="font-pretendard font-regular leading-[16px] not-italic text-[#999999] text-[12px]">
                        답글
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              onClick={() => {
                if (commentInput.trim()) {
                  // 새 댓글 객체 생성
                  const newComment: Comment = {
                    author: '나',
                    initial: '나',
                    content: commentInput,
                    likes: 0,
                    timeAgo: '방금 전',
                    timestamp: Date.now(),
                  };

                  // 댓글 목록에 추가 후 날짜순 정렬 (최신순)
                  const updatedComments = [newComment, ...comments];
                  updatedComments.sort(
                    (a, b) => (b.timestamp || 0) - (a.timestamp || 0)
                  );
                  setComments(updatedComments);

                  // 댓글 수 증가
                  const newCommentsCount = commentsCount + 1;
                  setCommentsCount(newCommentsCount);

                  // localStorage에 사용자 댓글만 저장
                  const userComments = updatedComments.filter(
                    (c) => c.author === '나'
                  );
                  localStorage.setItem(
                    `post_${postId}_comments`,
                    JSON.stringify(userComments)
                  );
                  localStorage.setItem(
                    `post_${postId}_commentsCount`,
                    newCommentsCount.toString()
                  );

                  // 입력창 초기화
                  setCommentInput('');

                  // textarea 높이 초기화
                  const textarea = document.querySelector('textarea');
                  if (textarea) {
                    textarea.style.height = 'auto';
                  }
                }
              }}
              disabled={!commentInput.trim()}
              className="bg-[#5A54FA] text-white rounded-[20px] px-[20px] py-[10px] font-pretendard font-medium text-[14px] disabled:bg-[#F5F5F5] disabled:text-[#a4a4a4] transition-colors shrink-0"
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
