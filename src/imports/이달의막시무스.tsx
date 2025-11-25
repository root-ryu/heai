import svgPaths from "./svg-72o1bux1bs";
import img3 from "figma:asset/1053c63025ce145507937609a315b3c9f4082dba.png";
import img1 from "figma:asset/46d49e7235c8e942b4b9d6b6d8ba858999ea042e.png";
import img2 from "figma:asset/a0f3125a833721da061a13a413815d0dc1d73dfe.png";
import imgEye12 from "figma:asset/532303d6c8033a0d1a7fe404f94ac83b8cb9ed53.png";

function Notch() {
  return (
    <div className="absolute h-[32px] left-1/2 top-[-2px] translate-x-[-50%] w-[164px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 32">
        <g id="Notch">
          <g id="Notch_2">
            <path d={svgPaths.p3b40e580} fill="black" />
            <path d={svgPaths.p3f2f4600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p27a68100} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBarTime() {
  return (
    <div className="absolute h-[21px] left-[calc(16.67%-11px)] rounded-[24px] top-[14px] translate-x-[-50%] w-[54px]" data-name="_StatusBar-time">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[22px] left-[27px] not-italic text-[#010101] text-[17px] text-center top-px tracking-[-0.408px] translate-x-[-50%] w-[54px]">9:41</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[calc(16.67%-11px)] top-[14px] translate-x-[-50%]" data-name="Left Side">
      <StatusBarTime />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[13px] left-[calc(83.33%-0.3px)] top-[19px] translate-x-[-50%] w-[77.401px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 13">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p2646e000} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="1.05509" />
            <path d={svgPaths.p4c0c710} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p22239c00} fill="var(--fill-0, black)" id="Fill" />
          </g>
          <path d={svgPaths.p30ca5c00} fill="var(--fill-0, black)" id="Wifi" />
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p16816b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p18ef7a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2262f080} fill="var(--fill-0, black)" />
            <path d={svgPaths.pc5da680} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[47px] left-[7.5px] overflow-clip top-0 w-[360px]" data-name="StatusBar">
      <Notch />
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Top() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[30px]" data-name="top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="top">
          <path d="M21 26L10 15L21 4" id="top/icon/04" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </button>
  );
}

function Top1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="top">
          <path d={svgPaths.p18c5f880} id="Icon" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Top2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="top">
          <path d={svgPaths.p20913a00} id="Icon" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Top1 />
      <Top2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
      <Top />
      <Frame />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-start left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%]">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#02010e] text-[20px] text-center text-nowrap whitespace-pre">이달의 막시무스</p>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[48px] left-1/2 overflow-clip top-[47px] translate-x-[-50%] w-[375px]" data-name="main">
      <Frame1 />
      <Frame32 />
    </div>
  );
}

function Top3() {
  return (
    <div className="bg-[#fff7e4] h-[306px] overflow-clip relative shrink-0 w-full" data-name="top">
      <div className="absolute h-[54px] left-[17px] top-[220px] w-[341px]">
        <div className="absolute inset-[-45.74%_-7.83%_-53.15%_-7.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395 108">
            <g filter="url(#filter0_dn_25_2479)" id="Ellipse 772">
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
                  <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
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
      <div className="absolute h-[213px] left-[246px] top-[48px] w-[103px]" data-name="3등">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[96.77%] left-[-96.12%] max-w-none top-[3.26%] w-[300%]" src={img3} />
        </div>
      </div>
      <div className="absolute h-[224px] left-[calc(50%+1.5px)] top-[45px] translate-x-[-50%] w-[130px]" data-name="1등">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-80.31%] max-w-none top-0 w-[258.32%]" src={img1} />
        </div>
      </div>
      <div className="absolute h-[202px] left-[24px] top-[55px] w-[104px]" data-name="2등">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.06%] left-[-96.15%] max-w-none top-[-0.03%] w-[291.35%]" src={img2} />
        </div>
      </div>
      <p className="absolute bg-clip-text font-['Pretendard:Bold',sans-serif] font-['Pretendard:Medium',sans-serif] leading-[0] left-[180px] not-italic text-[0px] text-nowrap top-[199px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        <span className="bg-clip-text leading-[27px] text-[20px]" style={{ WebkitTextFillColor: "transparent" }}>
          1
        </span>
        <span className="bg-clip-text leading-[21px] text-[14px]" style={{ WebkitTextFillColor: "transparent" }}>
          st
        </span>
      </p>
      <p className="absolute bg-clip-text font-['Pretendard:Bold',sans-serif] leading-[0] left-[59px] not-italic text-[0px] text-nowrap top-[202px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        <span className="bg-clip-text leading-[27px] text-[20px]" style={{ WebkitTextFillColor: "transparent" }}>
          2
        </span>
        <span className="leading-[21px] text-[14px]">st</span>
      </p>
      <p className="absolute bg-clip-text font-['Pretendard:SemiBold',sans-serif] leading-[0] left-[294px] not-italic text-[0px] text-nowrap top-[207px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        <span className="leading-[24px] text-[20px]">3</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[21px] text-[14px]">st</span>
      </p>
      <div className="absolute h-[17px] left-[167px] top-[26px] w-[27px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 17">
          <path d={svgPaths.pe449680} fill="var(--fill-0, #FFCA00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconsMedal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/Medal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/Medal">
          <path clipRule="evenodd" d={svgPaths.pdd02000} fill="var(--fill-0, #FFCD6D)" fillRule="evenodd" id="Shape" />
          <path d={svgPaths.p358a8600} fill="var(--fill-0, #FEA800)" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p1d0b4900} fill="var(--fill-0, #FFCD6D)" fillRule="evenodd" id="Shape_3" />
        </g>
      </svg>
    </div>
  );
}

function LeftTxt() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0" data-name="left_txt">
      <IconsMedal />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">ilikecsshaha</p>
    </div>
  );
}

function RightTxt() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre" data-name="right_txt">
      <p className="relative shrink-0">조회 1700</p>
      <p className="relative shrink-0">추천 877</p>
    </div>
  );
}

function Component1st() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]" data-name="1st">
      <LeftTxt />
      <RightTxt />
    </div>
  );
}

function Txt() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <Component1st />
    </div>
  );
}

function IconsMedal1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/Medal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/Medal">
          <path clipRule="evenodd" d={svgPaths.pdd02000} fill="var(--fill-0, #DADADA)" fillRule="evenodd" id="Shape" />
          <path d={svgPaths.p358a8600} fill="var(--fill-0, #999CA7)" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p1d0b4900} fill="var(--fill-0, #DADADA)" fillRule="evenodd" id="Shape_3" />
        </g>
      </svg>
    </div>
  );
}

function LeftTxt1() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0" data-name="left_txt">
      <IconsMedal1 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">user_01486</p>
    </div>
  );
}

function RightTxt1() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre" data-name="right_txt">
      <p className="relative shrink-0">조회 1425</p>
      <p className="relative shrink-0">추천 850</p>
    </div>
  );
}

function Component2St() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[320px]" data-name="2st">
      <LeftTxt1 />
      <RightTxt1 />
    </div>
  );
}

function Txt1() {
  return (
    <div className="bg-[#5a54fa] box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Component2St />
    </div>
  );
}

function IconsMedal2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/Medal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/Medal">
          <path clipRule="evenodd" d={svgPaths.pdd02000} fill="var(--fill-0, #F9C1AD)" fillRule="evenodd" id="Shape" />
          <path d={svgPaths.p358a8600} fill="var(--fill-0, #D95932)" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p1d0b4900} fill="var(--fill-0, #F9C1AD)" fillRule="evenodd" id="Shape_3" />
        </g>
      </svg>
    </div>
  );
}

function LeftTxt2() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0" data-name="left_txt">
      <IconsMedal2 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">plzhomeplz</p>
    </div>
  );
}

function RightTxt2() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[16.5px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap tracking-[0.0645px] whitespace-pre" data-name="right_txt">
      <p className="relative shrink-0">조회 1860</p>
      <p className="relative shrink-0">추천 603</p>
    </div>
  );
}

function Component3St() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]" data-name="3st">
      <LeftTxt2 />
      <RightTxt2 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Component3St />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame6 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">재현</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0">조회 1180</p>
      <p className="relative shrink-0">추천 600</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Component4St() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]" data-name="4st">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Component4St />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">5</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">성희</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0">조회 1160</p>
      <p className="relative shrink-0">추천 500</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Txt4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame11 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">도연</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0">조회 1120</p>
      <p className="relative shrink-0">추천 480</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Txt5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">7</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame16 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">근호</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0">조회 1000</p>
      <p className="relative shrink-0">추천 425</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Txt6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame21 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">승주</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0">조회 860</p>
      <p className="relative shrink-0">추천 420</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function Txt7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">9</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame26 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">우정</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0">조회 860</p>
      <p className="relative shrink-0">추천 327</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
      <Frame27 />
      <Frame29 />
    </div>
  );
}

function Txt8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame30 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame31 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6a6a6a] text-[18px] text-nowrap whitespace-pre">희선</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[24px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center text-nowrap whitespace-pre">
      <p className="relative shrink-0">조회 760</p>
      <p className="relative shrink-0">추천 325</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-[320px]">
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function Txt9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[6px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame36 />
    </div>
  );
}

function Con() {
  return (
    <div className="box-border content-stretch flex flex-col h-[597px] items-center justify-center px-0 py-[20px] relative shrink-0 w-[343px]" data-name="con">
      <Txt />
      <Txt1 />
      <Txt2 />
      <Txt3 />
      <Txt4 />
      <Txt5 />
      <Txt6 />
      <Txt7 />
      <Txt8 />
      <Txt9 />
    </div>
  );
}

function Inner() {
  return (
    <div className="absolute bg-[#f8fbff] content-stretch flex flex-col h-[1024px] items-center left-0 overflow-clip top-[95px] w-[375px]" data-name="inner">
      <Top3 />
      <Con />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute h-[34px] left-1/2 top-[1085px] translate-x-[-50%] w-[375px]" data-name="HomeIndicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icon1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icon1">
          <path d={svgPaths.p171ef083} id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p9c1c3f0} id="Vector_2" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[23px] relative shrink-0 w-[28px]" data-name="icon2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 23">
        <g clipPath="url(#clip0_11_1794)" id="icon2">
          <path d="M6.66602 15.5H10.666" id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.66602 11.5H17.666" id="Vector_2" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.66602 7.5H17.666" id="Vector_3" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pa56fe00} id="Icon" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p2d61cd80} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_11_1794">
            <rect fill="white" height="23" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_1_386)" id="_ë ì´ì´_5">
          <path d={svgPaths.p16417b80} fill="var(--fill-0, #9ABAFF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_386">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icon4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 2608781">
          <path d={svgPaths.p105df880} id="Icon" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[19px] top-[19px] w-[221px]" data-name="list">
      <Icon />
      <Icon1 />
      <Icon2 />
      <Icon3 />
    </div>
  );
}

function Menu() {
  return (
    <div className="backdrop-blur-[3.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] h-[70px] overflow-clip relative rounded-[70px] shadow-[0px_0px_4px_0px_rgba(36,32,116,0.1)] shrink-0 w-[260px]" data-name="menu">
      <List />
    </div>
  );
}

function Chat() {
  return (
    <div className="bg-[#ebeaff] h-[70px] relative rounded-[100px] shrink-0 w-[72px]" data-name="chat">
      <div className="absolute h-[37px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="eye 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEye12} />
      </div>
    </div>
  );
}

function Gnb() {
  return (
    <div className="absolute bottom-[34px] box-border content-stretch flex items-center justify-between left-[16px] px-0 py-[8px] w-[343px]" data-name="gnb">
      <Menu />
      <Chat />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] size-full" data-name="이달의 막시무스">
      <StatusBar />
      <Main />
      <Inner />
      <HomeIndicator />
      <Gnb />
    </div>
  );
}