import { useNavigate } from 'react-router-dom';
import { Top, Bottom } from './Layout';
import svgPaths from "../imports/svg-72o1bux1bs";
import img3 from "figma:asset/1053c63025ce145507937609a315b3c9f4082dba.png";
import img1 from "figma:asset/46d49e7235c8e942b4b9d6b6d8ba858999ea042e.png";
import img2 from "figma:asset/a0f3125a833721da061a13a413815d0dc1d73dfe.png";

export default function RankingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-[375px] h-[812px] overflow-hidden">
      <Top />
      
      {/* Header */}
      <div className="bg-white h-[48px] overflow-clip relative shrink-0 w-[375px]">
        <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
          <button onClick={() => navigate(-1)} className="block cursor-pointer relative shrink-0 size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d="M21 26L10 15L21 4" stroke="#5A54FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <button onClick={() => navigate('/calendar')} className="relative shrink-0 size-[30px]">
              <svg className="block size-full" fill="none" viewBox="0 0 30 30">
                <path d={svgPaths.p18c5f880} stroke="#5A54FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <button className="relative shrink-0 size-[30px]">
              <svg className="block size-full" fill="none" viewBox="0 0 30 30">
                <path d={svgPaths.p20913a00} stroke="#5A54FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[4px] items-start left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%]">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#02010e] text-[20px] text-center text-nowrap whitespace-pre">이달의 막시무스</p>
        </div>
      </div>

      {/* Top 3 Winners Section */}
      <div className="bg-[#fff7e4] h-[306px] overflow-clip relative shrink-0 w-full">
        <div className="absolute h-[54px] left-[17px] top-[220px] w-[341px]">
          <div className="absolute inset-[-45.74%_-7.83%_-53.15%_-7.83%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395 108">
              <g filter="url(#filter0_dn_25_2479)">
                <ellipse cx="197.2" cy="51.7" fill="url(#paint0_linear_25_2479)" rx="170.5" ry="27" shapeRendering="crispEdges" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="107.4" id="filter0_dn_25_2479" width="394.4" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="13.35" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_2479" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feTurbulence baseFrequency="10 10" numOctaves="3" result="noise" seed="519" stitchTiles="stitch" type="fractalNoise" />
                  <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                  <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                    <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                  </feComponentTransfer>
                  <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
                  <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                  <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                  <feMerge result="effect2_noise_25_2479">
                    <feMergeNode in="shape" />
                    <feMergeNode in="color1" />
                  </feMerge>
                  <feBlend in="effect2_noise_25_2479" in2="effect1_dropShadow_25_2479" mode="normal" result="effect2_noise_25_2479" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_25_2479" x1="197.7" x2="197.7" y1="24.7" y2="78.7">
                  <stop stopColor="#FF9800" stopOpacity="0.94" />
                  <stop offset="0.423214" stopColor="#FF9800" />
                  <stop offset="0.769231" stopColor="#C65A00" />
                  <stop offset="1" stopColor="#311A08" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* 3rd Place */}
        <div className="absolute h-[213px] left-[246px] top-[48px] w-[103px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[96.77%] left-[-96.12%] max-w-none top-[3.26%] w-[300%]" src={img3} />
          </div>
        </div>
        
        {/* 1st Place */}
        <div className="absolute h-[224px] left-[calc(50%+1.5px)] top-[45px] translate-x-[-50%] w-[130px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-80.31%] max-w-none top-0 w-[258.32%]" src={img1} />
          </div>
        </div>
        
        {/* 2nd Place */}
        <div className="absolute h-[202px] left-[24px] top-[55px] w-[104px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.06%] left-[-96.15%] max-w-none top-[-0.03%] w-[291.35%]" src={img2} />
          </div>
        </div>
        
        {/* Rank Labels */}
        <p className="absolute bg-clip-text font-['Pretendard:Bold',sans-serif] font-['Pretendard:Medium',sans-serif] leading-[0] left-[180px] not-italic text-[0px] text-nowrap top-[199px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
          <span className="bg-clip-text leading-[27px] text-[20px]" style={{ WebkitTextFillColor: "transparent" }}>1</span>
          <span className="bg-clip-text leading-[21px] text-[14px]" style={{ WebkitTextFillColor: "transparent" }}>st</span>
        </p>
        <p className="absolute bg-clip-text font-['Pretendard:Bold',sans-serif] leading-[0] left-[59px] not-italic text-[0px] text-nowrap top-[202px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
          <span className="bg-clip-text leading-[27px] text-[20px]" style={{ WebkitTextFillColor: "transparent" }}>2</span>
          <span className="leading-[21px] text-[14px]">st</span>
        </p>
        <p className="absolute bg-clip-text font-['Pretendard:SemiBold',sans-serif] leading-[0] left-[294px] not-italic text-[0px] text-nowrap top-[207px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
          <span className="leading-[24px] text-[20px]">3</span>
          <span className="font-['Pretendard:Bold',sans-serif] leading-[21px] text-[14px]">st</span>
        </p>
        
        {/* Crown Icon */}
        <div className="absolute h-[17px] left-[167px] top-[26px] w-[27px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 17">
            <path d={svgPaths.pe449680} fill="#FFCA00" />
          </svg>
        </div>
      </div>

      {/* Rankings List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        {/* 1st */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.pdd02000} fill="#FFCD6D" fillRule="evenodd" />
                  <path d={svgPaths.p358a8600} fill="#FEA800" />
                  <path clipRule="evenodd" d={svgPaths.p1d0b4900} fill="#FFCD6D" fillRule="evenodd" />
                </svg>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">ilikecsshaha</p>
            </div>
            <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
              <p className="relative shrink-0">조회 1700</p>
              <p className="relative shrink-0">추천 877</p>
            </div>
          </div>
        </div>

        {/* 2nd - Highlighted */}
        <div className="bg-[#5a54fa] box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.pdd02000} fill="#DADADA" fillRule="evenodd" />
                  <path d={svgPaths.p358a8600} fill="#999CA7" />
                  <path clipRule="evenodd" d={svgPaths.p1d0b4900} fill="#DADADA" fillRule="evenodd" />
                </svg>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">user_01486</p>
            </div>
            <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">
              <p className="relative shrink-0">조회 1425</p>
              <p className="relative shrink-0">추천 850</p>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.pdd02000} fill="#F9C1AD" fillRule="evenodd" />
                  <path d={svgPaths.p358a8600} fill="#D95932" />
                  <path clipRule="evenodd" d={svgPaths.p1d0b4900} fill="#F9C1AD" fillRule="evenodd" />
                </svg>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">plzhomeplz</p>
            </div>
            <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[16.5px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap tracking-[0.0645px] whitespace-pre">
              <p className="relative shrink-0">조회 1860</p>
              <p className="relative shrink-0">추천 603</p>
            </div>
          </div>
        </div>

        {/* 4th */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">4</p>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">재현</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
                <p className="relative shrink-0">조회 1180</p>
                <p className="relative shrink-0">추천 600</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5th */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">5</p>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">성희</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
                <p className="relative shrink-0">조회 1160</p>
                <p className="relative shrink-0">추천 500</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6th */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">6</p>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">도연</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
                <p className="relative shrink-0">조회 1120</p>
                <p className="relative shrink-0">추천 480</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7th */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">7</p>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">근호</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
                <p className="relative shrink-0">조회 1000</p>
                <p className="relative shrink-0">추천 425</p>
              </div>
            </div>
          </div>
        </div>

        {/* 8th */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">8</p>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">승주</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
                <p className="relative shrink-0">조회 860</p>
                <p className="relative shrink-0">추천 420</p>
              </div>
            </div>
          </div>
        </div>

        {/* 9th */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">9</p>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">우정</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
                <p className="relative shrink-0">조회 860</p>
                <p className="relative shrink-0">추천 327</p>
              </div>
            </div>
          </div>
        </div>

        {/* 10th */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
            <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
                <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">10</p>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">경진</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
              <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
                <p className="relative shrink-0">조회 750</p>
                <p className="relative shrink-0">추천 300</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </div>
  );
}