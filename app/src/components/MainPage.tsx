'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bottom } from './Layout';
import svgPaths from '../imports/svg-067ap2oqb0';

// Image Constants
const imgPrize = '/33ab7c693a25e5323849382d99358c731c496f60.png';
const imgUndefinedChangeTheBorderTo2 = '/69ca96a63edd25007467149baddca65583cdf3d9.png';
const imgImage512 = '/ffe30871b964849eea21498f341a536a18d0afa4.png';
const imgChatGptImage20258190355483 = '/0c2337b132ae6eef0b6ec3e90e4acf02d4ac292f.png';
const imgImage368 = '/45d665f1d40d747ea00ba65cc4eae05f80acc843.png';
const img = '/0f13c32b2c92e38b0363c4670e1548962d386bd0.png'; // Water
const imgChatGptImage202511180346271 = '/1d07edb02029289dc0db532232a0a32be74b0ba7.png'; // Meditation
const imgImage1487 = '/d274f02ee1b28906991feeafdec500a2ca07fa69.png'; // Sleep
const imgD1Ab8437258E4F5D9609F294541080A31 = '/b083f23c756789098edb8ed36f219098ed33b8ca.png'; // Sleep Card
const imgChatGptImage202511180309341 = '/093df2697a767b1e891b0eaa5bc949cbbac3c388.png'; // Steps Character
const imgChatGptImage202511201120493 = '/027e8d9fbd9406238a5ebf69f9f621f04dc4dee3.png'; // Premium Banner
const imgHeaderLogo = '/header_logo.png'; // New Logo
const imgEyeLogo = '/eyelogo.png'; // Eye Logo
const imgBannerStarLarge = '/banner_star_large.png';
const imgBannerStarSmall = '/banner_star_small.png';
const imgCharacterBgEffect = '/character_bg_effect.png';
const imgPreicon = '/preicon.png';

export default function MainPage() {
  const router = useRouter();
  const [routines, setRoutines] = useState({
    water: true,
    meditation: false,
    sleep: false
  });

  const toggleRoutine = (routine: 'water' | 'meditation' | 'sleep') => {
    setRoutines(prev => ({ ...prev, [routine]: !prev[routine] }));
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.scrollbar-hide');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-neutral-50 h-[48px] overflow-clip relative w-full shrink-0">
        <div className="absolute box-border flex items-center justify-between left-1/2 pl-[4px] pr-0 py-0 top-[11px] translate-x-[-50%] w-[343px]">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="h-[22.196px] relative w-[84.306px] cursor-pointer hover:opacity-80 transition-opacity"
          >
             <div className="flex items-center h-full">
                <img src={imgHeaderLogo} alt="HeAi Logo" className="h-full object-contain" />
             </div>
          </button>
          
          {/* Icons */}
          <div className="flex gap-[6px] items-center">
            <button 
              onClick={() => router.push('/calendar')}
              className="relative size-[26px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                <path d={svgPaths.pb14e400} stroke="#5A54FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <button 
              onClick={() => router.push('/notifications')}
              className="relative size-[26px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                <path d={svgPaths.p3392ee00} stroke="#5A54FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="box-border flex flex-col gap-[34px] items-center overflow-x-clip overflow-y-auto px-[14px] py-0 pb-[120px] w-full flex-1 scrollbar-hide">
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* Top Section */}
        <div className="flex flex-col gap-[24px] items-center rounded-[10px] w-full max-w-[343px]">
          {/* Level & Calendar */}
          <div className="flex flex-col gap-[10px] items-start w-full">
            <div className="box-border flex gap-[30px] items-center justify-center px-[2px] py-0 w-full">
              {/* Level Progress */}
              <div className="bg-[rgba(223,229,255,0.4)] h-[32px] overflow-clip relative rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] w-[221px] shrink-0">
                <div className="absolute flex gap-[8px] items-center left-[8.5px] top-[4px]">
                  <div className="flex items-center justify-center w-[53px]">
                    <div className="relative size-[24px]">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPrize} />
                    </div>
                    <p className="font-roboto font-medium leading-[22px] text-[#0c0c0c] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Lv.3
                    </p>
                  </div>
                  <div className="relative w-[138px]">
                    <div className="bg-white h-[16px] overflow-clip relative rounded-[10px] w-[138px]">
                      <div className="absolute bg-[#5a54fa] left-0 rounded-[10px] size-[18px] top-[-1px]" />
                    </div>
                    <p className="absolute font-pretendard font-medium leading-none left-[calc(50%-0.5px)] text-[12px] text-[rgba(12,12,12,0.2)] text-center text-nowrap top-[2px] translate-x-[-50%] leading-none mt-[1px]">2 / 10</p>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="bg-[rgba(223,229,255,0.4)] rounded-[20px] p-[6px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0">
                <div className="bg-white border border-[#dfe5ff] rounded-[15px] flex items-center justify-center gap-[6px] pl-[6px] pr-[20px] h-[24px]">
                  <img src={imgUndefinedChangeTheBorderTo2} alt="" className="w-[16px] h-[16px] object-cover" />
                  <span className="font-pretendard font-normal text-[#0c0c0c] text-[14px] leading-none mt-[1px]">7,777</span>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="flex flex-col items-center w-full gap-[10px]">
              <p className="font-roboto font-medium leading-[20px] text-[#b4c1ea] text-[14px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                TODAY
              </p>
              <div className="flex justify-between items-center w-full px-[12px]">
                {(() => {
                  const dates = [];
                  const today = new Date();
                  for (let i = -3; i <= 3; i++) {
                    const d = new Date(today);
                    d.setDate(today.getDate() + i);
                    dates.push(d);
                  }
                  return dates.map((date, idx) => {
                    const isToday = idx === 3; // Center item is today
                    return (
                      <div 
                        key={idx} 
                        className={`flex items-center justify-center ${
                          isToday 
                            ? 'bg-[rgba(255,255,255,0.5)] w-[54px] h-[39px] rounded-[25px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)]' 
                            : 'w-[38px] h-[34px]'
                        }`}
                      >
                        <p className={`font-roboto text-center text-nowrap ${
                          isToday 
                            ? 'font-bold text-[#5a54fa] text-[25px]' 
                            : 'font-medium text-[#c7c7d6] text-[12px]'
                        }`} style={{ fontVariationSettings: "'wdth' 100" }}>
                          {date.getDate()}
                        </p>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </div>

          {/* Character Section */}
          <div className="h-[281.718px] relative w-[229.893px]">
             {/* Character Background Effect */}
            <div className="absolute h-[293px] left-[-33.48px] top-[-12.28px] w-[283px]">
              <img alt="" className="block max-w-none size-full" src={imgCharacterBgEffect} />
            </div>
            
            <div className="absolute left-[147.43px] size-[102.093px] top-[178.63px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage512} />
            </div>
            <div className="absolute bottom-0 h-[281.718px] left-1/2 translate-x-[-50%] w-[229.893px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[170.65%] left-[-19.88%] max-w-none top-[-31.45%] w-[139.16%]" src={imgChatGptImage20258190355483} />
              </div>
            </div>
            <div className="absolute left-[calc(50%+28.34px)] size-[32.535px] top-[calc(50%+0.63px)] translate-x-[-50%] translate-y-[-50%]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage368} />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-[52px] items-center justify-center w-full max-w-[343px]">
          {/* Today's Routine */}
          <div className="flex flex-col gap-[10px] items-center w-full">
            <p className="font-pretendard font-semibold leading-[26px] text-[#333333] text-[20px] w-full">오늘의 루틴</p>
            <div className="bg-white box-border flex flex-col gap-[10px] items-center justify-center overflow-clip p-[20px] relative rounded-[10px] w-full shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)]">
              {/* Eye Logo */}
              <div className="absolute right-[20px] top-[20px] z-9">
                <img src={imgEyeLogo} alt="Eye" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col gap-[16px] items-start w-full relative">
                {/* Title */}
                <div className="flex flex-col items-start">
                  <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] text-[#a4a4a4] text-[18px] text-nowrap">
                    <p className="leading-[26px]">Today </p>
                  </div>
                </div>
                
                {/* Routine List */}
                <div className="flex flex-col items-start w-full">
                  {/* 물 마시기 */}
                  <div className="box-border flex flex-col gap-[10px] items-start px-0 py-[4px] relative w-full">
                    <div className="absolute border-[#eeeeee] border-b border-solid inset-x-0 bottom-0 pointer-events-none" />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-[10px] items-center">
                        <div className="flex items-center justify-center">
                          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                            <div className="relative size-[31px]">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
                            </div>
                          </div>
                        </div>
                        <p className="font-pretendard font-regular leading-[24px] text-[#0c0c0c] text-[16px] text-center text-nowrap">물 마시기</p>
                      </div>
                      <button 
                        onClick={() => toggleRoutine('water')}
                        className={`${routines.water ? 'bg-[#5a54fa]' : 'bg-white'} h-[21px] relative rounded-[5px] w-[20px] border-2 ${routines.water ? 'border-[#5a54fa]' : 'border-[#e6e6e6]'} transition-colors`}
                      >
                         {routines.water && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                      </button>
                    </div>
                  </div>

                  {/* 명상 */}
                  <div className="box-border flex flex-col gap-[10px] items-start px-0 py-[4px] relative w-full">
                    <div className="absolute border-[#eeeeee] border-b border-solid inset-x-0 bottom-0 pointer-events-none" />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-[10px] items-center">
                        <div className="flex items-center justify-center">
                          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                            <div className="relative size-[30px]">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage202511180346271} />
                            </div>
                          </div>
                        </div>
                        <p className="font-pretendard font-regular leading-[24px] text-[#0c0c0c] text-[16px] text-center text-nowrap">명상</p>
                      </div>
                      <button 
                        onClick={() => toggleRoutine('meditation')}
                        className={`${routines.meditation ? 'bg-[#5a54fa]' : 'bg-white'} h-[21px] relative rounded-[5px] w-[20px] border-2 ${routines.meditation ? 'border-[#5a54fa]' : 'border-[#e6e6e6]'} transition-colors`}
                      >
                         {routines.meditation && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                      </button>
                    </div>
                  </div>

                  {/* 잠자기 */}
                  <div className="box-border flex flex-col gap-[10px] items-start px-0 py-[4px] relative w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-[10px] items-center">
                        <div className="flex items-center justify-center">
                          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                            <div className="relative size-[30px]">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1487} />
                            </div>
                          </div>
                        </div>
                        <p className="font-pretendard font-regular leading-[24px] text-[#0c0c0c] text-[16px] text-center text-nowrap">잠자기</p>
                      </div>
                      <button 
                        onClick={() => toggleRoutine('sleep')}
                        className={`${routines.sleep ? 'bg-[#5a54fa]' : 'bg-white'} h-[21px] relative rounded-[5px] w-[20px] border-2 ${routines.sleep ? 'border-[#5a54fa]' : 'border-[#e6e6e6]'} transition-colors`}
                      >
                         {routines.sleep && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Add Routine Button */}
                <button 
                  onClick={() => router.push('/routine')}
                  className="decoration-solid font-pretendard font-regular leading-none min-w-full text-[12px] text-[rgba(12,12,12,0.53)] text-center underline w-[min-content] cursor-pointer hover:text-[rgba(12,12,12,0.8)] z-10"
                >
                  + 새 루틴 추가
                </button>
              </div>
            </div>
          </div>

          {/* Sleep Record */}
          <div 
            onClick={() => router.push('/sleep')}
            className="bg-[#110f3b] h-[120px] overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] w-full cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="absolute flex gap-[40px] items-center left-1/2 top-[2px] translate-x-[-50%]">
              <div className="flex flex-col items-start">
                <p className="font-pretendard font-semibold leading-[26px] text-[18px] text-white">수면 기록</p>
                <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] text-[12px] text-white">
                  <p className="leading-[16px]">평균 수면 </p>
                </div>
                <p className="font-roboto font-bold leading-[0] text-[#3baa5c] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <span className="font-pretendard font-bold leading-[32px] text-[#4c94f0] text-[31px]">7</span>
                  <span className="font-pretendard font-medium leading-[16px] text-[19px] text-white">시간</span>
                  <span className="font-pretendard font-medium leading-[16px] text-[19px]"> </span>
                  <span className="font-pretendard font-bold leading-[32px] text-[#4c94f0] text-[31px]">15</span>
                  <span className="font-pretendard font-medium leading-[16px] text-[19px] text-white">분</span>
                </p>
              </div>
              <div className="relative size-[115px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgD1Ab8437258E4F5D9609F294541080A31} />
              </div>
            </div>
          </div>

          {/* Steps Counter (Restored Design) */}
          <div 
            onClick={() => router.push('/steps')}
            className="bg-white relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] w-full h-[247px] rounded-[10px] overflow-clip cursor-pointer hover:shadow-lg transition-shadow"
          >
            {/* Text Group Wrapper */}
            {/* Text Group Wrapper */}
            <div className="absolute left-[19px] top-[21px] flex flex-col items-start gap-[2px]">
              {/* Title */}
              <p className="font-pretendard font-semibold leading-none text-[#02010e] text-[18px] text-nowrap">만보기</p>
              
              {/* Stats */}
              <div className="flex font-pretendard gap-[2px] h-[18px] items-center justify-start leading-[18px] text-[12px] text-[rgba(2,1,14,0.5)] text-left text-nowrap w-full">
                <p>35Kcal</p>
                <p>2h</p>
                <p>3km</p>
              </div>

              {/* Steps Count */}
              <p className="font-inter font-medium leading-none text-[#447fb1] text-[0px] text-nowrap text-left mt-[2px]">
                <span className="font-pretendard font-bold text-[32px]">7,123</span>
                <span className="font-roboto font-medium text-[14px] tracking-[-0.408px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {" "}
                </span>
                <span className="font-pretendard font-medium text-[20px]">{`걸음 `}</span>
              </p>
            </div>

            {/* Graph Component */}
            <div className="absolute contents left-[calc(50%-0.5px)] top-[114px] translate-x-[-50%]">
              <div className="absolute h-0 left-[calc(50%-11px)] top-[221px] translate-x-[-50%] w-[296px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 1">
                    <line stroke="#EEEEEE" x2="296" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <p className="absolute font-pretendard leading-none left-[166px] not-italic text-[#a8a8a8] text-[10px] text-nowrap top-[226px] whitespace-pre">오후 12시</p>
              <p className="absolute font-pretendard leading-none left-[16px] not-italic text-[#a8a8a8] text-[10px] text-nowrap top-[226px] whitespace-pre">오전 12시</p>
              <p className="absolute font-pretendard leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[173px] whitespace-pre">1,500</p>
              <p className="absolute font-pretendard leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[216px] whitespace-pre">0</p>
              <p className="absolute font-pretendard leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[114px] whitespace-pre">3,000</p>
              
              {/* Bars */}
              <div className="absolute bg-[#447fb1] h-[106px] left-[151px] top-[114px] w-[10px]" />
              <div className="absolute bg-[#447fb1] h-[66px] left-[135px] top-[154px] w-[10px]" />
              <div className="absolute bg-[#447fb1] h-[15px] left-[119px] top-[205px] w-[10px]" />
              <div className="absolute bg-[#447fb1] h-[35px] left-[167px] top-[185px] w-[10px]" />
              <div className="absolute bg-[#447fb1] h-[6px] left-[221px] top-[214px] w-[10px]" />
            </div>

            {/* Character */}
            <div className="absolute flex items-center justify-center left-[218px] top-[-3px] w-[104px] h-[104px]">
              <div className="flex-none rotate-[9.574deg]">
                <div className="relative size-[104px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage202511180309341} />
                </div>
              </div>
            </div>
          </div>

          {/* Premium Banner */}
          <div 
            onClick={() => router.push('/ranking')}
            className="bg-[#ffeaf7] h-[138px] overflow-hidden relative w-[375px] mx-[-16px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            {/* Left Image (x=18, y=1, w=134, h=136) */}
            <div className="absolute left-[18px] top-[1px] w-[134px] h-[136px]">
              <img alt="" className="w-full h-full object-contain" src={imgPreicon} />
            </div>
            
            {/* Text (x=152, y=30) */}
            <div className="absolute flex flex-col gap-[6px] items-start left-[152px] top-[30px] w-[223px] z-10">
              <div className="font-pretendard font-extrabold leading-[25px] text-[0px] text-[24px] w-full text-[#6c69ba]">
                <p className="mb-0">
                  <span className="text-[#5a54fa]">프리미엄</span>
                  <span>으로 더 </span>
                </p>
                <p>자유롭게 루틴하기 </p>
              </div>
              <p className="font-pretendard font-semibold leading-[24px] text-[14px] w-full text-[#6c69ba]">광고 없이, 무제한 AI 루틴 관리까지!</p>
            </div>

            {/* Banner Stars */}
            {/* Star 1 (x=113, y=49) */}
            <div className="absolute left-[113px] top-[49px] w-[24px] h-[27px] pointer-events-none">
              <img alt="" className="w-full h-full object-contain" src={imgBannerStarLarge} />
            </div>
            {/* Star 2 (x=32, y=16.5) */}
            <div className="absolute left-[32px] top-[16.5px] w-[12px] h-[14px] pointer-events-none">
              <img alt="" className="w-full h-full object-contain" src={imgBannerStarSmall} />
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </div>
    </div>
  );
}
