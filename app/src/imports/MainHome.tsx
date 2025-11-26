import svgPaths from "./svg-067ap2oqb0";
import imgPrize from "figma:asset/33ab7c693a25e5323849382d99358c731c496f60.png";
import imgChatGptImage20258190355483 from "figma:asset/0c2337b132ae6eef0b6ec3e90e4acf02d4ac292f.png";
import imgImage512 from "figma:asset/ffe30871b964849eea21498f341a536a18d0afa4.png";
import img from "figma:asset/0f13c32b2c92e38b0363c4670e1548962d386bd0.png";
import imgChatGptImage202511180346271 from "figma:asset/1d07edb02029289dc0db532232a0a32be74b0ba7.png";
import imgImage1487 from "figma:asset/d274f02ee1b28906991feeafdec500a2ca07fa69.png";
import imgImage1493 from "figma:asset/f6c5b0201726286d86fe4ac07027023e0d758d4b.png";
import imgAs2 from "figma:asset/85e49271a83665b87d03b134a1fd3bc5612a77b5.png";
import imgD1Ab8437258E4F5D9609F294541080A31 from "figma:asset/b083f23c756789098edb8ed36f219098ed33b8ca.png";
import imgChatGptImage202511180309341 from "figma:asset/093df2697a767b1e891b0eaa5bc949cbbac3c388.png";
import img336584700 from "figma:asset/7ead42acac65dca5bdba700634d9e214cb5b6134.png";
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

function Lv() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="lv">
      <div className="relative shrink-0 size-[24px]" data-name="Prize">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPrize} />
      </div>
      <p className="font-roboto font-medium font-medium leading-[22px] relative shrink-0 text-[#0c0c0c] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lv.3
      </p>
    </div>
  );
}

function Frame3() {
  return <div className="absolute bg-[#5a54fa] left-0 rounded-[10px] size-[18px] top-[-1px]" />;
}

function Bar() {
  return (
    <div className="bg-white h-[16px] overflow-clip relative rounded-[10px] shrink-0 w-[186px]" data-name="bar">
      <Frame3 />
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar">
      <Bar />
      <p className="absolute font-pretendard font-medium leading-[16px] left-[calc(50%-0.5px)] not-italic text-[12px] text-[rgba(12,12,12,0.24)] text-center text-nowrap top-[calc(50%-8px)] translate-x-[-50%] whitespace-pre">8 / 10</p>
    </div>
  );
}

function LvBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="lv_bar">
      <Lv />
      <Bar1 />
    </div>
  );
}

function Cal() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="cal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="top">
          <path d={svgPaths.pb14e400} id="Icon" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Top1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="top">
          <path d={svgPaths.p3392ee00} id="Icon" stroke="var(--stroke-0, #5A54FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Bell() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 size-[26px]" data-name="bell">
      <Top1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="icon">
      <Cal />
      <Bell />
    </div>
  );
}

function LvIcon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="lv_icon">
      <LvBar />
      <Icon />
    </div>
  );
}

function Date1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] py-[4px] relative rounded-[25px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="date1">
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#dddddd] text-[16px] text-center text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function Date2() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] py-[4px] relative rounded-[25px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="date2">
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#dddddd] text-[16px] text-center text-nowrap whitespace-pre">11</p>
    </div>
  );
}

function Date3() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] py-[4px] relative rounded-[25px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="date3">
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#dddddd] text-[16px] text-center text-nowrap whitespace-pre">12</p>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center text-white w-[33px]" data-name="date">
      <p className="font-roboto font-normal leading-[18px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Today
      </p>
      <p className="font-pretendard font-bold leading-[22px] not-italic relative shrink-0 text-[18px] w-full">13</p>
    </div>
  );
}

function Date4Today() {
  return (
    <div className="bg-[#5a54fa] box-border content-stretch flex gap-[10px] items-center overflow-clip p-[8px] relative rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="date4_today">
      <Date />
    </div>
  );
}

function Date5() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] py-[4px] relative rounded-[25px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="date5">
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#dddddd] text-[16px] text-center text-nowrap whitespace-pre">14</p>
    </div>
  );
}

function Date6() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] py-[4px] relative rounded-[25px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="date6">
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#dddddd] text-[16px] text-center text-nowrap whitespace-pre">15</p>
    </div>
  );
}

function Date7() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] py-[4px] relative rounded-[25px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="date7">
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#dddddd] text-[16px] text-center text-nowrap whitespace-pre">16</p>
    </div>
  );
}

function Today() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[8px] relative shrink-0 w-full" data-name="today">
      <Date1 />
      <Date2 />
      <Date3 />
      <Date4Today />
      <Date5 />
      <Date6 />
      <Date7 />
    </div>
  );
}

function ConBox() {
  return (
    <div className="bg-[#dfe5ff] relative rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="con_box">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[10px] py-[8px] relative w-full">
          <LvIcon />
          <Today />
        </div>
      </div>
    </div>
  );
}

function CImg() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="c_img">
      <div className="[grid-area:1_/_1] h-[251px] ml-[13px] mt-0 relative w-[205px]" data-name="ChatGPT Image 2025년 8월 19일 오후 03_55_48 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[170.65%] left-[-19.88%] max-w-none top-[-31.45%] w-[139.16%]" src={imgChatGptImage20258190355483} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-[153px] mt-[169px] relative size-[91px]" data-name="image 512">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage512} />
      </div>
      <div className="[grid-area:1_/_1] h-[25.002px] ml-[181px] mt-[20.38px] relative w-[20px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
          <path d={svgPaths.p1882ad00} fill="var(--fill-0, #FFB54D)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[34.786px] ml-0 mt-[47.56px] relative w-[30px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 35">
          <path d={svgPaths.pcbe9500} fill="var(--fill-0, #FFB54D)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[19.567px] ml-[200px] mt-[132.87px] relative w-[16px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.pa5f0380} fill="var(--fill-0, #FFB54D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center overflow-clip relative rounded-[10px] shrink-0 w-[343px]" data-name="date">
      <ConBox />
      <CImg />
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap" data-name="tit">
      <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] relative shrink-0 text-[#a4a4a4] text-[18px]">
        <p className="leading-[26px] text-nowrap whitespace-pre">Today 완료한 루틴 50개</p>
      </div>
      <p className="font-pretendard font-bold leading-[32px] relative shrink-0 text-[#5fb8e1] text-[30px] whitespace-pre">82%</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[31px]" data-name="물마시기">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <p className="font-pretendard leading-[24px] not-italic relative shrink-0 text-[#0c0c0c] text-[16px] text-center text-nowrap whitespace-pre">물 마시기</p>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Check1() {
  return (
    <div className="bg-[#5a54fa] h-[21px] relative rounded-[5px] shrink-0 w-[20px]" data-name="check">
      <div className="h-[21px] overflow-clip relative rounded-[inherit] w-[20px]">
        <Check />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#5a54fa] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="txt">
      <Frame4 />
      <Check1 />
    </div>
  );
}

function List1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="list1">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Txt />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[30px]" data-name="ChatGPT Image 2025년 11월 18일 오후 03_46_27 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImage202511180346271} />
      </div>
      <p className="font-pretendard leading-[24px] not-italic relative shrink-0 text-[#0c0c0c] text-[16px] text-center text-nowrap whitespace-pre">명상</p>
    </div>
  );
}

function Check2() {
  return <div className="absolute left-0 size-[20px] top-0" data-name="check" />;
}

function Check3() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[20px]" data-name="check">
      <div className="overflow-clip relative rounded-[inherit] size-[20px]">
        <Check2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Txt1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="txt">
      <Frame5 />
      <Check3 />
    </div>
  );
}

function List2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="list2">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Txt1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[30px]" data-name="image 1487">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1487} />
      </div>
      <p className="font-pretendard leading-[24px] not-italic relative shrink-0 text-[#0c0c0c] text-[16px] text-center text-nowrap whitespace-pre">잠자기</p>
    </div>
  );
}

function Check4() {
  return <div className="absolute left-0 size-[20px] top-0" data-name="check" />;
}

function Check5() {
  return (
    <div className="h-[21px] relative rounded-[5px] shrink-0 w-[20px]" data-name="check">
      <div className="h-[21px] overflow-clip relative rounded-[inherit] w-[20px]">
        <Check4 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Txt2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="txt">
      <Frame6 />
      <Check5 />
    </div>
  );
}

function List3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="list3">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Txt2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <List1 />
      <List2 />
      <List3 />
    </div>
  );
}

function TxtBox() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="txt_box">
      <Tit />
      <List />
      <div className="absolute h-[74px] right-[-6px] top-[-6px] w-[96px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 74">
          <path d={svgPaths.p3c7b00} fill="var(--fill-0, black)" fillOpacity="0.03" id="Vector" />
        </svg>
      </div>
      <p className="[text-underline-position:from-font] decoration-solid font-pretendard leading-none min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(12,12,12,0.53)] text-right underline w-[min-content]">+ 새 루틴 추가</p>
    </div>
  );
}

function Todolist() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[20px] relative rounded-[10px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[343px]" data-name="todolist">
      <TxtBox />
    </div>
  );
}

function BTxt() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="b_txt">
      <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[#7fa3c2] text-[9px] text-center text-nowrap whitespace-pre">150cm</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[4px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#acacac] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#447fb1] text-[13px] text-center text-nowrap whitespace-pre">Height</p>
      <BTxt />
    </div>
  );
}

function BTxt1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="b_txt">
      <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[#7fa3c2] text-[9px] text-center text-nowrap whitespace-pre">100kg</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[4px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#acacac] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-pretendard font-medium leading-[22px] not-italic relative shrink-0 text-[#447fb1] text-[13px] text-center text-nowrap whitespace-pre">Weight</p>
      <BTxt1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#bae6fa] box-border content-stretch flex flex-col gap-[10px] h-[74px] items-center justify-center left-1/2 px-[8px] py-[4px] rounded-[10px] top-[calc(50%+17px)] translate-x-[-50%] translate-y-[-50%] w-[102px]">
      <Frame14 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="absolute content-stretch flex font-pretendard font-light gap-[7px] items-end justify-end leading-[normal] left-[17.5px] not-italic text-[#7c7c7c] text-[14px] text-nowrap top-[186px] w-[133px] whitespace-pre" data-name="txt">
      <p className="relative shrink-0">목표체중</p>
      <p className="relative shrink-0">50 kg</p>
    </div>
  );
}

function Con() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[9px] h-full items-center justify-center overflow-clip relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-[168px]" data-name="con1">
      <div className="absolute h-[208px] left-[-19.5px] top-0 w-[207px]" data-name="image 1493">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1493} />
      </div>
      <Frame15 />
      <Txt3 />
    </div>
  );
}

function Tit1() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="tit">
      <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[gainsboro] w-full">
        <p className="leading-[16px]">다음 아이템 해금까지</p>
      </div>
      <p className="font-pretendard font-bold leading-[32px] relative shrink-0 text-[#dfe5ff] text-[24px] w-full">89%</p>
    </div>
  );
}

function Inner() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[calc(50%-0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[133px]" data-name="inner">
      <Tit1 />
      <div className="h-[106px] relative shadow-[0px_6px_19.3px_0px_#dfe5ff] shrink-0 w-[103px]" data-name="as 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-90 pointer-events-none size-full" src={imgAs2} />
      </div>
    </div>
  );
}

function Con1() {
  return (
    <div className="bg-[#241e1e] h-[208px] overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] shrink-0 w-[168px]" data-name="con2">
      <div className="absolute h-[62px] left-[7px] top-[60px] w-[80px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 62">
          <path d={svgPaths.p2fb24780} fill="var(--fill-0, #FFF4F4)" fillOpacity="0.03" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[87px] top-[106px] w-[80px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 62">
          <path d={svgPaths.p2fb24780} fill="var(--fill-0, #FFF4F4)" fillOpacity="0.03" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[4px] top-[172px] w-[80px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 62">
          <path d={svgPaths.p2fb24780} fill="var(--fill-0, #FFF4F4)" fillOpacity="0.03" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[87px] top-[5px] w-[80px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 62">
          <path d={svgPaths.p2fb24780} fill="var(--fill-0, #FFF4F4)" fillOpacity="0.03" id="Vector" />
        </svg>
      </div>
      <Inner />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[343px]">
      <div className="flex flex-row items-center self-stretch">
        <Con />
      </div>
      <Con1 />
    </div>
  );
}

function Txt4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="txt">
      <p className="font-pretendard font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">수면 기록</p>
      <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-white w-[min-content]">
        <p className="leading-[16px]">{`평균 수면 `}</p>
      </div>
      <p className="font-roboto font-bold font-bold leading-[0] not-italic relative shrink-0 text-[#3baa5c] text-[0px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-pretendard font-bold leading-[32px] text-[#4c94f0] text-[31px]">7</span>
        <span className="font-pretendard font-medium leading-[16px] text-[19px] text-white">시간</span>
        <span className="font-pretendard font-medium leading-[16px] text-[19px]"> </span>
        <span className="font-pretendard font-bold leading-[32px] text-[#4c94f0] text-[31px]">15</span>
        <span className="font-pretendard font-medium leading-[16px] text-[19px] text-white">분</span>
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-1/2 top-[2px] translate-x-[-50%]">
      <Txt4 />
      <div className="relative shrink-0 size-[115px]" data-name="d1ab8437-258e-4f5d-9609-f294541080a3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgD1Ab8437258E4F5D9609F294541080A31} />
      </div>
    </div>
  );
}

function Con2() {
  return (
    <div className="bg-[#110f3b] h-[120px] overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] shrink-0 w-[343px]" data-name="con3">
      <Frame17 />
      <div className="absolute inset-[17.04%_10.79%_64.44%_83.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
          <path d={svgPaths.p7fe0500} fill="var(--fill-0, #FFB54D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[28.89%_6.41%_57.78%_89.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
          <path d={svgPaths.p1a70b00} fill="var(--fill-0, #FFB54D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function BTxt2() {
  return (
    <div className="content-stretch flex font-pretendard gap-[2px] h-[18px] items-center justify-center leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(2,1,14,0.5)] text-center text-nowrap w-full whitespace-pre" data-name="b_txt">
      <p className="relative shrink-0">35Kcal</p>
      <p className="relative shrink-0">2h</p>
      <p className="relative shrink-0">3km</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[23px] top-[21px] w-[79px]">
      <p className="font-pretendard leading-none not-italic relative shrink-0 text-[#02010e] text-[16px] w-full">만보기</p>
      <BTxt2 />
    </div>
  );
}

function Frame7() {
  return <div className="absolute bg-[#447fb1] h-[106px] left-[151px] top-[114px] w-[10px]" />;
}

function Frame8() {
  return <div className="absolute bg-[#447fb1] h-[66px] left-[135px] top-[154px] w-[10px]" />;
}

function Frame11() {
  return <div className="absolute bg-[#447fb1] h-[15px] left-[119px] top-[205px] w-[10px]" />;
}

function Frame9() {
  return <div className="absolute bg-[#447fb1] h-[35px] left-[167px] top-[185px] w-[10px]" />;
}

function Frame10() {
  return <div className="absolute bg-[#447fb1] h-[6px] left-[221px] top-[214px] w-[10px]" />;
}

function Component() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[114px] translate-x-[-50%]" data-name="그래프">
      <div className="absolute h-0 left-[calc(50%-11px)] top-[221px] translate-x-[-50%] w-[296px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 1">
            <line id="Line 159" stroke="var(--stroke-0, #EEEEEE)" x2="296" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-pretendard leading-none left-[166px] not-italic text-[#a8a8a8] text-[10px] text-nowrap top-[226px] whitespace-pre">오후 12시</p>
      <p className="absolute font-pretendard leading-none left-[16px] not-italic text-[#a8a8a8] text-[10px] text-nowrap top-[226px] whitespace-pre">오전 12시</p>
      <p className="absolute font-pretendard leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[173px] whitespace-pre">1,500</p>
      <p className="absolute font-pretendard leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[216px] whitespace-pre">0</p>
      <p className="absolute font-pretendard leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[114px] whitespace-pre">3,000</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%-10px)] top-[220px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[16px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                <line id="Line 160" stroke="var(--stroke-0, #EEEEEE)" x2="16" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%-159px)] top-[221px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "15", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[15px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1">
                <line id="Line 161" stroke="var(--stroke-0, #EEEEEE)" x2="15" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%-83px)] top-[220px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[16px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                <line id="Line 160" stroke="var(--stroke-0, #EEEEEE)" x2="16" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%+136px)] top-[114px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "107", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[107px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 1">
                <line id="Line 163" stroke="var(--stroke-0, #EEEEEE)" x2="107" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%+63px)] top-[220px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[16px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                <line id="Line 160" stroke="var(--stroke-0, #EEEEEE)" x2="16" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame7 />
      <Frame8 />
      <Frame11 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Con3() {
  return (
    <div className="bg-white h-[247px] overflow-clip relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[342px]" data-name="con4">
      <p className="absolute font-inter font-medium font-medium leading-none left-[133px] not-italic text-[#447fb1] text-[0px] text-nowrap text-right top-[60px] translate-x-[-100%] whitespace-pre">
        <span className="font-pretendard font-bold text-[32px]">7,123</span>
        <span className="font-roboto font-medium text-[14px] tracking-[-0.408px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {" "}
        </span>
        <span className="font-pretendard font-medium text-[20px]">{`걸음 `}</span>
      </p>
      <Frame18 />
      <Component />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.1663222461938858)+(var(--transform-inner-height)*0.9860714673995972)))] items-center justify-center left-[218px] top-[-3px] w-[calc(1px*((var(--transform-inner-height)*0.1663222461938858)+(var(--transform-inner-width)*0.9860714673995972)))]" style={{ "--transform-inner-width": "104", "--transform-inner-height": "104" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.574deg]">
          <div className="relative size-[104px]" data-name="ChatGPT Image 2025년 11월 18일 오후 03_09_34 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImage202511180309341} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-nowrap">
      <p className="font-pretendard leading-none relative shrink-0 text-[#2e2e2e] text-[12px] whitespace-pre">이달의 막시무스는 누구?</p>
      <div className="font-pretendard font-bold leading-[1.2] relative shrink-0 text-[0px] text-[25px] text-white whitespace-pre">
        <p className="mb-0">
          <span className="font-pretendard font-extrabold">우승자</span>
          <span className="font-pretendard font-semibold">에게</span>
        </p>
        <p className="font-pretendard font-semibold">리워드를 드립니다!!</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[24px] not-italic top-[calc(50%+0.5px)] translate-y-[-50%]">
      <Frame12 />
      <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#5a54fa] text-[10px] w-[min-content]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[16px] underline">지금 당장 내 하트수 보러가기</p>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[rgba(160,157,251,0.81)] h-[135px] overflow-clip relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[375px]" data-name="banner">
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
      <Frame />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025246357545256615)+(var(--transform-inner-height)*0.9996812343597412)))] items-center justify-center left-[133.82px] top-[-61.18px] w-[calc(1px*((var(--transform-inner-height)*0.025246357545256615)+(var(--transform-inner-width)*0.9996812343597412)))]" style={{ "--transform-inner-width": "274.984375", "--transform-inner-height": "274.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.447deg]">
          <div className="relative size-[274.994px]" data-name="3 36584700">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img336584700} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Inner1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-center justify-center overflow-clip px-0 py-[20px] relative shrink-0 w-full" data-name="inner">
      <Date4 />
      <Todolist />
      <Frame16 />
      <Con2 />
      <Con3 />
      <Banner />
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

function List4() {
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
      <List4 />
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
      <Inner1 />
      <Bottom />
    </div>
  );
}