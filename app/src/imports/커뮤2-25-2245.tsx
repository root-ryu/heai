import svgPaths from "./svg-mfg8nwobt9";
import img81C692A7A7Be452DBf947A68C7B899Ba1 from "figma:asset/507fd8bd7df8fea3fd6397e46c008e281673c2b5.png";
import imgChatGptImage20258260554501 from "figma:asset/a17109099732baa2516d67467fbb4097c0f27c32.png";
import imgChatGptImage20258260325201 from "figma:asset/38081470ca4fec66da3564d88891c95b3c138e4b.png";
import imgRectangle from "figma:asset/e4202411ab30ef9d32bc99aa9008acaf4e50181f.png";
import img81C692A7A7Be452DBf947A68C7B899Ba2 from "figma:asset/71462b102d5e572fde7e57cd40c6bc509b1d5cac.png";
import imgFrame1430106031 from "figma:asset/fdb5abfb892040227d8048bd2421a1732977fef0.png";
import img1 from "figma:asset/1f0be8c9c459c289caec074de14b7eeb9073573b.png";
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

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Top />
      <Top1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex gap-[266px] items-center justify-end left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
      <Frame14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-start left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%]">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#02010e] text-[20px] text-center text-nowrap whitespace-pre">캐릭터개시판</p>
    </div>
  );
}

function Main() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[375px]" data-name="main">
      <Frame15 />
      <Frame23 />
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

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex gap-[7px] grow items-center min-h-px min-w-px relative shrink-0">
      <Search />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">키워드를 검색 하세요...</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow min-h-px min-w-px relative rounded-[70px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-start px-[14px] py-[10px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-between px-[16px] py-[10px] relative shrink-0 w-[375px]" data-name="Container">
      <Frame17 />
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
    <div className="bg-[#ffb347] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0 w-[71px]" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">캐릭터</p>
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

function Tab() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip pb-[10px] pt-0 px-0 relative shrink-0 w-[343px]" data-name="tab">
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

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#040415] text-[18px] text-nowrap tracking-[-1px] whitespace-pre">이달의 막시무스</p>
      <Icon />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame18 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap whitespace-pre">가장 인기있는 막시무스에 투표하세요</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[24px] not-italic relative shrink-0 text-nowrap text-white w-full whitespace-pre">
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[14px]">내 하트 수</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[20px]">850</p>
    </div>
  );
}

function Bar() {
  return <div className="bg-[#f0c362] h-[7.995px] rounded-[2.13285e+07px] shrink-0 w-full" data-name="bar" />;
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[7.995px] relative rounded-[2.13285e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[7.995px] items-start pl-0 pr-[44.564px] py-0 relative w-full">
          <Bar />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame19 />
      <Container1 />
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">랭킹 바로가기</p>
      <Minimize />
    </div>
  );
}

function TxtBox() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="txt_box">
      <Frame22 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#c1cbff] gap-[7.995px] items-start px-[14px] py-[16px] relative rounded-[16px] shrink-0 to-[#837eff] w-[343px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_4px_-5px_rgba(0,0,0,0.1)]" />
      <div className="absolute h-[68px] left-[239px] top-[16px] w-[88px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 68">
          <path d={svgPaths.p36ddec80} fill="var(--fill-0, #0C0C0C)" fillOpacity="0.66" id="Vector" opacity="0.21" />
        </svg>
      </div>
      <TxtBox />
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

function Frame13() {
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
      <Frame13 />
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

function Frame35() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Menu />
      <Square />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Component />
      <Frame35 />
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[343px]" data-name="tit">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-black w-[98px]">캐릭터 게시판</p>
      <Frame37 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] w-full">정의의 이름으로 널!</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] w-full">ID : Mr셀러막</p>
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">280</p>
    </div>
  );
}

function SpeechBubble() {
  return (
    <div className="relative size-[14px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Speech Bubble">
          <path d={svgPaths.p2a722600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">댓글 21</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[4px] items-start left-0 overflow-clip px-[14px] py-[11px] top-[122px] w-[140px]">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Bookmark() {
  return (
    <div className="absolute h-[26px] left-[130px] top-[8px] w-[28px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="bookmark">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[210px] overflow-clip relative rounded-[20px] shrink-0 w-[167px]" data-name="card">
      <div className="absolute h-[108px] left-[calc(50%+2.5px)] top-[11px] translate-x-[-50%] w-[90px]" data-name="81c692a7-a7be-452d-bf94-7a68c7b899ba 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.12%] left-0 max-w-none top-[-13.28%] w-full" src={img81C692A7A7Be452DBf947A68C7B899Ba1} />
        </div>
      </div>
      <Frame25 />
      <Bookmark />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] w-full">병줍알바 하실 분..?</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] w-full">ID : 붕어빵 벤츠</p>
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart1 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">42</p>
    </div>
  );
}

function SpeechBubble1() {
  return (
    <div className="relative size-[14px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Speech Bubble">
          <path d={svgPaths.p2a722600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
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
          <SpeechBubble1 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">댓글 10</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[4px] items-start left-0 overflow-clip px-[14px] py-[11px] top-[122px] w-[140px]">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Bookmark1() {
  return (
    <div className="absolute h-[26px] left-[130px] top-[8px] w-[28px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="bookmark">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[210px] overflow-clip relative rounded-[20px] shrink-0 w-[167px]" data-name="card">
      <Frame30 />
      <Bookmark1 />
      <div className="absolute h-[119px] left-[32.5px] top-0 w-[96px]" data-name="ChatGPT Image 2025년 8월 26일 오후 05_54_50 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.53%] left-0 max-w-none top-[-0.03%] w-full" src={imgChatGptImage20258260554501} />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="2">
      <Card />
      <Card1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-[126px]">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] text-nowrap whitespace-pre">린쨩이랑 드디어 결혼...</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[12px] w-[min-content]">{` ID : 린쨩 사랑한다능`}</p>
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart2 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">24</p>
    </div>
  );
}

function SpeechBubble2() {
  return (
    <div className="relative size-[14px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Speech Bubble">
          <path d={svgPaths.p2a722600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
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
          <SpeechBubble2 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">댓글 20</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[4px] h-[77px] items-start left-[-0.5px] overflow-clip px-[14px] py-[11px] top-[122px] w-[145px]">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Bookmark2() {
  return (
    <div className="absolute h-[26px] left-[130px] top-[8px] w-[28px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="bookmark">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[210px] overflow-clip relative rounded-[20px] shrink-0 w-[167px]" data-name="card">
      <div className="absolute left-[24.5px] size-[115px] top-[14px]" data-name="ChatGPT Image 2025년 8월 26일 오후 03_25_20 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImage20258260325201} />
      </div>
      <Frame33 />
      <Bookmark2 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] w-full">춥다</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] w-full">ID : 요다</p>
    </div>
  );
}

function Heart3() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart3 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">15</p>
    </div>
  );
}

function SpeechBubble3() {
  return (
    <div className="relative size-[14px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Speech Bubble">
          <path d={svgPaths.p2a722600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble3 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">댓글 10</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[4px] items-start left-0 overflow-clip px-[14px] py-[11px] top-[122px] w-[140px]">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Bookmark3() {
  return (
    <div className="absolute h-[26px] left-[130px] top-[8px] w-[28px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="bookmark">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[210px] overflow-clip relative rounded-[20px] shrink-0 w-[167px]" data-name="card">
      <div className="absolute h-[122px] left-[42.5px] top-[8px] w-[81px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <Frame38 />
      <Bookmark3 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="3">
      <Card2 />
      <Card3 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] w-full">내 눈을 바라봐</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] w-full">ID : 밤티걸좋아요</p>
    </div>
  );
}

function Heart4() {
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart4 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function SpeechBubble4() {
  return (
    <div className="relative size-[14px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Speech Bubble">
          <path d={svgPaths.p2a722600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble4 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">댓글 4</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[4px] items-start left-0 overflow-clip px-[14px] py-[11px] top-[122px] w-[140px]">
      <Frame39 />
      <Frame41 />
    </div>
  );
}

function Bookmark4() {
  return (
    <div className="absolute h-[26px] left-[130px] top-[8px] w-[28px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="bookmark">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[210px] overflow-clip relative rounded-[20px] shrink-0 w-[167px]" data-name="card">
      <div className="absolute h-[117px] left-[calc(50%-5px)] top-[12px] translate-x-[-50%] w-[90px]" data-name="81c692a7-a7be-452d-bf94-7a68c7b899ba 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.65%] left-[-9.19%] max-w-none top-[0.04%] w-[123.89%]" src={img81C692A7A7Be452DBf947A68C7B899Ba2} />
        </div>
      </div>
      <Frame42 />
      <Bookmark4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative size-[124px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1430106031} />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[366px] py-[101px] relative size-[124px]">
          <div className="absolute left-[493px] size-[189px] top-[570px]" data-name="구찌 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[218.11%] max-w-none size-full top-[-39.03%]" src={img1} />
            </div>
          </div>
          <div className="absolute left-[507px] size-[18px] top-[503px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, #C29166)" id="Ellipse 773" r="9" />
            </svg>
          </div>
          <div className="absolute left-[507px] size-[18px] top-[531px]">
            <div className="absolute inset-[-122.22%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
                <g filter="url(#filter0_ddd_25_1260)" id="Ellipse 774">
                  <circle cx="31" cy="31" fill="var(--fill-0, #C29166)" r="9" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="62" id="filter0_ddd_25_1260" width="62" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_1260" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="11" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend in2="effect1_dropShadow_25_1260" mode="normal" result="effect2_dropShadow_25_1260" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend in2="effect2_dropShadow_25_1260" mode="normal" result="effect3_dropShadow_25_1260" />
                    <feBlend in="SourceGraphic" in2="effect3_dropShadow_25_1260" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-black w-full">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[21px] relative shrink-0 text-[14px] w-full">남친 구해요</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px] w-full">ID : 노밤티걸</p>
    </div>
  );
}

function Heart5() {
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart5 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function SpeechBubble5() {
  return (
    <div className="relative size-[14px]" data-name="Speech Bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Speech Bubble">
          <path d={svgPaths.p2a722600} fill="var(--fill-0, #5E5E5E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble5 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[12px] text-nowrap whitespace-pre">댓글 3</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[4px] items-start left-0 overflow-clip px-[14px] py-[11px] top-[122px] w-[140px]">
      <Frame43 />
      <Frame45 />
    </div>
  );
}

function Bookmark5() {
  return (
    <div className="absolute h-[26px] left-[130px] top-[8px] w-[28px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="bookmark">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #D8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[210px] overflow-clip relative rounded-[20px] shrink-0 w-[167px]" data-name="card">
      <div className="absolute flex items-center justify-center left-[20.5px] size-[124px] top-[5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame16 />
        </div>
      </div>
      <Frame46 />
      <Bookmark5 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="4">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Inner() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center px-0 py-[20px] relative shrink-0 w-[343px]" data-name="inner">
      <Tit />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Inner1() {
  return (
    <div className="bg-[#f8fbff] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="inner">
      <Container2 />
      <Inner />
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

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-[375px]" data-name="HomeIndicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

export default function Component4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-tl-[20px] rounded-tr-[20px] size-full" data-name="커뮤2">
      <StatusBar />
      <Main />
      <Container />
      <Tab />
      <Inner1 />
      <Gnb />
      <HomeIndicator />
    </div>
  );
}