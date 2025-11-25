'use client';

import { useRouter } from 'next/navigation';
import { Top, Bottom } from './Layout';

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="bg-neutral-50 flex flex-col items-center w-[375px] h-[812px] overflow-hidden">
      <Top />

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        <div className="flex items-center justify-between p-4 w-full">
          <button
            onClick={() => router.back()}
            className="text-[#5a54fa] cursor-pointer hover:opacity-70 transition-opacity"
          >
            ← 뒤로
          </button>
          <h1 className="font-['Pretendard:Bold',sans-serif] text-[20px] text-[#0c0c0c]">
            알림
          </h1>
          <div className="w-12" />
        </div>

        <div className="flex items-center justify-center p-8">
          <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-[#a4a4a4]">
            알림 페이지
          </p>
        </div>
      </div>

      <Bottom />
    </div>
  );
}
