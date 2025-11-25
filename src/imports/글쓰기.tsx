import svgPaths from "./svg-qx51amnvwr";
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
    <button className="block cursor-pointer relative shrink-0 size-[30px]" data-name="top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="top">
          <path d="M21 26L10 15L21 4" id="top/icon/04" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </button>
  );
}

function Button() {
  return (
    <div className="bg-[#ebf2ff] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[12px] py-[4px] relative rounded-[50px] shrink-0" data-name="Button">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#cccccc] text-[18px] text-nowrap whitespace-pre">완료</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Button />
      </div>
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-start left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%]">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#02010e] text-[20px] text-center text-nowrap whitespace-pre">글쓰기</p>
    </div>
  );
}

function Tit() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[375px]" data-name="tit">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ebf2ff] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">전체</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,179,71,0.21)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0 w-[71px]" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">캐릭터</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,139,128,0.22)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">자유게시판</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(34,215,96,0.16)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">루틴게시판</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(200,165,216,0.64)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">꿀팁</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip pb-[10px] pt-0 px-0 relative shrink-0 w-[343px]">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#040415] text-[18px] text-nowrap whitespace-pre">게시판 선택</p>
      <Frame9 />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit-3">
          <path d="M12 20H21" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3f654a80} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Edit />
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cccccc] text-[18px] text-nowrap tracking-[-1px] whitespace-pre">제목을 입력하세요</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Text Input">
      <div className="box-border content-stretch flex h-[44px] items-center overflow-clip pb-[8px] pt-0 px-0 relative rounded-[inherit] w-full">
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex h-[300px] items-start overflow-clip relative shrink-0 w-full" data-name="Text Area">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#cccccc] text-[18px] text-nowrap whitespace-pre">내용을 입력하세요</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[343px]">
      <TextInput />
      <TextArea />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #686873)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d={svgPaths.p38772900} id="Vector_2" stroke="var(--stroke-0, #686873)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d={svgPaths.p2cba2e00} id="Vector_3" stroke="var(--stroke-0, #686873)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[7.995px] items-center relative shrink-0" data-name="Button">
      <Icon />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#686873] text-[14px] text-nowrap whitespace-pre">이미지</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_87_872)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #686873)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d={svgPaths.p1d39b480} id="Vector_2" stroke="var(--stroke-0, #686873)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d="M7.5 7.5H7.50833" id="Vector_3" stroke="var(--stroke-0, #686873)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d="M12.5 7.5H12.5083" id="Vector_4" stroke="var(--stroke-0, #686873)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
        </g>
        <defs>
          <clipPath id="clip0_87_872">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[7.995px] items-center relative shrink-0" data-name="Button">
      <Icon5 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#686873] text-[14px] text-nowrap whitespace-pre">동영상</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <Button6 />
      <Button7 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-[#555555] text-[14px] text-nowrap w-full whitespace-pre" data-name="List">
      <p className="relative shrink-0">• 명확하고 구체적인 제목을 작성해주세요</p>
      <p className="relative shrink-0">• 다른 사람을 존중하는 언어를 사용해주세요</p>
      <p className="relative shrink-0">• 관련 이미지가 있다면 함께 올려주세요</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[301px]">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[16px] text-black w-full">💡 좋은 글 작성 팁</p>
      <List />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(205,205,205,0.2)] box-border content-stretch flex flex-col gap-[7.995px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[343px]" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Inner() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-start justify-center overflow-clip px-0 py-[20px] relative shrink-0 w-[343px]" data-name="inner">
      <Frame8 />
      <Frame5 />
      <Container />
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
        <g clipPath="url(#clip0_87_690)" id="edit-3">
          <path d="M6.66602 15.5H10.666" id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.66602 11.5H17.666" id="Vector_2" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.66602 7.5H17.666" id="Vector_3" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pa56fe00} id="Icon" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p2d61cd80} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_87_690">
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
        <g clipPath="url(#clip0_85_381)" id="_ë ì´ì´_5">
          <path d={svgPaths.p16417b80} fill="var(--fill-0, #9ABAFF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_85_381">
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

function List1() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[19px] top-[19px] w-[221px]" data-name="list">
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Icon4 />
    </div>
  );
}

function Menu() {
  return (
    <div className="backdrop-blur-[3.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] h-[70px] overflow-clip relative rounded-[70px] shadow-[0px_0px_4px_0px_rgba(36,32,116,0.1)] shrink-0 w-[260px]" data-name="menu">
      <List1 />
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
      <Menu />
      <Chat />
    </div>
  );
}

function Gnb1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[339px]" data-name="gnb">
      <Gnb />
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

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-tl-[20px] rounded-tr-[20px] size-full" data-name="글쓰기">
      <StatusBar />
      <Tit />
      <Inner />
      <Gnb1 />
      <HomeIndicator />
    </div>
  );
}