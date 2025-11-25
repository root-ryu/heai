'use client';

import { useRouter, usePathname } from 'next/navigation';
import svgPaths from '../imports/svg-067ap2oqb0';

const imgEye12 = '/532303d6c8033a0d1a7fe404f94ac83b8cb9ed53.png';

export function Top() {
  return (
    <div className="h-0 overflow-clip shrink-0 sticky top-0 w-full z-10 bg-[#ffffff]"></div>
  );
}

export function Bottom() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 content-stretch flex flex-col gap-[2px] items-center w-[375px] mx-auto bg-transparent z-50">
      <Gnb router={router} pathname={pathname} />
      <HomeIndicator />
    </div>
  );
}

function Gnb({
  router,
  pathname,
}: {
  router: ReturnType<typeof useRouter>;
  pathname: string;
}) {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[8px] relative shrink-0 w-[343px]">
      <Menu router={router} pathname={pathname} />
      <Chat router={router} pathname={pathname} />
    </div>
  );
}

function Menu({
  router,
  pathname,
}: {
  router: ReturnType<typeof useRouter>;
  pathname: string;
}) {
  return (
    <div className="backdrop-blur-[3.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] h-[70px] overflow-clip relative rounded-[70px] shadow-[0px_0px_4px_0px_rgba(36,32,116,0.1)] shrink-0 w-[260px]">
      <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[19px] top-[19px] w-[221px]">
        <Icon1 router={router} isActive={pathname === '/'} />
        <Icon2 router={router} isActive={pathname === '/community'} />
        <Icon3 router={router} isActive={pathname === '/customize'} />
        <Icon4 router={router} isActive={pathname === '/mypage'} />
      </div>
    </div>
  );
}

function Icon1({
  router,
  isActive,
}: {
  router: ReturnType<typeof useRouter>;
  isActive: boolean;
}) {
  const color = isActive ? '#5A54FA' : '#9ABAFF';
  return (
    <button
      onClick={() => router.push('/')}
      className="relative shrink-0 size-[30px] cursor-pointer hover:opacity-70 transition-opacity"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="icon1">
          <path
            d={svgPaths.p171ef083}
            id="Vector"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d={svgPaths.p9c1c3f0}
            id="Vector_2"
            stroke={color}
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </button>
  );
}

function Icon2({
  router,
  isActive,
}: {
  router: ReturnType<typeof useRouter>;
  isActive: boolean;
}) {
  const color = isActive ? '#5A54FA' : '#9ABAFF';
  return (
    <button
      onClick={() => router.push('/community')}
      className="h-[23px] relative shrink-0 w-[28px] cursor-pointer hover:opacity-70 transition-opacity"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 23"
      >
        <g clipPath="url(#clip0_11_1794)" id="icon2">
          <path
            d="M6.66602 15.5H10.666"
            id="Vector"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M6.66602 11.5H17.666"
            id="Vector_2"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M6.66602 7.5H17.666"
            id="Vector_3"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.pa56fe00}
            id="Icon"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p2d61cd80}
            fill="var(--fill-0, white)"
            id="Vector_4"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_11_1794">
            <rect fill="white" height="23" width="28" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function Icon3({
  router,
  isActive,
}: {
  router: ReturnType<typeof useRouter>;
  isActive: boolean;
}) {
  const color = isActive ? '#5A54FA' : '#9ABAFF';
  return (
    <button
      onClick={() => router.push('/customize')}
      className="relative shrink-0 size-[28px] cursor-pointer hover:opacity-70 transition-opacity"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#clip0_1_386)" id="_ë ì´ì´_5">
          <path d={svgPaths.p16417b80} fill={color} id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_386">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function Icon4({
  router,
  isActive,
}: {
  router: ReturnType<typeof useRouter>;
  isActive: boolean;
}) {
  const color = isActive ? '#5A54FA' : '#9ABAFF';
  return (
    <button
      onClick={() => router.push('/mypage')}
      className="relative shrink-0 size-[30px] cursor-pointer hover:opacity-70 transition-opacity"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Frame 2608781">
          <path
            d={svgPaths.p105df880}
            id="Icon"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </button>
  );
}

function Chat({
  router,
  pathname,
}: {
  router: ReturnType<typeof useRouter>;
  pathname: string;
}) {
  const isActive = pathname === '/chat';

  const handleClick = () => {
    if (isActive) {
      router.push('/');
    } else {
      router.push('/chat');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#ebeaff] h-[70px] relative rounded-[100px] shrink-0 w-[72px] cursor-pointer hover:bg-[#dad8ff] transition-colors"
    >
      <div className="absolute h-[37px] left-1/2 top-[19px] translate-x-[-50%] w-[48px]">
        <img
          alt="AI Chat"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgEye12}
        />
      </div>
    </button>
  );
}

function HomeIndicator() {
  return <div className="h-[8px] relative shrink-0 w-full"></div>;
}
