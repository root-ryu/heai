'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Top, Bottom } from './Layout';

export default function BookmarkPage() {
  const router = useRouter();

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <Top />

      {/* Header */}
      <div className="bg-white w-full shrink-0">
        <div className="h-[48px] relative w-full flex items-center justify-center">
          <button
            onClick={() => router.back()}
            className="absolute left-[16px]"
          >
            <ArrowLeft className="w-[24px] h-[24px] text-[#5A54FA]" />
          </button>
          <p className="font-['Pretendard:Medium',sans-serif] text-[20px] text-[#02010e]">
            북마크
          </p>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Pretendard:Regular',sans-serif] text-[16px] text-[#8c8c8c]">
            북마크한 게시글이 없습니다
          </p>
        </div>
      </div>

      <Bottom />
    </div>
  );
}
