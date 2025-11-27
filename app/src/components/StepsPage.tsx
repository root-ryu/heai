'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Top, Bottom } from './Layout';

export default function StepsPage() {
  const router = useRouter();
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('daily');

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
            만보기
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        <div className="flex gap-[12px] justify-center px-[16px] py-[12px] bg-white border-b border-[#f0f0f0]">
          <button
            onClick={() => setView('daily')}
            className={`flex-1 max-w-[100px] py-[8px] rounded-[30px] font-pretendard font-medium text-[14px] transition-colors ${
              view === 'daily'
                ? 'bg-[#5A54FA] text-white'
                : 'bg-[#F5F5F5] text-[#666666]'
            }`}
          >
            일간
          </button>
          <button
            onClick={() => setView('weekly')}
            className={`flex-1 max-w-[100px] py-[8px] rounded-[30px] font-pretendard font-medium text-[14px] transition-colors ${
              view === 'weekly'
                ? 'bg-[#5A54FA] text-white'
                : 'bg-[#F5F5F5] text-[#666666]'
            }`}
          >
            주간
          </button>
          <button
            onClick={() => setView('monthly')}
            className={`flex-1 max-w-[100px] py-[8px] rounded-[30px] font-pretendard font-medium text-[14px] transition-colors ${
              view === 'monthly'
                ? 'bg-[#5A54FA] text-white'
                : 'bg-[#F5F5F5] text-[#666666]'
            }`}
          >
            월간
          </button>
        </div>
        <div className="flex items-center justify-center p-8">
          <p className="text-[#a4a4a4] font-pretendard font-normal text-[16px]">
            {view === 'daily' ? '일간' : view === 'weekly' ? '주간' : '월간'}{' '}
            걸음 수를 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <Bottom />
    </div>
  );
}
