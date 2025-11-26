'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Top, Bottom } from '../components/Layout';
import CategoryTabs from '../components/community/CategoryTabs';
import svgPaths from '../imports/svg-qx51amnvwr';

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="block cursor-pointer relative shrink-0 size-[30px]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g>
          <path
            d="M21 26L10 15L21 4"
            stroke="#5A54FA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
}

function CompleteButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[12px] py-[4px] relative rounded-[50px] shrink-0 ${
        disabled ? 'bg-[#ebf2ff]' : 'bg-[#5a54fa]'
      }`}
    >
      <p
        className={`font-pretendard font-medium leading-[26px] not-italic relative shrink-0 text-[18px] text-nowrap whitespace-pre ${
          disabled ? 'text-[#cccccc]' : 'text-white'
        }`}
      >
        완료
      </p>
    </button>
  );
}

function EditIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M12 20H21"
            stroke="#CCCCCC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p3f654a80}
            stroke="#CCCCCC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function ImageIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={svgPaths.p1cec7ff0}
            stroke="#686873"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66607"
          />
          <path
            d={svgPaths.p38772900}
            stroke="#686873"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66607"
          />
          <path
            d={svgPaths.p2cba2e00}
            stroke="#686873"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66607"
          />
        </g>
      </svg>
    </div>
  );
}

function VideoIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_87_872)">
          <path
            d={svgPaths.p14d24500}
            stroke="#686873"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66607"
          />
          <path
            d={svgPaths.p1d39b480}
            stroke="#686873"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66607"
          />
          <path
            d="M7.5 7.5H7.50833"
            stroke="#686873"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66607"
          />
          <path
            d="M12.5 7.5H12.5083"
            stroke="#686873"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66607"
          />
        </g>
        <defs>
          <clipPath id="clip0_87_872">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function CommunityWritePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;

    // 카테고리별 정보 매핑
    const categoryInfo: Record<
      string,
      { name: string; color: string; bgColor: string }
    > = {
      character: {
        name: '캐릭터',
        color: '#FFB347',
        bgColor: 'rgba(255,179,71,0.67)',
      },
      free: {
        name: '자유게시판',
        color: '#FF8B80',
        bgColor: 'rgba(255,139,128,0.67)',
      },
      routine: {
        name: '루틴게시판',
        color: '#22D760',
        bgColor: 'rgba(34,215,96,0.67)',
      },
      tips: {
        name: '꿀팁',
        color: '#C8A5D8',
        bgColor: 'rgba(200,165,216,0.67)',
      },
      all: {
        name: '전체',
        color: '#5A54FA',
        bgColor: 'rgba(90,84,250,0.21)',
      },
    };

    const categoryData = categoryInfo[selectedCategory] || categoryInfo.all;

    // localStorage에 글 저장
    const newPost = {
      id: Date.now(),
      category: categoryData.name,
      categoryName: categoryData.name,
      categoryColor: categoryData.color,
      categoryBgColor: categoryData.bgColor,
      title: title.trim(),
      content: content.trim(),
      image: undefined,
      views: 0,
      likes: 0,
      comments: 0,
      timeAgo: '방금 전',
      author: '익명',
      createdAt: new Date().toISOString(),
    };

    // 기존 글 목록 가져오기
    const existingPosts = JSON.parse(
      localStorage.getItem('communityPosts') || '[]'
    );

    // 새 글 추가
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem('communityPosts', JSON.stringify(updatedPosts));

    console.log('글 작성 완료:', newPost);

    // 해당 카테고리 페이지로 이동
    if (selectedCategory === 'all') {
      router.push('/community');
    } else if (selectedCategory === 'free') {
      router.push('/community/free');
    } else {
      router.push(`/community/${selectedCategory}`);
    }
  };

  const isFormValid = title.trim() && content.trim();

  return (
    <div className="bg-neutral-50 flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col pb-[120px]">
        <Top />

        {/* Custom Header */}
        <div className="h-[48px] overflow-clip relative shrink-0 w-full bg-white">
          <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
            <BackButton />
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-row items-center self-stretch">
                <CompleteButton
                  disabled={!isFormValid}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[4px] items-start left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%]">
            <p className="font-pretendard font-semibold leading-[24px] not-italic relative shrink-0 text-[#02010e] text-[20px] text-center text-nowrap whitespace-pre">
              글쓰기
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full bg-white">
          <div className="flex flex-col">
            {/* 게시판 선택 */}
            <div className="w-[343px] mx-auto pt-[20px] pb-[16px]">
              <p className="font-pretendard font-medium leading-[26px] not-italic text-[#040415] text-[18px]">
                게시판 선택
              </p>
            </div>

            {/* CategoryTabs 컴포넌트 - 전체 너비로 배치 */}
            <CategoryTabs
              activeCategory={selectedCategory}
              mode="selection"
              onCategorySelect={setSelectedCategory}
            />

            {/* 입력 폼 영역 */}
            <div className="w-[343px] mx-auto pt-[24px] pb-[20px]">
              <div className="flex flex-col gap-[40px]">
                {/* 제목 및 내용 입력 */}
                <div className="flex flex-col gap-[24px] w-full">
                  {/* 제목 입력 */}
                  <div className="h-[44px] relative w-full">
                    <div className="flex h-[44px] items-center pb-[8px] w-full">
                      <div className="flex gap-[4px] items-center w-full">
                        <EditIcon />
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="제목을 입력하세요"
                          className="font-pretendard font-semibold leading-[normal] not-italic flex-1 text-[#000000] text-[18px] tracking-[-1px] bg-transparent border-none outline-none placeholder:text-[#cccccc]"
                        />
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
                    />
                  </div>

                  {/* 내용 입력 */}
                  <div className="flex h-[200px] w-full">
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="내용을 입력하세요"
                      className="font-pretendard font-medium leading-[26px] not-italic w-full h-full resize-none bg-transparent border-none outline-none text-[#000000] text-[18px] placeholder:text-[#cccccc]"
                    />
                  </div>
                </div>

                {/* 이미지/동영상 버튼 */}
                <div className="flex gap-[30px] items-center">
                  <button className="flex gap-[8px] items-center">
                    <ImageIcon />
                    <p className="font-pretendard leading-[24px] text-[#686873] text-[14px]">
                      이미지
                    </p>
                  </button>
                  <button className="flex gap-[8px] items-center">
                    <VideoIcon />
                    <p className="font-pretendard leading-[24px] text-[#686873] text-[14px]">
                      동영상
                    </p>
                  </button>
                </div>

                {/* 좋은 글 작성 팁 */}
                <div className="bg-[rgba(205,205,205,0.2)] flex flex-col gap-[8px] items-center justify-center p-[16px] rounded-[16px] w-full">
                  <div className="flex flex-col gap-[10px] items-start w-full">
                    <p className="font-pretendard font-semibold leading-[26px] text-[16px] text-black">
                      💡 좋은 글 작성 팁
                    </p>
                    <div className="flex flex-col font-pretendard gap-[4px] items-start leading-[24px] text-[#555555] text-[14px] w-full">
                      <p>• 명확하고 구체적인 제목을 작성해주세요</p>
                      <p>• 다른 사람을 존중하는 언어를 사용해주세요</p>
                      <p>• 관련 이미지가 있다면 함께 올려주세요</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Bottom />
      </div>
    </div>
  );
}
