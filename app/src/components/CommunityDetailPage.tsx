'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Heart,
  MessageSquare,
  Bookmark,
  Share2,
} from 'lucide-react';
import { Top, Bottom } from './Layout';
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
}

export default function CommunityDetailPage({ postId }: PostDetailPageProps) {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // localStorage 사용자 게시글 + 기본 더미 데이터 합치기
    const userPosts = JSON.parse(
      localStorage.getItem('communityPosts') || '[]'
    );
    const allPosts = [...userPosts, ...COMMUNITY_POSTS];
    const foundPost = allPosts.find((p: Post) => p.id === postId);

    if (foundPost) {
      setPost(foundPost);
      // 게시글의 댓글 수에 맞춰 댓글 생성
      const generatedComments = generateComments(postId, foundPost.comments);
      setComments(generatedComments);
    }
  }, [postId]);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
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
                        조회 {post.views}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-[16px] py-[18px]">
                {post.content && (
                  <p className="font-pretendard font-regular leading-[24px] not-italic text-[#151522] text-[14px] whitespace-pre-wrap">
                    {post.content}
                  </p>
                )}
                {post.image && (
                  <div className="mt-[12px] w-full rounded-[8px] overflow-hidden">
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
                    {post.likes + (isLiked ? 1 : 0)}
                  </p>
                </button>
                <div className="flex gap-[8px] items-center">
                  <MessageSquare className="size-[20px] text-[#686873]" />
                  <p className="font-roboto font-normal leading-[21px] text-[#686873] text-[14px]">
                    {post.comments}
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
                  댓글 {post.comments}
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

        <Bottom />
      </div>
    </div>
  );
}
