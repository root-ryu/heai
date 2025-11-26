import svgPaths from "./svg-zpvojqo964";
import img from "figma:asset/29730ee16b412ecb815a5ea38fef192f75fe4874.png";
import img175583051339328B855EeBc38424CB725B7550489330E2 from "figma:asset/6b226a363770f9043803e399e7053e80809c53f7.png";
import img1 from "figma:asset/fd2aa84c99d09e0c96625e3e4daa9607bd9c69bf.png";
import imgImage92 from "figma:asset/587ee515c750bd68bb461300b07b5c4f101bc28b.png";

function Notch() {
  return (
    <div className="absolute h-[32px] left-[calc(50%+0.5px)] top-[-2px] translate-x-[-50%] w-[164px]" data-name="Notch">
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

function RightSide() {
  return (
    <div className="absolute h-[24px] left-[calc(83.33%+0.2px)] top-[8px] translate-x-[-50%] w-[77.401px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 24">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p7688b00} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="1.05509" />
            <path d={svgPaths.pad0e500} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p3050e400} fill="var(--fill-0, black)" id="Fill" />
          </g>
          <path d={svgPaths.p15ab8c00} fill="var(--fill-0, black)" id="Wifi" />
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p13d14b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1fbf8df0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p22ff8380} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3279e000} fill="var(--fill-0, black)" />
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
      <p className="absolute font-roboto font-semibold font-semibold h-[20px] leading-[22px] left-[27px] text-[17px] text-black text-center top-px tracking-[-0.408px] translate-x-[-50%] w-[54px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="absolute h-[47px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[375px]" data-name="top">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Top1() {
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

function Frame7() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" />;
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[7px] top-[9px] w-[356px]">
      <Top1 />
      <Frame7 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[calc(75%+47.75px)] size-[30px] top-[11px]" data-name="menu-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="menu-01">
          <path d="M25 22.5H5M25 15H5M25 7.5H5" id="Icon" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-neutral-50 h-[48px] left-1/2 top-[47px] translate-x-[-50%] w-[375px]" data-name="main">
      <div className="h-[48px] overflow-clip relative rounded-[inherit] w-[375px]">
        <Frame8 />
        <p className="absolute font-roboto font-bold font-bold leading-[32px] left-1/2 text-[#02010e] text-[24px] text-center text-nowrap top-[calc(50%-16px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          마이페이지
        </p>
        <Menu />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[gainsboro] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white left-[36px] overflow-clip rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[80px] top-[450px]">
      <p className="absolute font-pretendard font-semibold leading-[24px] left-1/2 not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%+13px)] translate-x-[-50%] whitespace-pre">캘린더</p>
      <div className="absolute h-[48px] left-[19px] top-[5px] w-[42px]" data-name="캘린더">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white left-[calc(50%-3.5px)] overflow-clip rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[80px] top-[450px] translate-x-[-50%]">
      <p className="absolute font-pretendard font-semibold leading-[24px] left-1/2 not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%+13px)] translate-x-[-50%] whitespace-pre">뱃지</p>
      <div className="absolute h-[48px] left-1/2 top-[calc(50%-11px)] translate-x-[-50%] translate-y-[-50%] w-[56px]" data-name="1755830513393-28b855ee-bc38-424c-b725-b7550489330e 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.67%] left-0 max-w-none top-[-8.33%] w-full" src={img175583051339328B855EeBc38424CB725B7550489330E2} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white left-[calc(50%+64.5px)] overflow-clip rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[80px] top-[450px]">
      <p className="absolute font-pretendard font-semibold leading-[24px] left-1/2 not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%+13px)] translate-x-[-50%] whitespace-pre">새소식</p>
      <div className="absolute h-[48px] left-[19px] top-[5px] w-[42px]" data-name="종">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bottom-0 left-1/2 overflow-clip top-[42.31%] translate-x-[-50%] w-[30px]">
      <div className="absolute inset-[13.33%_7.13%_55.67%_6.67%]" data-name="Vector">
        <div className="absolute inset-[-10.75%_-3.87%_-10.76%_-3.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 12">
            <path d={svgPaths.p75afb80} id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.4%_15.75%_14.01%_15.29%]" data-name="Vector">
        <div className="absolute inset-[-4.59%_-4.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
            <path d={svgPaths.p27b0f580} id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="h-[52px] overflow-clip relative shrink-0 w-[48px]" data-name="bottom">
      <Frame9 />
    </div>
  );
}

function FaceId() {
  return (
    <div className="absolute left-[calc(50%+2px)] size-[30px] top-[22px] translate-x-[-50%]" data-name="face-id-02">
      <div className="absolute inset-[16.67%_23.33%_16.67%_10%]" data-name="Icon">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p339db080} id="Icon" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-roboto font-semibold font-semibold inset-[45.83%_2.5%_4.17%_51.67%] justify-center leading-[0] text-[#9abaff] text-[12px] tracking-[-0.18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px]">AI</p>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="h-[52px] overflow-clip relative shrink-0 w-[48px]" data-name="bottom">
      <FaceId />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-1/2 size-[30px] top-[22px] translate-x-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 1430105630">
          <path d={svgPaths.p8b83100} id="Icon" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Bottom2() {
  return (
    <div className="h-[52px] overflow-clip relative shrink-0 w-[48px]" data-name="bottom">
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-1/2 size-[30px] top-[22px] translate-x-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 2608781">
          <path d={svgPaths.p105df880} id="Icon" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Bottom3() {
  return (
    <div className="h-[52px] relative shrink-0 w-[48px]" data-name="bottom">
      <div className="h-[52px] overflow-clip relative rounded-[inherit] w-[48px]">
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#5a54fa] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-center left-[calc(50%+0.5px)] top-px translate-x-[-50%] w-[342px]">
      <Bottom />
      <Bottom1 />
      <Bottom2 />
      <Bottom3 />
    </div>
  );
}

function Tapbar() {
  return (
    <div className="h-[80px] pointer-events-auto sticky top-0 translate-x-[-50%] w-[375px]" data-name="tapbar">
      <div className="h-[80px] overflow-clip relative rounded-[inherit] w-[375px]">
        <div className="absolute bg-[#d1d1d1] bottom-[5px] h-[5px] left-[calc(50%-0.5px)] opacity-[0.34] rounded-[25px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white left-[calc(50%-7px)] overflow-clip rounded-[200px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] size-[251px] top-[127px] translate-x-[-50%]">
      <div className="absolute left-[calc(50%+0.5px)] size-[200px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="image 92">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage92} />
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="camera">
          <path d={svgPaths.p2995d200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c805780} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f0f0f0] left-[calc(50%+63.5px)] overflow-clip rounded-[50px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2),0px_0px_16px_0px_rgba(0,0,0,0.12),0px_0px_12px_0px_rgba(0,0,0,0.14)] size-[55px] top-[309px]">
      <Camera />
    </div>
  );
}

export default function My() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="my01">
      <div className="relative size-full">
        <Top />
        <p className="absolute font-roboto font-semibold font-semibold leading-[28px] left-[calc(50%+0.5px)] text-[20px] text-black text-center text-nowrap top-[calc(50%-12px)] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          막시무스
        </p>
        <Main />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <div className="absolute bottom-0 h-[812px] left-1/2 pointer-events-none">
          <Tapbar />
        </div>
        <Frame />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}