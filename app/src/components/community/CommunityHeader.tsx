'use client';

import { useRouter } from 'next/navigation';
import svgPaths from '../../imports/svg-jjl4gh5igk';

interface CommunityHeaderProps {
  title: string;
}

export default function CommunityHeader({ title }: CommunityHeaderProps) {
  const router = useRouter();

  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[375px] bg-white">
      <div className="absolute content-stretch flex gap-[266px] items-center justify-end left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <button
            onClick={() => router.push('/calendar')}
            className="relative shrink-0 size-[30px]"
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
            className="relative shrink-0 size-[30px]"
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
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-1/2 not-italic text-[#02010e] text-[20px] text-center text-nowrap top-[calc(50%-13px)] translate-x-[-50%] whitespace-pre">
        {title}
      </p>
    </div>
  );
}
