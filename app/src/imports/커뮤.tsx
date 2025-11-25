import svgPaths from "./svg-1yie4za7bl";
import imgFrame2147237665 from "figma:asset/fcbf00c6e7669c5731c5c6279240b0de44d03a29.png";
import imgFrame2147237724 from "figma:asset/abf40ce63a83d228878f1bf676a2d1691edebe72.png";
import imgFrame2147237725 from "figma:asset/d5fbe443b722b104881319d96d0ee9af0ff88a7f.png";
import imgFrame2147237726 from "figma:asset/58ca80176b87a211990413608d49ca2668fe6648.png";
import imgFrame2147237727 from "figma:asset/9cd300d4aac2c5d3b13bd82a34319994811bafdd.png";
import imgFrame2147237728 from "figma:asset/67a11a259baf4416be7cc33a0d3b5dfcdd498d8a.png";
import imgFrame2147237729 from "figma:asset/9d4aa19af2b4d1e7df08f7de47ee54a1ff2b18a2.png";
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

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Top />
      <Top1 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex gap-[266px] items-center justify-end left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
      <Frame53 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[375px]" data-name="main">
      <Frame54 />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-1/2 not-italic text-[#02010e] text-[20px] text-center text-nowrap top-[calc(50%-13px)] translate-x-[-50%] whitespace-pre">자유게시판</p>
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

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex gap-[7px] grow items-center min-h-px min-w-px relative shrink-0">
      <Search />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] text-nowrap whitespace-pre">키워드를 검색 하세요...</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow min-h-px min-w-px relative rounded-[70px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-start px-[14px] py-[10px] relative w-full">
          <Frame66 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-between px-0 py-[10px] relative shrink-0 w-[343px]" data-name="Container">
      <Frame56 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5a54fa] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">전체</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,179,71,0.21)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0 w-[71px]" data-name="button">
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

function Frame76() {
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

function Frame5() {
  return (
    <div className="bg-[rgba(255,82,65,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">자유게시판</p>
    </div>
  );
}

function Component() {
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

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame5 />
      <Component />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">오늘 루틴 하루 쉴건데 뭐 먹을지 투표해주세요</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#dddddd] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[10px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">대방어</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#dddddd] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[10px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">굴보쌈</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#dddddd] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[10px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">설빙!!! 자몽코코</p>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 1,452</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-between relative shrink-0 w-full">
      <Frame />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">17분 전</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[calc(50%+0.5px)] top-[20px] translate-x-[-50%] w-[320px]">
      <Frame88 />
      <Frame20 />
      <Frame62 />
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white h-[256px] relative shrink-0 w-full">
      <Frame78 />
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">추천수 0</p>
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">댓글 2</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame81 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative shrink-0 w-[375px]">
      <Frame86 />
    </div>
  );
}

function Post() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="post">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      <Post />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[rgba(255,179,71,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre">{`캐릭터 `}</p>
    </div>
  );
}

function Component1() {
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

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame71 />
      <Component1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full whitespace-pre-wrap">{`ㅎ 사혼의 ..구슬 조각을 아시나요..ㅎㅎ  ...`}</p>
    </div>
  );
}

function Frame61() {
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

function Frame70() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame91 />
      <Frame24 />
      <Frame70 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 1,451</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame1 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">17분 전</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <Frame82 />
          <Frame15 />
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
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">추천수 14</p>
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble1 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">댓글 2</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame83 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame90 />
        </div>
      </div>
    </div>
  );
}

function Post1() {
  return (
    <div className="bg-[#ffb347] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(255,82,65,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[4px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">자유게시판</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[26px] relative shrink-0 w-[28px]" data-name="ㅁ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="ã">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame7 />
      <Component2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">이번에 나우유씨미3 너무 재미없다던데 대신 위키드 볼까 말까?</p>
    </div>
  );
}

function Frame64() {
  return <div className="absolute bg-[#5a54fa] h-[38px] left-0 rounded-bl-[10px] rounded-tl-[10px] top-0 w-[223px]" />;
}

function Frame26() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[10px] relative w-full">
          <Frame64 />
          <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">위키드</p>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return <div className="absolute bg-[#dfe5ff] h-[38px] left-0 rounded-bl-[10px] rounded-tl-[10px] top-0 w-[120px]" />;
}

function Frame27() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[10px] relative w-full">
          <Frame65 />
          <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">나우유씨미3</p>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame89 />
      <Frame25 />
      <Frame63 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 1,452</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame8 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">17분 전</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
          <Frame79 />
          <Frame28 />
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart2 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">추천수 0</p>
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble2 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">댓글 2</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Bookmark() {
  return <div className="shrink-0 size-[25px]" data-name="bookmark" />;
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame92 />
      <Bookmark />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame93 />
        </div>
      </div>
    </div>
  );
}

function Post2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(255,82,65,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">자유게시판</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[26px] relative shrink-0 w-[28px]" data-name="ㅁ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="ã">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame11 />
      <Component3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">집가는길 너랑 나ㅎ... ㄱ나니...</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="h-[148px] relative shrink-0 w-[156px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-gradient-to-r from-[#9e9e9e] inset-0 to-[#9e9e9e]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2147237724} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2147237725} />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="h-[148px] relative shrink-0 w-[156px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-gradient-to-r from-[#9e9e9e] inset-0 to-[#9e9e9e]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2147237726} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2147237727} />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame31 />
      <Frame72 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 1,452</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame12 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">17분 전</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <Frame94 />
          <Frame80 />
          <Frame32 />
        </div>
      </div>
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart3 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">추천수 0</p>
    </div>
  );
}

function SpeechBubble3() {
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

function Frame34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble3 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">댓글 2</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame13 />
      <Frame34 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame95 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Post3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[rgba(255,82,65,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">자유게시판</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[26px] relative shrink-0 w-[28px]" data-name="ㅁ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="ã">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame36 />
      <Component4 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">
        막시무스가 칼 들고 날 쫒아오는 악몽을 꿨습니다
        <br aria-hidden="true" />
        어제 루틴을 지키지 않아서 그런걸까요..?
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 size-[148px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame2147237728} />
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative size-[148px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame2147237729} />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame73 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame74 />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame97 />
      <Frame37 />
      <Frame75 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 1,452</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame38 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">17분 전</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <Frame98 />
          <Frame39 />
        </div>
      </div>
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

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart4 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">추천수 0</p>
    </div>
  );
}

function SpeechBubble4() {
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

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble4 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">댓글 2</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame99 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function Post4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame40 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[rgba(255,82,65,0.67)] box-border content-stretch flex gap-[10px] items-start px-[6px] py-[3px] relative rounded-[5px] shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">자유게시판</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[26px] relative shrink-0 w-[28px]" data-name="ㅁ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="ã">
          <path d={svgPaths.p15363100} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame44 />
      <Component6 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black w-full">다이어트 1일.. 비비큐 치킨 먹어?말아? 먹말먹말</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[320px]">
      <Frame101 />
      <Frame45 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[20px] items-center leading-[21px] not-italic relative shrink-0 text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[50px]">O</p>
      <p className="relative shrink-0 text-[16px]">먹는다</p>
    </div>
  );
}

function O() {
  return (
    <div className="bg-[#f3f3f3] box-border content-stretch flex flex-col gap-[25px] items-center justify-center px-[56px] py-[54px] relative rounded-[10px] shrink-0 size-[150px]" data-name="O">
      <Frame106 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[20px] items-center leading-[21px] not-italic relative shrink-0 text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[50px]">X</p>
      <p className="relative shrink-0 text-[16px] text-center">안 먹는다</p>
    </div>
  );
}

function X() {
  return (
    <div className="bg-[#f3f3f3] box-border content-stretch flex flex-col gap-[25px] items-center justify-center px-[56px] py-[54px] relative rounded-[10px] shrink-0 size-[150px]" data-name="X">
      <Frame107 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <O />
      <X />
    </div>
  );
}

function Frame87() {
  return <div className="absolute bg-[#dfe5ff] bottom-0 h-[87px] left-[-0.5px] rounded-bl-[10px] rounded-br-[10px] w-[150px]" />;
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[20px] items-center leading-[21px] not-italic relative shrink-0 text-[#aaaaaa] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[50px]">O</p>
      <p className="relative shrink-0 text-[16px]">먹는다</p>
    </div>
  );
}

function O1() {
  return (
    <div className="bg-[#f3f3f3] box-border content-stretch flex flex-col gap-[25px] items-center justify-center px-[56px] py-[54px] relative rounded-[10px] shrink-0 size-[150px]" data-name="O">
      <Frame87 />
      <Frame108 />
    </div>
  );
}

function Frame102() {
  return <div className="absolute bg-[#5a54fa] bottom-0 h-[127px] left-[-0.5px] rounded-bl-[10px] rounded-br-[10px] w-[150px]" />;
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[20px] items-center leading-[21px] not-italic relative shrink-0 text-nowrap text-white whitespace-pre">
      <p className="relative shrink-0 text-[50px]">X</p>
      <p className="relative shrink-0 text-[16px] text-center">안 먹는다</p>
    </div>
  );
}

function X1() {
  return (
    <div className="bg-[#f3f3f3] box-border content-stretch flex flex-col gap-[25px] items-center justify-center px-[56px] py-[54px] relative rounded-[10px] shrink-0 size-[150px]" data-name="X">
      <Frame102 />
      <Frame109 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <O1 />
      <X1 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">조회수 1,452</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <Frame46 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap whitespace-pre">17분 전</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <Frame84 />
          <Frame67 />
          <Frame103 />
          <Frame47 />
        </div>
      </div>
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

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Heart5 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">추천수 0</p>
    </div>
  );
}

function SpeechBubble5() {
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

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SpeechBubble5 />
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5e5e5e] text-[16px] text-nowrap whitespace-pre">댓글 2</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <Frame104 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[320px]">
      <Frame105 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center pb-[20px] pt-[10px] px-[20px] relative w-full">
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function Post5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="post">
      <Frame48 />
      <Frame51 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full">
      <Frame77 />
      <Post1 />
      <Post2 />
      <Post3 />
      <Post4 />
      <Post5 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icon1">
          <path d={svgPaths.p171ef083} id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p9c1c3f0} id="Vector_2" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Edit() {
  return (
    <div className="h-[23px] relative shrink-0 w-[28px]" data-name="edit-3">
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

function Component5() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="_레이어_5">
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

function Frame52() {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 2608781">
          <path d={svgPaths.p105df880} id="Icon" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[19px] top-[19px] w-[221px]">
      <Frame55 />
      <Edit />
      <Component5 />
      <Frame52 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="backdrop-blur-[3.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] h-[70px] overflow-clip relative rounded-[70px] shadow-[0px_0px_4px_0px_rgba(36,32,116,0.1)] shrink-0 w-[260px]">
      <p className="absolute font-['Pretendard:Black',sans-serif] leading-[normal] left-[298.42px] not-italic text-[#5a54fa] text-[20px] text-nowrap top-[32.12px] whitespace-pre">my</p>
      <Frame58 />
    </div>
  );
}

function FaceId() {
  return (
    <div className="bg-[#ebeaff] h-[70px] relative rounded-[100px] shrink-0 w-[72px]" data-name="face-id-02">
      <div className="absolute h-[37px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="eye 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEye12} />
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[343px]">
      <Frame57 />
      <FaceId />
    </div>
  );
}

function Gnb() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0 w-[375px]" data-name="gnb">
      <Frame60 />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-[360px]" data-name="HomeIndicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Inner() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="inner">
      <Frame59 />
      <Gnb />
      <HomeIndicator />
    </div>
  );
}

export default function Component7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-[20px] size-full" data-name="커뮤">
      <StatusBar />
      <Main />
      <Container />
      <Frame76 />
      <Inner />
    </div>
  );
}