'use client';

import { useState } from 'react';
import { Top, Bottom } from './Layout';
import PullToRefresh from './PullToRefresh';
const img336584700 = '/7ead42acac65dca5bdba700634d9e214cb5b6134.png';
const imgCoin = '/69ca96a63edd25007467149baddca65583cdf3d9.png';
const imgImage316 = '/08da22f7bd9696bb50d1ab29ce01b9781cfd82cb.png';
const imgBadge = '/6b226a363770f9043803e399e7053e80809c53f7.png';
const imgRoom = '/c5288d1bce30bf6af5e09262c4dd2f7fea1ed686.png';
const imgFashion = '/bdbce79835c370b2940ed68dfd380f2887c89666.png';
const imgFace = '/9ba8d2c702dd94511c088390df9e53091a84a891.png';

export default function CustomizePage() {


  return (
    <div className="bg-neutral-50 flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col">
        <Top />

        {/* Banner */}
        <div className="bg-[rgba(160,157,251,0.81)] h-[111px] overflow-clip relative shrink-0 w-full">
          <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[24px] not-italic top-[calc(50%+0.5px)] translate-y-[-50%]">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-nowrap">
              <p className="font-pretendard leading-none relative shrink-0 text-[#2e2e2e] text-[9px] whitespace-pre">
                이달의 막시무스는 누구?
              </p>
              <div className="font-pretendard font-bold leading-[1.2] relative shrink-0 text-[22px] text-white whitespace-pre">
                <p className="mb-0">
                  <span className="font-pretendard font-extrabold">
                    내 캐릭터
                  </span>
                  <span className="font-pretendard font-semibold">를 </span>
                </p>
                <p className="font-pretendard font-semibold">
                  꾸미고 리워드 받기
                </p>
              </div>
            </div>
            <div className="flex flex-col font-pretendard font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#5a54fa] text-[10px] w-[min-content]">
              <p className="[text-underline-position:from-font] decoration-solid leading-[16px] underline">
                지금 당장 리워드 받으러 가기
              </p>
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center left-[151px] size-[229.906px] top-[-52.5px]"
            style={
              {
                '--transform-inner-width': '224.3125',
                '--transform-inner-height': '224.3125',
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[1.447deg]">
              <div className="relative size-[224.314px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={img336584700}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center left-[250px] size-[134.263px] top-[-4.5px]"
            style={
              {
                '--transform-inner-width': '130.984375',
                '--transform-inner-height': '130.984375',
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[1.447deg]">
              <div className="relative size-[130.997px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={img336584700}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center left-[162.95px] size-[121.961px] top-0"
            style={
              {
                '--transform-inner-width': '118.984375',
                '--transform-inner-height': '118.984375',
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[1.447deg]">
              <div className="relative size-[118.994px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={img336584700}
                />
              </div>
            </div>
          </div>
        </div>

        <PullToRefresh>
        {/* Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
          <div className="box-border content-stretch flex flex-col gap-[20px] items-center overflow-clip px-0 py-[10px] w-full">
            {/* Name and Coin */}
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[343px]">
                <p className="font-pretendard font-semibold leading-[32px] not-italic relative shrink-0 text-[#02010e] text-[24px] text-center text-nowrap whitespace-pre">
                  막시무스
                </p>
                <div className="relative shrink-0 size-[12px]">
                  <div className="absolute inset-[-6.25%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src="/pencil.png"
                    />
                  </div>
                </div>
                <div className="bg-[#837eff] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                      src={imgCoin}
                    />
                  </div>
                  <p
                    className="font-roboto font-semibold leading-[16px] relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre leading-none mt-[1px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    10,000
                  </p>
                </div>
              </div>

              {/* Character */}
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col h-[353px] items-center justify-center relative rounded-[40px] shrink-0 w-[343px]">
                  <div className="content-stretch flex gap-[40px] h-[335px] items-center justify-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[278px]">
                      <div className="h-[296px] relative shrink-0 w-[231px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute h-[120.48%] left-[-29.23%] max-w-none top-[-7.53%] w-[153.85%]"
                            src={imgImage316}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Icons */}
              <div className="content-stretch flex items-end justify-between relative shrink-0 w-[343px]">
                <div className="flex flex-row items-end self-stretch">
                  <button

                    className="content-stretch flex flex-col h-full items-end relative shrink-0 w-[63px]"
                  >
                    <div className="aspect-[1024/1024] relative shrink-0 w-full">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src={imgFace}
                      />
                    </div>
                    <p className="font-pretendard font-medium h-[16px] leading-[22px] not-italic relative shrink-0 text-[#515151] text-[14px] text-center w-full">
                      얼굴
                    </p>
                  </button>
                </div>
                <button

                  className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[65px]"
                >
                  <div className="aspect-[1024/1024] relative shrink-0 w-full">
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                      src={imgFashion}
                    />
                  </div>
                  <p className="font-pretendard font-medium h-[16px] leading-none not-italic relative shrink-0 text-[#515151] text-[14px] text-center w-full">
                    패션
                  </p>
                </button>
                <div className="flex flex-row items-end self-stretch">
                  <button

                    className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[65px]"
                  >
                    <div className="aspect-[1024/1024] relative shrink-0 w-full">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src={imgRoom}
                      />
                    </div>
                    <p className="font-pretendard font-medium h-[16px] leading-none not-italic relative shrink-0 text-[#515151] text-[14px] text-center w-full">
                      룸
                    </p>
                  </button>
                </div>
                <div className="flex flex-row items-end self-stretch">
                  <button
                    className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[65px]"
                  >
                    <div className="aspect-[1024/1024] relative shrink-0 w-full">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src={imgBadge}
                      />
                    </div>
                    <p className="font-pretendard font-medium h-[16px] leading-none not-italic relative shrink-0 text-[#515151] text-[14px] text-center w-full">
                      배지
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </PullToRefresh>
        <Bottom />
      </div>
    </div>
  );
}
