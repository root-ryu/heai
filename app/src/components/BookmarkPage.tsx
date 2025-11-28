'use client';

import { useRouter } from 'next/navigation';
import { Top, Bottom } from './Layout';

export default function BookmarkPage() {
  const router = useRouter();

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col">
        <Top />

        {/* Header */}
        <div className="bg-white w-full shrink-0">
          <div className="h-[48px] relative w-full flex items-center justify-center">
            <button onClick={() => router.back()} className="absolute left-[7px]">
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
            <p className="font-pretendard font-semibold text-[20px] text-[#02010e]">
              북마크
            </p>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-pretendard text-[16px] text-[#8c8c8c]">
              북마크한 게시글이 없습니다
            </p>
          </div>
        </div>

        <Bottom />
      </div>
    </div>
  );
}
