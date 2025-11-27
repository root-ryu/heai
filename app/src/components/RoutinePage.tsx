'use client';

import { useRouter } from 'next/navigation';
import { Top, Bottom } from './Layout';

export default function RoutinePage() {
  const router = useRouter();

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
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
            새 루틴 추가
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        <div className="flex items-center justify-center p-8">
          <p className="text-[#a4a4a4] font-pretendard font-normal text-[16px]">
            루틴을 추가하고 관리할 수 있습니다.
          </p>
        </div>
      </div>

      <Bottom />
    </div>
  );
}
