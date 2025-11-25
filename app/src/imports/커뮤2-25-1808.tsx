import svgPaths from "./svg-2hkovzo4c1";
import imgFrame2147237665 from "figma:asset/fcbf00c6e7669c5731c5c6279240b0de44d03a29.png";
import imgFrame2147237666 from "figma:asset/11d727bab4cdf56f775ae857e3b37e12b4bddac2.png";
import imgFrame2147237667 from "figma:asset/818c3a52a301b9f862275c8982128d6f5646ca24.png";
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
    <div className="h-[47px] overflow-clip relative shrink-0 w-[360px]" data-name="StatusBar">
      <Notch />
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Top() {
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

function Top1() {
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

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Top />
      <Top1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex gap-[266px] items-center justify-end left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
      <Frame22 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-start left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%]">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#02010e] text-[20px] text-center text-nowrap whitespace-pre">자유게시판</p>
    </div>
  );
}

function Main() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[375px]" data-name="main">
      <Frame23 />
      <Frame33 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, #AAAAAA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M21 21L16.65 16.65" id="Vector_2" stroke="var(--stroke-0, #AAAAAA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="basis-0 content-stretch flex gap-[7px] grow items-center min-h-px min-w-px relative shrink-0">
      <Search />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">키워드를 검색 하세요...</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow min-h-px min-w-px relative rounded-[70px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-start px-[14px] py-[10px] relative w-full">
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-between px-[16px] py-[10px] relative shrink-0 w-[375px]" data-name="Container">
      <Frame24 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ebf2ff] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">전체</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,179,71,0.21)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0 w-[71px]" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-[42px]">캐릭터</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,139,128,0.22)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">자유게시판</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(34,215,96,0.16)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">루틴게시판</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(200,165,216,0.64)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">꿀팁</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip pb-[10px] pt-0 px-0 relative shrink-0 w-[343px]">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3d4f1c00} id="Vector" stroke="var(--stroke-0, #F0C362)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99961" />
          <path d="M4.16602 16.4941H15.8327" id="Vector_2" stroke="var(--stroke-0, #F0C362)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99961" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#040415] text-[18px] text-nowrap tracking-[-1px] whitespace-pre">이달의 막시무스</p>
      <Icon />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame27 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">가장 인기있는 막시무스에 투표하세요</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[24px] not-italic relative shrink-0 text-nowrap text-white w-full whitespace-pre">
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[14px]">내 하트 수</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[20px]">850</p>
    </div>
  );
}

function Container1() {
  return <div className="bg-[#f0c362] h-[7.995px] rounded-[2.13285e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[7.995px] relative rounded-[2.13285e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[7.995px] items-start pl-0 pr-[44.564px] py-0 relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame28 />
      <Container2 />
    </div>
  );
}

function Minimize() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="minimize-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g clipPath="url(#clip0_25_1301)" id="minimize-2">
          <path d="M2 1H8V7" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1 8L8 1" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_25_1301">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">랭킹 바로가기</p>
      <Minimize />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#c1cbff] gap-[7.995px] items-start px-[14px] py-[16px] relative rounded-[16px] shrink-0 to-[#837eff] w-[343px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_4px_-5px_rgba(0,0,0,0.1)]" />
      <div className="absolute h-[68px] left-[239px] top-[16px] w-[88px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 68">
          <path d={svgPaths.p36ddec80} fill="var(--fill-0, #0C0C0C)" fillOpacity="0.66" id="Vector" opacity="0.21" />
        </svg>
      </div>
      <Frame32 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative size-[16px]" data-name="chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_25_1288)" id="chevron_left">
          <g id="Vector"></g>
          <path d={svgPaths.p13d11a80} fill="var(--fill-0, #333333)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_25_1288">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">날짜순</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="드롭다운">
      <Frame21 />
    </div>
  );
}

function Menu() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu">
          <path d="M3 12H21" id="Vector" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 6H21" id="Vector_2" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 18H21" id="Vector_3" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Square() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="square">
          <path d={svgPaths.p1753300} id="Vector" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p272d7180} id="Vector_2" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e2bc680} id="Vector_3" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2f4d7400} id="Vector_4" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Menu />
      <Square />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Component />
      <Frame41 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[343px]" data-name="제목">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-black w-[98px]">캐릭터 게시판</p>
      <Frame43 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(255,179,71,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">{`캐릭터 `}</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[26px] relative shrink-0 w-[28px]" data-name="ㅁ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="ã">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame37 />
      <Component3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full whitespace-pre-wrap">{`ㅎ 사혼의 ..구슬 조각을 아시나요..ㅎㅎ  ...`}</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 grow h-[148px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[rgba(251,201,201,0.2)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[88.02%] left-[34.47%] max-w-none top-[6.78%] w-[31.61%]" src={imgFrame2147237665} />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame55 />
      <Frame15 />
      <Frame36 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 1,451</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">17분 전</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <Frame46 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart">
          <path d={svgPaths.p39507bc0} id="Vector" stroke="var(--stroke-0, #5D5D5D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">추천수 14</p>
    </div>
  );
}

function SpeechBubble() {
  return (
    <div className="relative size-[16px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Speech Bubble">
          <path d={svgPaths.p276f6d80} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">댓글 2</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame45 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="bg-[#ffb347] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(255,179,71,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">{`캐릭터 `}</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[26px] relative shrink-0 w-[28px]" data-name="ㅁ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="ã">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame38 />
      <Component4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">화이팅 *^^*~</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 grow h-[148px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[rgba(251,201,201,0.2)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[88.02%] left-[34.47%] max-w-none top-[6.78%] w-[31.61%]" src={imgFrame2147237666} />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame57 />
      <Frame16 />
      <Frame39 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 151</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame1 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">26분 전</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <Frame47 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Heart1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart">
          <path d={svgPaths.p39507bc0} id="Vector" stroke="var(--stroke-0, #5D5D5D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart1 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">추천수 5</p>
    </div>
  );
}

function SpeechBubble1() {
  return (
    <div className="relative size-[16px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Speech Bubble">
          <path d={svgPaths.p276f6d80} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble1 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">댓글 8</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame48 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame51 />
        </div>
      </div>
    </div>
  );
}

function Post1() {
  return (
    <div className="bg-[#ffb347] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[rgba(255,179,71,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">{`캐릭터 `}</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[26px] relative shrink-0 w-[28px]" data-name="ㅁ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="ã">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame40 />
      <Component5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">제 혼을 불태운 작품입니다 _근호</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 grow h-[148px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[rgba(251,201,201,0.2)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[88.02%] left-[34.47%] max-w-none top-[6.78%] w-[31.61%]" src={imgFrame2147237667} />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame56 />
      <Frame17 />
      <Frame42 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 184</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame6 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">50분 전</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <Frame49 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Heart2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart">
          <path d={svgPaths.p39507bc0} id="Vector" stroke="var(--stroke-0, #5D5D5D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart2 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">추천수 18</p>
    </div>
  );
}

function SpeechBubble2() {
  return (
    <div className="relative size-[16px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Speech Bubble">
          <path d={svgPaths.p276f6d80} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble2 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[14px] text-nowrap whitespace-pre">댓글 10</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame52 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Post2() {
  return (
    <div className="bg-[#ffb347] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[34px] items-center px-0 py-[20px] relative shrink-0 w-[375px]">
      <Component1 />
      <Post />
      <Post1 />
      <Post2 />
    </div>
  );
}

function Icon1() {
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

function Icon2() {
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

function Icon3() {
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

function Icon4() {
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
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Icon4 />
    </div>
  );
}

function Menu1() {
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
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[8px] relative shrink-0 w-[343px]" data-name="gnb">
      <Menu1 />
      <Chat />
    </div>
  );
}

function Gnb1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0 w-[375px]" data-name="gnb">
      <Gnb />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-[376px]" data-name="HomeIndicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Inner() {
  return (
    <div className="bg-[#f8fbff] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="inner">
      <Container3 />
      <Frame54 />
      <Gnb1 />
      <HomeIndicator />
    </div>
  );
}

export default function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-[20px] size-full" data-name="커뮤2">
      <StatusBar />
      <Main />
      <Container />
      <Frame44 />
      <Inner />
    </div>
  );
}