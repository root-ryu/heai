'use client';

import { useRouter } from 'next/navigation';
import svgPaths from '../../imports/svg-pl2u86cxgo';

function Edit() {
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
            d="M10 16.6667H17.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p227dd980}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

export default function FloatingWriteButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/community/write')}
      className="bg-[#5a54fa] fixed right-[16px] bottom-[150px] size-[50px] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-50 flex items-center justify-center"
      aria-label="글쓰기"
    >
      <Edit />
    </button>
  );
}
