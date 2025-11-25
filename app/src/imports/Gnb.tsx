import svgPaths from "./svg-pxghplpysr";
import imgEye12 from "figma:asset/532303d6c8033a0d1a7fe404f94ac83b8cb9ed53.png";

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
        <g clipPath="url(#clip0_105_39)" id="icon2">
          <path d="M6.66602 15.5H10.666" id="Vector" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.66602 11.5H17.666" id="Vector_2" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.66602 7.5H17.666" id="Vector_3" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pa56fe00} id="Icon" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p2d61cd80} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #9ABAFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_105_39">
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
        <g clipPath="url(#clip0_105_33)" id="icon3">
          <path d={svgPaths.p16417b80} fill="var(--fill-0, #9ABAFF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_105_33">
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
        <g id="icon4">
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

export default function Gnb() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[8px] relative size-full" data-name="gnb">
      <Menu />
      <Chat />
    </div>
  );
}