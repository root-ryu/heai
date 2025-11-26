import svgPaths from "./svg-etjzzg76gk";
import img336584700 from "figma:asset/7ead42acac65dca5bdba700634d9e214cb5b6134.png";
import imgUndefinedChangeTheBorderTo1 from "figma:asset/69ca96a63edd25007467149baddca65583cdf3d9.png";
import imgImage316 from "figma:asset/08da22f7bd9696bb50d1ab29ce01b9781cfd82cb.png";
import img175583051339328B855EeBc38424CB725B7550489330E1 from "figma:asset/6b226a363770f9043803e399e7053e80809c53f7.png";
import imgUndefinedSofaFfc83DSolidC1 from "figma:asset/c5288d1bce30bf6af5e09262c4dd2f7fea1ed686.png";
import imgImage311 from "figma:asset/bdbce79835c370b2940ed68dfd380f2887c89666.png";
import imgChatGptImage20258221015221 from "figma:asset/9ba8d2c702dd94511c088390df9e53091a84a891.png";
import imgEye12 from "figma:asset/532303d6c8033a0d1a7fe404f94ac83b8cb9ed53.png";

function Notch() {
  return (
    <div className="absolute h-[32px] left-[calc(50%+0.5px)] top-[-2px] translate-x-[-50%] w-[164px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 32">
        <g id="Notch">
          <g id="Notch_2">
            <path d={svgPaths.p3b40e580} fill="#3A3A3A" />
            <path d={svgPaths.p3f2f4600} fill="var(--fill-0, #3A3A3A)" />
            <path d={svgPaths.p27a68100} fill="var(--fill-0, #3A3A3A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[24px] left-[calc(83.33%+0.2px)] top-[8px] translate-x-[-50%] w-[77.401px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 24">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p7688b00} id="Outline" opacity="0.35" stroke="var(--stroke-0, #3A3A3A)" strokeWidth="1.05509" />
            <path d={svgPaths.pad0e500} fill="var(--fill-0, #3A3A3A)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p3050e400} fill="var(--fill-0, #3A3A3A)" id="Fill" />
          </g>
          <path d={svgPaths.p15ab8c00} fill="var(--fill-0, #3A3A3A)" id="Wifi" />
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p13d14b00} fill="var(--fill-0, #3A3A3A)" />
            <path d={svgPaths.p1fbf8df0} fill="var(--fill-0, #3A3A3A)" />
            <path d={svgPaths.p22ff8380} fill="var(--fill-0, #3A3A3A)" />
            <path d={svgPaths.p3279e000} fill="var(--fill-0, #3A3A3A)" />
          </g>
          <g id="Recording Indicator">
            <circle cx="8.99902" cy="3" fill="var(--fill-0, #FF9500)" id="Indicator" r="3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBarTime() {
  return (
    <div className="absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-[24px] top-[14px] translate-x-[-50%] w-[54px]" data-name="_StatusBar-time">
      <p className="absolute font-roboto font-semibold font-semibold h-[20px] leading-[22px] left-[27px] text-[#3a3a3a] text-[17px] text-center top-px tracking-[-0.408px] translate-x-[-50%] w-[54px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[calc(16.67%-10.5px)] top-[14px] translate-x-[-50%]" data-name="Left Side">
      <StatusBarTime />
    </div>
  );
}

function Top() {
  return (
    <div className="h-[47px] overflow-clip shrink-0 sticky top-0 w-full" data-name="top">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-nowrap">
      <p className="font-pretendard leading-none relative shrink-0 text-[#2e2e2e] text-[9px] whitespace-pre">이달의 막시무스는 누구?</p>
      <div className="font-pretendard font-bold leading-[1.2] relative shrink-0 text-[0px] text-[22px] text-white whitespace-pre">
        <p className="mb-0">
          <span className="font-pretendard font-extrabold">내 캐릭터</span>
          <span className="font-pretendard font-semibold">{`를 `}</span>
        </p>
        <p className="font-pretendard font-semibold">꾸미고 리워드 받기</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[24px] not-italic top-[calc(50%+0.5px)] translate-y-[-50%]">
      <Frame5 />
      <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#5a54fa] text-[10px] w-[min-content]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[16px] underline">지금 당장 리워드 받으러 가기</p>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[rgba(160,157,251,0.81)] h-[111px] overflow-clip relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[375px]" data-name="banner">
      <div className="absolute h-[62px] left-[302px] top-[49px] w-[80px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 62">
          <path d={svgPaths.p2fb24780} fill="var(--fill-0, #FFF4F4)" fillOpacity="0.1" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[219px] top-[-4px] w-[80px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 62">
          <path d={svgPaths.p2fb24780} fill="var(--fill-0, #FFF4F4)" fillOpacity="0.1" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[172px] top-[80px] w-[80px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 62">
          <path d={svgPaths.p2fb24780} fill="var(--fill-0, #FFF4F4)" fillOpacity="0.1" id="Vector" />
        </svg>
      </div>
      <Frame4 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025246357545256615)+(var(--transform-inner-height)*0.9996812343597412)))] items-center justify-center left-[212px] top-[-36px] w-[calc(1px*((var(--transform-inner-height)*0.025246357545256615)+(var(--transform-inner-width)*0.9996812343597412)))]" style={{ "--transform-inner-width": "177.859375", "--transform-inner-height": "177.859375" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.447deg]">
          <div className="relative size-[177.869px]" data-name="3 36584700">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img336584700} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="h-[32px] relative shrink-0 w-[103px]" data-name="name">
      <div className="absolute aspect-[15.1026/15.1032] left-[88.35%] right-0 top-[calc(50%+1px)] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p15112600} id="Icon" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-pretendard font-semibold leading-[32px] left-[calc(50%-10px)] not-italic text-[#02010e] text-[24px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">막시무스</p>
    </div>
  );
}

function TabminiCoin() {
  return (
    <div className="bg-[#837eff] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="tabmini/coin">
      <div className="relative shrink-0 size-[16px]" data-name="undefined_Change_the_border_to 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUndefinedChangeTheBorderTo1} />
      </div>
      <p className="font-roboto font-semibold font-semibold leading-[16px] relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        10,000
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Name />
      <TabminiCoin />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-1/2 size-[23.993px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_25_904)" id="Icon">
          <path d={svgPaths.p1c772200} fill="var(--fill-0, #9ABAFF)" id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="0.2" />
          <path d={svgPaths.p1fd8c600} fill="var(--fill-0, #9ABAFF)" id="Vector_2" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="0.2" />
          <path d={svgPaths.p348ff280} fill="var(--fill-0, #9ABAFF)" id="Vector_3" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="0.2" />
          <path d={svgPaths.pdff7800} fill="var(--fill-0, #9ABAFF)" id="Vector_4" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="0.2" />
          <path d={svgPaths.pcf24b00} fill="var(--fill-0, #9ABAFF)" id="Vector_5" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="0.2" />
          <path d={svgPaths.pb8d3380} fill="var(--fill-0, #9ABAFF)" id="Vector_6" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="0.2" />
          <path d={svgPaths.p37eb5d40} fill="var(--fill-0, #9ABAFF)" id="Vector_7" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="0.2" />
        </g>
        <defs>
          <clipPath id="clip0_25_904">
            <rect fill="white" height="23.9926" width="23.9926" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Chest() {
  return (
    <div className="absolute bg-white right-[13px] rounded-[50px] size-[30px] top-[calc(50%+9px)] translate-y-[-50%]" data-name="Chest">
      <div aria-hidden="true" className="absolute border border-[#9abaff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Icon />
    </div>
  );
}

function Bar() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Bar">
      <div className="absolute flex flex-col font-pretendard font-medium justify-center leading-[0] left-0 not-italic text-[#877777] text-[0px] text-nowrap top-[9px] translate-y-[-50%]">
        <p className="leading-[18px] text-[15px] whitespace-pre">
          <span className="font-pretendard font-medium not-italic text-[#232323]">1250</span>
          <span className="font-pretendard not-italic text-[#3a3a3a]">/2500</span>
          <span className="font-roboto font-normal text-[#3a3a3a]" style={{ fontVariationSettings: "'wdth' 100" }}>
            xp
          </span>
        </p>
      </div>
      <div className="absolute bg-[#e1e5ff] h-[11px] left-[4px] rounded-[32px] top-[27px] w-[337px]">
        <div aria-hidden="true" className="absolute border-4 border-[#e1e5ff] border-solid inset-[-4px] pointer-events-none rounded-[36px]" />
      </div>
      <div className="absolute bg-[#5a54fa] h-[11px] left-[4px] rounded-[32px] top-[27px] w-[214px]" />
      <Chest />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[10px] px-0 relative shrink-0 w-[343px]">
      <Frame9 />
      <Bar />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[278px]">
      <div className="h-[296px] relative shrink-0 w-[231px]" data-name="image 316">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.48%] left-[-29.23%] max-w-none top-[-7.53%] w-[153.85%]" src={imgImage316} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[56px] left-0 top-[2px] w-[42px]">
      <div className="absolute left-1/2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[42px] top-[calc(50%-7px)] translate-x-[-50%] translate-y-[-50%]" data-name="1755830513393-28b855ee-bc38-424c-b725-b7550489330e 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img175583051339328B855EeBc38424CB725B7550489330E1} />
      </div>
      <p className="absolute font-pretendard font-semibold h-[16px] leading-[22px] left-[20.5px] not-italic text-[#515151] text-[10px] text-center top-[40px] translate-x-[-50%] w-[47px]">퀘스트/배지</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[58px] left-[2px] top-[242px] w-[42px]" data-name="badge">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[9px] left-[18px] top-[38px] w-[6px]" />;
}

function Icon5() {
  return (
    <div className="absolute h-[58px] left-0 top-0 w-[42px]" data-name="Icon">
      <div className="absolute left-1/2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[44px] top-[calc(50%-7px)] translate-x-[-50%] translate-y-[-50%]" data-name="undefined_Sofa_#FFC83D_solid_c 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUndefinedSofaFfc83DSolidC1} />
      </div>
      <p className="absolute font-pretendard font-semibold h-[16px] leading-[22px] left-[21px] not-italic text-[#515151] text-[10px] text-center top-[39px] translate-x-[-50%] w-[28px]">룸</p>
      <Frame3 />
    </div>
  );
}

function Room() {
  return (
    <div className="absolute h-[58px] left-[2px] top-[164px] w-[42px]" data-name="room">
      <Icon5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[57px] left-[-2px] top-[-2px] w-[46px]">
      <div className="absolute left-1/2 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[46px] top-[calc(50%-5.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="image 311">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage311} />
      </div>
      <p className="absolute font-pretendard font-semibold h-[16px] leading-[22px] left-[23px] not-italic text-[#515151] text-[10px] text-center top-[41px] translate-x-[-50%] w-[28px]">패션</p>
    </div>
  );
}

function Fashion() {
  return (
    <div className="absolute h-[58px] left-[2px] top-[83px] w-[42px]" data-name="fashion">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[rgba(221,221,221,0)] left-0 rounded-[5px] size-[42px] top-0" />;
}

function Icon6() {
  return (
    <div className="absolute h-[58px] left-[2px] top-0 w-[42px]" data-name="Icon">
      <Frame />
      <p className="absolute font-pretendard font-semibold h-[16px] leading-[22px] left-[21px] not-italic text-[#515151] text-[10px] text-center top-[41px] translate-x-[-50%] w-[28px]">외모</p>
    </div>
  );
}

function Face() {
  return (
    <div className="absolute h-[58px] left-0 top-0 w-[46px]" data-name="face">
      <div className="absolute left-0 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[46px] top-[4px]" data-name="ChatGPT Image 2025년 8월 22일 오전 10_15_22 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImage20258221015221} />
      </div>
      <Icon6 />
    </div>
  );
}

function AiIcon() {
  return (
    <div className="absolute h-[300px] right-0 top-[calc(50%+48.5px)] translate-y-[-50%] w-[46px]" data-name="AI_Icon">
      <Badge />
      <Room />
      <Fashion />
      <Face />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[40px] h-[345px] items-end justify-center relative shrink-0 w-full">
      <Frame6 />
      <AiIcon />
    </div>
  );
}

function Inner() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0 w-[343px]" data-name="INNER">
      <Frame7 />
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="inner">
      <div className="flex flex-row items-center self-stretch">
        <Inner />
      </div>
    </div>
  );
}

function Inner2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-center overflow-clip pb-[90px] pt-[10px] px-0 relative shrink-0 w-[375px]" data-name="inner">
      <Frame8 />
      <Inner1 />
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
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[8px] relative shrink-0 w-[343px]" data-name="gnb">
      <Menu />
      <Chat />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="HomeIndicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[375px]" data-name="bottom">
      <Gnb />
      <HomeIndicator />
    </div>
  );
}

export default function MainHome() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col items-center relative rounded-[20px] size-full" data-name="main_home">
      <Top />
      <Banner />
      <Inner2 />
      <Bottom />
    </div>
  );
}