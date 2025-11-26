'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { Top, Bottom } from './Layout';
import CommunityHeader from './community/CommunityHeader';
import SearchBar from './community/SearchBar';
import CategoryTabs from './community/CategoryTabs';
import BookmarkButton from './community/BookmarkButton';
import FloatingWriteButton from './community/FloatingWriteButton';
import svgPaths from '../imports/svg-2hkovzo4c1';
import svgPathsGrid from '../imports/svg-mfg8nwobt9';

const imgFrame2147237665 = '/fcbf00c6e7669c5731c5c6279240b0de44d03a29.png';
const img81C692A7A7Be452DBf947A68C7B899Ba1 =
  '/507fd8bd7df8fea3fd6397e46c008e281673c2b5.png';
const imgChatGptImage20258260554501 =
  '/a17109099732baa2516d67467fbb4097c0f27c32.png';
const imgChatGptImage20258260325201 =
  '/38081470ca4fec66da3564d88891c95b3c138e4b.png';
const imgRectangle = '/e4202411ab30ef9d32bc99aa9008acaf4e50181f.png';
const img81C692A7A7Be452DBf947A68C7B899Ba2 =
  '/71462b102d5e572fde7e57cd40c6bc509b1d5cac.png';

interface Post {
  id: number;
  title: string;
  author: string;
  image: string;
  views: number;
  likes: number;
  comments: number;
  timeAgo: string;
  category?: string;
  categoryName?: string;
  categoryColor?: string;
  categoryBgColor?: string;
}

const CATEGORY_DATA: Record<
  string,
  { color: string; bgColor: string; posts: Post[] }
> = {
  character: {
    color: '#FFB347',
    bgColor: 'rgba(255,179,71,0.67)',
    posts: [
      {
        id: 1,
        title: '정의의 이름으로 널!',
        author: 'Mr셀러막',
        image: img81C692A7A7Be452DBf947A68C7B899Ba1,
        views: 1451,
        likes: 280,
        comments: 21,
        timeAgo: '17분 전',
      },
      {
        id: 2,
        title: '병줍알바 하실 분..?',
        author: '붕어빵 벤츠',
        image: imgChatGptImage20258260554501,
        views: 151,
        likes: 42,
        comments: 10,
        timeAgo: '26분 전',
      },
      {
        id: 3,
        title: '린쨩이랑 드디어 결혼...',
        author: '린쨩 사랑한다능',
        image: imgChatGptImage20258260325201,
        views: 184,
        likes: 24,
        comments: 20,
        timeAgo: '50분 전',
      },
      {
        id: 4,
        title: '춥다',
        author: '요다',
        image: imgRectangle,
        views: 298,
        likes: 15,
        comments: 10,
        timeAgo: '1시간 전',
      },
      {
        id: 5,
        title: '내 눈을 바라봐',
        author: '밤티걸좋아요',
        image: img81C692A7A7Be452DBf947A68C7B899Ba2,
        views: 234,
        likes: 10,
        comments: 4,
        timeAgo: '2시간 전',
      },
      {
        id: 6,
        title: '남친 구해요',
        author: '노밤티걸',
        image: imgFrame2147237665,
        views: 456,
        likes: 20,
        comments: 18,
        timeAgo: '3시간 전',
      },
    ],
  },
  free: {
    color: '#FF8B80',
    bgColor: 'rgba(255,139,128,0.67)',
    posts: [
      {
        id: 1,
        title: '오늘 루틴 하루 쉴건데 뭐 먹을지 투표해주세요',
        author: '루틴쉼',
        image: img81C692A7A7Be452DBf947A68C7B899Ba1,
        views: 1452,
        likes: 0,
        comments: 2,
        timeAgo: '17분 전',
      },
      {
        id: 2,
        title: '이번에 나우유씨미3 너무 재미없다던데',
        author: '영화팬',
        image: imgChatGptImage20258260554501,
        views: 892,
        likes: 14,
        comments: 23,
        timeAgo: '25분 전',
      },
      {
        id: 3,
        title: '이거는 너무 내 스타일인데 우리 얘기',
        author: '스타일리시',
        image: imgChatGptImage20258260325201,
        views: 567,
        likes: 8,
        comments: 6,
        timeAgo: '40분 전',
      },
    ],
  },
  routine: {
    color: '#22D760',
    bgColor: 'rgba(34,215,96,0.67)',
    posts: [
      {
        id: 1,
        title: '아침 루틴 3주차 성공! 느낀점 공유',
        author: '루틴왕',
        image: img81C692A7A7Be452DBf947A68C7B899Ba1,
        views: 567,
        likes: 23,
        comments: 11,
        timeAgo: '10분 전',
      },
      {
        id: 2,
        title: '운동 루틴 추천해주세요',
        author: '운동초보',
        image: imgChatGptImage20258260554501,
        views: 432,
        likes: 8,
        comments: 15,
        timeAgo: '20분 전',
      },
      {
        id: 3,
        title: '물 2L 마시기 성공 인증!',
        author: '물마시는사자',
        image: imgChatGptImage20258260325201,
        views: 298,
        likes: 12,
        comments: 4,
        timeAgo: '35분 전',
      },
    ],
  },
  tips: {
    color: '#C8A5D8',
    bgColor: 'rgba(200,165,216,0.67)',
    posts: [
      {
        id: 1,
        title: '루틴 연속 30일 달성하는 꿀팁!',
        author: '꿀팁왕',
        image: img81C692A7A7Be452DBf947A68C7B899Ba1,
        views: 789,
        likes: 34,
        comments: 19,
        timeAgo: '8분 전',
      },
      {
        id: 2,
        title: '코인 빨리 모으는 방법 정리',
        author: '코인부자',
        image: imgChatGptImage20258260554501,
        views: 654,
        likes: 28,
        comments: 12,
        timeAgo: '22분 전',
      },
      {
        id: 3,
        title: '배지 획득 완벽 가이드',
        author: '배지수집가',
        image: imgChatGptImage20258260325201,
        views: 543,
        likes: 19,
        comments: 7,
        timeAgo: '45분 전',
      },
    ],
  },
};

export default function RoutineBoardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort] = useState('날짜순');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [isMounted, setIsMounted] = useState(false);

  // localStorage에서 사용자 작성 글 로드 (클라이언트에서만)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const userPosts = isMounted
    ? JSON.parse(localStorage.getItem('communityPosts') || '[]').filter(
        (post: Post) => post.category === '루틴게시판'
      )
    : [];

  const category = 'routine';
  const categoryData = CATEGORY_DATA[category];
  // 기본 posts와 사용자 posts 합치기
  const posts = [...userPosts, ...(categoryData?.posts || [])];
  const categoryColor = categoryData?.color || '#5A54FA';
  const categoryBgColor = categoryData?.bgColor || 'rgba(90,84,250,0.21)';
  const categoryDisplayName = '루틴게시판';

  const filteredPosts =
    searchQuery.trim() === ''
      ? posts
      : posts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col">
        <Top />

        {/* Header */}
        <CommunityHeader title={categoryDisplayName} />

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Category Tabs */}
        <CategoryTabs activeCategory="routine" />

        {/* Posts List */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
          {/* Banner */}
          <div className="bg-white w-full px-[16px] pb-[16px] shrink-0">
            <button
              onClick={() => router.push('/ranking')}
              className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#c1cbff] gap-[7.995px] items-start px-[14px] py-[16px] relative rounded-[16px] shrink-0 to-[#837eff] w-full cursor-pointer"
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_4px_-5px_rgba(0,0,0,0.1)]"
              />
              <div className="absolute h-[68px] left-[239px] top-[16px] w-[88px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 88 68"
                >
                  <path
                    d={svgPaths.p36ddec80}
                    fill="#0C0C0C"
                    fillOpacity="0.66"
                    opacity="0.21"
                  />
                </svg>
              </div>

              {/* Banner Content */}
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-10">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#040415] text-[18px] text-nowrap tracking-[-1px] whitespace-pre">
                    이달의 막시무스
                  </p>
                  <svg
                    className="relative shrink-0 size-[20px]"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d={svgPaths.p3d4f1c00}
                      stroke="#F0C362"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.99961"
                    />
                    <path
                      d="M4.16602 16.4941H15.8327"
                      stroke="#F0C362"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.99961"
                    />
                  </svg>
                </div>
                <p className="font-normal leading-[18px] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">
                  가장 인기있는 막시무스에 투표하세요
                </p>

                {/* Heart Count */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between leading-[24px] not-italic relative shrink-0 text-nowrap text-white w-full whitespace-pre">
                    <p className="font-normal relative shrink-0 text-[14px]">
                      내 하트 수
                    </p>
                    <p className="font-semibold relative shrink-0 text-[20px]">
                      850
                    </p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.2)] h-[7.995px] relative rounded-[2.13285e+07px] shrink-0 w-full">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex flex-col h-[7.995px] items-start pl-0 pr-[44.564px] py-0 relative w-full">
                        <div className="bg-[#f0c362] h-[7.995px] rounded-[2.13285e+07px] shrink-0 w-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Link */}
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                  <p className="font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">
                    랭킹 바로가기
                  </p>
                  <svg
                    className="relative shrink-0 size-[9px]"
                    fill="none"
                    viewBox="0 0 9 9"
                  >
                    <path
                      d="M2 1H8V7"
                      stroke="#4A5565"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1 8L8 1"
                      stroke="#4A5565"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Section Header */}
          <div className="bg-white w-full px-[16px] pt-[10px] pb-[10px] shrink-0 sticky top-0 z-10">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-medium leading-[26px] not-italic relative shrink-0 text-[18px] text-black">
                {categoryDisplayName}
              </p>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">
                    {selectedSort}
                  </p>
                  <ChevronDown className="w-[16px] h-[16px] text-[#333333]" />
                </div>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <button onClick={() => setViewMode('list')}>
                    <svg
                      className="w-[24px] h-[24px]"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 12H21"
                        stroke="#5A54FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M3 6H21"
                        stroke="#5A54FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M3 18H21"
                        stroke="#5A54FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  <button onClick={() => setViewMode('grid')}>
                    <svg
                      className="w-[24px] h-[24px]"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={svgPaths.p1753300}
                        stroke="#5A54FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d={svgPaths.p272d7180}
                        stroke="#5A54FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d={svgPaths.p1e2bc680}
                        stroke="#5A54FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d={svgPaths.p2f4d7400}
                        stroke="#5A54FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {viewMode === 'list' ? (
            <div className="flex flex-col">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  style={{ backgroundColor: categoryColor }}
                >
                  {/* Post Content */}
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
                          {/* Header */}
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <div
                              className="box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[4px] shrink-0"
                              style={{ backgroundColor: categoryBgColor }}
                            >
                              <p className="font-normal leading-[16px] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-nowrap whitespace-pre">
                                꿀팁{' '}
                              </p>
                            </div>
                            <BookmarkButton />
                          </div>

                          {/* Title */}
                          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                            <p className="font-normal leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full whitespace-pre-wrap">
                              {post.title}
                            </p>
                          </div>

                          {/* Image */}
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                            <div className="basis-0 grow h-[148px] min-h-px min-w-px relative rounded-[8px] shrink-0">
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none rounded-[8px]"
                              >
                                <div className="absolute bg-[rgba(251,201,201,0.2)] inset-0 rounded-[8px]" />
                                <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                                  <img
                                    alt=""
                                    className="absolute h-[88.02%] left-[34.47%] max-w-none top-[6.78%] w-[31.61%]"
                                    src={post.image}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                            <p className="font-normal leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">
                              조회수 {post.views}
                            </p>
                          </div>
                          <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">
                            {post.timeAgo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
                          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                              <svg
                                className="relative shrink-0 size-[16px]"
                                fill="none"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d={svgPaths.p39507bc0}
                                  stroke="#5D5D5D"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">
                                추천수 {post.likes}
                              </p>
                            </div>
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                              <div className="flex items-center justify-center relative shrink-0">
                                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                                  <svg
                                    className="relative size-[14px]"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                  >
                                    <path
                                      d={svgPaths.p13d11a80}
                                      fill="#5E5E5E"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">
                                댓글 {post.comments}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#F8FBFF] w-full px-[16px] pb-[16px] pt-[8px]">
              <div className="grid grid-cols-2 gap-[8px]">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white h-[210px] overflow-clip relative rounded-[20px] shrink-0"
                  >
                    {/* Character Image */}
                    <div className="absolute h-[108px] left-[calc(50%+2.5px)] top-[11px] translate-x-[-50%] w-[90px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-[125.12%] left-0 max-w-none top-[-13.28%] w-full"
                          src={post.image}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[4px] items-start left-0 overflow-clip px-[14px] py-[11px] top-[122px] w-[140px]">
                      <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
                        <p className="font-medium leading-[21px] relative shrink-0 text-[14px] w-full truncate">
                          {post.title}
                        </p>
                        <p className="font-normal leading-[16px] relative shrink-0 text-[12px] w-full">
                          ID : {post.author}
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <svg
                            className="relative shrink-0 size-[16px]"
                            fill="none"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d={svgPathsGrid.p39507bc0}
                              stroke="#5D5D5D"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-normal leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">
                            {post.likes}
                          </p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                              <svg
                                className="relative size-[14px]"
                                fill="none"
                                viewBox="0 0 14 14"
                              >
                                <path
                                  d={svgPathsGrid.p2a722600}
                                  fill="#5E5E5E"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="font-normal leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">
                            댓글 {post.comments}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bookmark */}
                    <BookmarkButton className="absolute h-[26px] left-[130px] top-[8px] w-[28px]" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <FloatingWriteButton />

        <Bottom />
      </div>
    </div>
  );
}
