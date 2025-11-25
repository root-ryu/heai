'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Top, Bottom } from './Layout';
import svgPaths from '../imports/svg-067ap2oqb0';

// 이미지 경로 상수
const imgPrize = '/33ab7c693a25e5323849382d99358c731c496f60.png';
const imgChatGptImage20258190355483 =
  '/0c2337b132ae6eef0b6ec3e90e4acf02d4ac292f.png';
const imgImage512 = '/ffe30871b964849eea21498f341a536a18d0afa4.png';
const img = '/0f13c32b2c92e38b0363c4670e1548962d386bd0.png';
const imgChatGptImage202511180346271 =
  '/1d07edb02029289dc0db532232a0a32be74b0ba7.png';
const imgImage1487 = '/d274f02ee1b28906991feeafdec500a2ca07fa69.png';
const imgImage1493 = '/f6c5b0201726286d86fe4ac07027023e0d758d4b.png';
const imgAs2 = '/85e49271a83665b87d03b134a1fd3bc5612a77b5.png';
const imgD1Ab8437258E4F5D9609F294541080A31 =
  '/b083f23c756789098edb8ed36f219098ed33b8ca.png';
const imgChatGptImage202511180309341 =
  '/093df2697a767b1e891b0eaa5bc949cbbac3c388.png';
const img336584700 = '/7ead42acac65dca5bdba700634d9e214cb5b6134.png';
const imgEye12 = '/532303d6c8033a0d1a7fe404f94ac83b8cb9ed53.png';

export default function MainPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [routines, setRoutines] = useState({
    water: true,
    meditation: false,
    sleep: false,
  });
  const [selectedDate, setSelectedDate] = useState(13);
  const [percentage, setPercentage] = useState(82);

  const toggleRoutine = (routine: 'water' | 'meditation' | 'sleep') => {
    setRoutines((prev) => {
      const newValue = !prev[routine];
      // Increase percentage by 1 if checked, decrease by 1 if unchecked
      setPercentage((current) => (newValue ? current + 1 : current - 1));
      return { ...prev, [routine]: newValue };
    });
  };

  return (
    <div className="bg-neutral-50 flex flex-col items-center relative w-full h-full overflow-hidden">
      {/* Top Status Bar */}
      <Top />

      {/* Inner Content */}
      <Inner
        router={router}
        routines={routines}
        toggleRoutine={toggleRoutine}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        percentage={percentage}
      />

      {/* Bottom Navigation */}
      <Bottom />
    </div>
  );
}

function Inner({
  router,
  routines,
  toggleRoutine,
  selectedDate,
  setSelectedDate,
  percentage,
}: {
  router: ReturnType<typeof useRouter>;
  routines: { water: boolean; meditation: boolean; sleep: boolean };
  toggleRoutine: (routine: 'water' | 'meditation' | 'sleep') => void;
  selectedDate: number;
  setSelectedDate: (date: number) => void;
  percentage: number;
}) {
  return (
    <div className="flex flex-col overflow-y-auto w-full scrollbar-hide pb-[120px]">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="box-border content-stretch flex flex-col gap-[40px] items-center justify-center overflow-clip px-0 py-[20px] w-full">
        {/* Date & Character Section */}
        <DateSection
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Routine Todolist */}
        <Todolist
          routines={routines}
          toggleRoutine={toggleRoutine}
          onAddRoutine={() => router.push('/routine')}
          percentage={percentage}
        />

        {/* Weight & Item Cards */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[343px]">
          <WeightCard onClick={() => router.push('/weight')} />
          <ItemCard />
        </div>

        {/* Sleep Record */}
        <SleepCard onClick={() => router.push('/sleep')} />

        {/* Steps Counter */}
        <StepsCard onClick={() => router.push('/steps')} />

        {/* Community Banner */}
        <Banner onClick={() => router.push('/ranking')} />
      </div>
    </div>
  );
}

function DateSection({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: number;
  setSelectedDate: (date: number) => void;
}) {
  const router = useRouter();

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center overflow-clip relative rounded-[10px] shrink-0 w-[343px]">
      <ConBox
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        router={router}
      />
      <CImg />
    </div>
  );
}

function ConBox({
  selectedDate,
  setSelectedDate,
  router,
}: {
  selectedDate: number;
  setSelectedDate: (date: number) => void;
  router: ReturnType<typeof useRouter>;
}) {
  return (
    <div className="bg-[#dfe5ff] relative rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <LvIcon router={router} />
          <Today
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
}

function LvIcon({ router }: { router: ReturnType<typeof useRouter> }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
              src={imgPrize}
            />
          </div>
          <p
            className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#0c0c0c] text-[16px] text-center text-nowrap whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Lv.3
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="bg-white h-[16px] overflow-clip relative rounded-[10px] shrink-0 w-[186px]">
            {/* 10 segment markers */}
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-[#f0f0f0] h-full w-[1px] top-0"
                style={{ left: `${(i + 1) * 10}%` }}
              />
            ))}
            {/* Animated progress bar - fills to 80% (8/10) */}
            <motion.div
              className="absolute bg-[#5a54fa] left-0 h-[18px] rounded-[10px] top-[-1px]"
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            />
          </div>
          <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[calc(50%-0.5px)] not-italic text-[12px] text-[rgba(12,12,12,0.24)] text-center text-nowrap top-[calc(50%-8px)] translate-x-[-50%] whitespace-pre">
            8 / 10
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
        <button
          onClick={() => router.push('/calendar')}
          className="relative shrink-0 size-[26px] cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 26 26"
          >
            <g id="top">
              <path
                d={svgPaths.pb14e400}
                id="Icon"
                stroke="var(--stroke-0, #5A54FA)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </button>
        <button
          onClick={() => router.push('/notifications')}
          className="relative shrink-0 size-[26px] cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 26 26"
          >
            <g id="top">
              <path
                d={svgPaths.p3392ee00}
                id="Icon"
                stroke="var(--stroke-0, #5A54FA)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

function Today({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: number;
  setSelectedDate: (date: number) => void;
}) {
  // Calculate surrounding dates (3 before and 3 after)
  const surroundingDates = [
    selectedDate - 3,
    selectedDate - 2,
    selectedDate - 1,
    selectedDate,
    selectedDate + 1,
    selectedDate + 2,
    selectedDate + 3,
  ];

  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[8px] relative shrink-0 w-full">
      {surroundingDates.map((date, index) =>
        index === 3 ? (
          <div
            key={date}
            className="bg-[#5a54fa] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[47px] h-[57px]"
          >
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center text-white">
              <p
                className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] translate-y-[1px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Today
              </p>
              <p className="font-['Pretendard:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px]">
                {date}
              </p>
            </div>
          </div>
        ) : (
          <DatePill
            key={date}
            number={date.toString()}
            onClick={() => setSelectedDate(date)}
          />
        )
      )}
    </div>
  );
}

function DatePill({
  number,
  onClick,
}: {
  number: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-[rgba(255,255,255,0.5)] box-border content-stretch flex items-center justify-center overflow-clip relative rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-[34px] h-[30px] ${
        onClick ? 'cursor-pointer hover:bg-white transition-colors' : ''
      }`}
    >
      <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#dddddd] text-[14px] text-center text-nowrap whitespace-pre">
        {number}
      </p>
    </div>
  );
}

function CImg() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      {/* Main Character - No animation, static position */}
      <div className="[grid-area:1_/_1] h-[251px] ml-[13px] mt-0 relative w-[205px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[170.65%] left-[-19.88%] max-w-none top-[-31.45%] w-[139.16%]"
            src={imgChatGptImage20258190355483}
          />
        </div>
      </div>

      {/* Cat - No animation, static position */}
      <div className="[grid-area:1_/_1] ml-[153px] mt-[169px] relative size-[91px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgImage512}
        />
      </div>

      {/* Sparkles with scale animation - ONLY these have animation */}
      <motion.div
        className="[grid-area:1_/_1] h-[25.002px] ml-[181px] mt-[20.38px] relative w-[20px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 25"
        >
          <path
            d={svgPaths.p1882ad00}
            fill="var(--fill-0, #FFB54D)"
            id="Vector"
          />
        </svg>
      </motion.div>

      <motion.div
        className="[grid-area:1_/_1] h-[34.786px] ml-0 mt-[47.56px] relative w-[30px]"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 30 35"
        >
          <path
            d={svgPaths.pcbe9500}
            fill="var(--fill-0, #FFB54D)"
            id="Vector"
          />
        </svg>
      </motion.div>

      <motion.div
        className="[grid-area:1_/_1] h-[19.567px] ml-[200px] mt-[132.87px] relative w-[16px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 20"
        >
          <path
            d={svgPaths.pa5f0380}
            fill="var(--fill-0, #FFB54D)"
            id="Vector"
          />
        </svg>
      </motion.div>
    </div>
  );
}

interface TodolistProps {
  routines: {
    water: boolean;
    meditation: boolean;
    sleep: boolean;
  };
  toggleRoutine: (routine: 'water' | 'meditation' | 'sleep') => void;
  onAddRoutine: () => void;
  percentage: number;
}

function Todolist({
  routines,
  toggleRoutine,
  onAddRoutine,
  percentage,
}: TodolistProps) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[20px] relative rounded-[10px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[343px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap">
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#a4a4a4] text-[18px]">
            <p className="leading-[26px] text-nowrap whitespace-pre">
              Today 완료한 루틴 50개
            </p>
          </div>
          <p className="font-['Pretendard:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#5fb8e1] text-[30px] whitespace-pre">
            {percentage}%
          </p>
        </div>

        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <RoutineItem
            icon={img}
            label="물 마시기"
            checked={routines.water}
            onClick={() => toggleRoutine('water')}
          />
          <RoutineItem
            icon={imgChatGptImage202511180346271}
            label="명상"
            checked={routines.meditation}
            onClick={() => toggleRoutine('meditation')}
          />
          <RoutineItem
            icon={imgImage1487}
            label="잠자기"
            checked={routines.sleep}
            onClick={() => toggleRoutine('sleep')}
          />
        </div>

        <div className="absolute h-[74px] right-[-6px] top-[-6px] w-[96px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 96 74"
          >
            <path
              d={svgPaths.p3c7b00}
              fill="var(--fill-0, black)"
              fillOpacity="0.03"
              id="Vector"
            />
          </svg>
        </div>

        <button
          onClick={onAddRoutine}
          className="[text-underline-position:from-font] decoration-solid font-['Pretendard:Regular',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(12,12,12,0.53)] text-right underline w-[min-content] cursor-pointer hover:text-[rgba(12,12,12,0.8)] transition-colors"
        >
          + 새 루틴 추가
        </button>
      </div>
    </div>
  );
}

interface RoutineItemProps {
  icon: string;
  label: string;
  checked: boolean;
  onClick: () => void;
}

function RoutineItem({ icon, label, checked, onClick }: RoutineItemProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[4px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[30px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={icon}
            />
          </div>
          <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0c0c0c] text-[16px] text-center text-nowrap whitespace-pre">
            {label}
          </p>
        </div>

        <button
          onClick={onClick}
          className={`${
            checked ? 'bg-[#5a54fa]' : 'bg-white'
          } h-[21px] relative rounded-[5px] shrink-0 w-[20px] cursor-pointer transition-colors`}
        >
          <div className="h-[21px] overflow-clip relative rounded-[inherit] w-[20px]">
            {checked && (
              <div className="absolute left-0 size-[20px] top-0">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 20"
                >
                  <g id="check">
                    <path
                      d={svgPaths.p32ddfd00}
                      id="Vector"
                      stroke="var(--stroke-0, white)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
          <div
            aria-hidden="true"
            className={`absolute border-2 ${
              checked ? 'border-[#5a54fa]' : 'border-[#e6e6e6]'
            } border-solid inset-0 pointer-events-none rounded-[5px]`}
          />
        </button>
      </div>
    </div>
  );
}

function WeightCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white box-border content-stretch flex flex-col gap-[9px] h-[208px] items-center justify-center overflow-clip relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-[168px] cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="absolute h-[208px] left-[-19.5px] top-0 w-[207px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgImage1493}
        />
      </div>
      <div className="absolute bg-[#bae6fa] box-border content-stretch flex flex-col gap-[10px] h-[74px] items-center justify-center left-1/2 px-[8px] py-[4px] rounded-[10px] top-[calc(50%+17px)] translate-x-[-50%] translate-y-[-50%] w-[102px]">
        <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <InfoRow label="Height" value="150cm" />
            <InfoRow label="Weight" value="100kg" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex font-['Pretendard:Light',sans-serif] gap-[7px] items-end justify-end leading-[normal] left-[17.5px] not-italic text-[#7c7c7c] text-[14px] text-nowrap top-[186px] w-[133px] whitespace-pre">
        <p className="relative shrink-0">목표체중</p>
        <p className="relative shrink-0">50 kg</p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[4px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#acacac] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#447fb1] text-[13px] text-center text-nowrap whitespace-pre">
        {label}
      </p>
      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#7fa3c2] text-[9px] text-center text-nowrap whitespace-pre">
          {value}
        </p>
      </div>
    </div>
  );
}

function ItemCard() {
  return (
    <div className="bg-[#241e1e] h-[208px] overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] shrink-0 w-[168px]">
      <div className="absolute h-[62px] left-[7px] top-[60px] w-[80px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 62"
        >
          <path
            d={svgPaths.p2fb24780}
            fill="var(--fill-0, #FFF4F4)"
            fillOpacity="0.03"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[87px] top-[106px] w-[80px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 62"
        >
          <path
            d={svgPaths.p2fb24780}
            fill="var(--fill-0, #FFF4F4)"
            fillOpacity="0.03"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[4px] top-[172px] w-[80px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 62"
        >
          <path
            d={svgPaths.p2fb24780}
            fill="var(--fill-0, #FFF4F4)"
            fillOpacity="0.03"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[87px] top-[5px] w-[80px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 62"
        >
          <path
            d={svgPaths.p2fb24780}
            fill="var(--fill-0, #FFF4F4)"
            fillOpacity="0.03"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[calc(50%-0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[133px]">
        <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full">
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[16px] text-[gainsboro] w-full">
            <p className="leading-[16px]">다음 아이템 해금까지</p>
          </div>
          <p className="font-['Pretendard:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#dfe5ff] text-[24px] w-full">
            89%
          </p>
        </div>
        <div className="h-[106px] relative shrink-0 w-[103px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-90 pointer-events-none size-full"
            src={imgAs2}
          />
        </div>
      </div>
    </div>
  );
}

function SleepCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#110f3b] h-[120px] overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] shrink-0 w-[343px] cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="absolute content-stretch flex gap-[40px] items-center left-1/2 top-[2px] translate-x-[-50%]">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
            수면 기록
          </p>
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-white w-[min-content]">
            <p className="leading-[16px]">평균 수면 </p>
          </div>
          <p
            className="font-['Roboto:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#3baa5c] text-[0px] text-nowrap whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span className="font-['Pretendard:Bold',sans-serif] leading-[32px] text-[#4c94f0] text-[31px]">
              7
            </span>
            <span className="font-['Pretendard:Medium',sans-serif] leading-[16px] text-[19px] text-white">
              시간
            </span>
            <span className="font-['Pretendard:Medium',sans-serif] leading-[16px] text-[19px]">
              {' '}
            </span>
            <span className="font-['Pretendard:Bold',sans-serif] leading-[32px] text-[#4c94f0] text-[31px]">
              15
            </span>
            <span className="font-['Pretendard:Medium',sans-serif] leading-[16px] text-[19px] text-white">
              분
            </span>
          </p>
        </div>
        <div className="relative shrink-0 size-[115px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgD1Ab8437258E4F5D9609F294541080A31}
          />
        </div>
      </div>
      <div className="absolute inset-[17.04%_10.79%_64.44%_83.09%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 23"
        >
          <path
            d={svgPaths.p7fe0500}
            fill="var(--fill-0, #FFB54D)"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute inset-[28.89%_6.41%_57.78%_89.21%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 16"
        >
          <path
            d={svgPaths.p1a70b00}
            fill="var(--fill-0, #FFB54D)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function StepsCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white h-[247px] overflow-clip relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[342px] cursor-pointer hover:shadow-lg transition-shadow rounded-[10px]"
    >
      {/* Frame6 - Title and Stats */}
      <div className="absolute content-stretch flex flex-col items-start left-[21px] top-[21px] w-[120px]">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[79px]">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-none not-italic relative shrink-0 text-[#02010e] text-[18px] text-nowrap whitespace-pre">
            만보기
          </p>
          <div className="content-stretch flex font-['Pretendard:Regular',sans-serif] gap-[2px] h-[18px] items-center justify-center leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(2,1,14,0.5)] text-center text-nowrap w-full whitespace-pre">
            <p className="relative shrink-0">35Kcal</p>
            <p className="relative shrink-0">2h</p>
            <p className="relative shrink-0">3km</p>
          </div>
        </div>
        <div className="leading-none text-[#447fb1]">
          <span className="font-['Pretendard:Bold',sans-serif] text-[32px]">
            7,123
          </span>
          <span className="font-['Pretendard:Medium',sans-serif] text-[20px]">
            걸음
          </span>
        </div>
      </div>

      {/* Graph Component */}
      <div className="absolute contents left-[calc(50%-0.5px)] top-[114px] translate-x-[-50%]">
        {/* Horizontal baseline */}
        <div className="absolute h-0 left-[calc(50%-11px)] top-[221px] translate-x-[-50%] w-[296px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 296 1"
            >
              <line
                stroke="var(--stroke-0, #EEEEEE)"
                x2="296"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>

        {/* Time labels */}
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-none left-[166px] not-italic text-[#a8a8a8] text-[10px] text-nowrap top-[226px] whitespace-pre">
          오후 12시
        </p>
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-none left-[16px] not-italic text-[#a8a8a8] text-[10px] text-nowrap top-[226px] whitespace-pre">
          오전 12시
        </p>

        {/* Y-axis labels */}
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[173px] whitespace-pre">
          1,500
        </p>
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[216px] whitespace-pre">
          0
        </p>
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-none left-[313px] not-italic text-[#a8a8a8] text-[6px] text-nowrap top-[114px] whitespace-pre">
          3,000
        </p>

        {/* Vertical grid lines */}
        <div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%-10px)] top-[220px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]"
          style={
            {
              '--transform-inner-width': '16',
              '--transform-inner-height': '0',
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[16px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 1"
                >
                  <line
                    stroke="var(--stroke-0, #EEEEEE)"
                    x2="16"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%-159px)] top-[221px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]"
          style={
            {
              '--transform-inner-width': '15',
              '--transform-inner-height': '0',
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[15px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 15 1"
                >
                  <line
                    stroke="var(--stroke-0, #EEEEEE)"
                    x2="15"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%-83px)] top-[220px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]"
          style={
            {
              '--transform-inner-width': '16',
              '--transform-inner-height': '0',
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[16px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 1"
                >
                  <line
                    stroke="var(--stroke-0, #EEEEEE)"
                    x2="16"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%+136px)] top-[114px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]"
          style={
            {
              '--transform-inner-width': '107',
              '--transform-inner-height': '0',
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[107px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 107 1"
                >
                  <line
                    stroke="var(--stroke-0, #EEEEEE)"
                    x2="107"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%+63px)] top-[220px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]"
          style={
            {
              '--transform-inner-width': '16',
              '--transform-inner-height': '0',
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[16px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 1"
                >
                  <line
                    stroke="var(--stroke-0, #EEEEEE)"
                    x2="16"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Graph bars */}
        <div className="absolute bg-[#447fb1] h-[106px] left-[151px] top-[114px] w-[10px]" />
        <div className="absolute bg-[#447fb1] h-[66px] left-[135px] top-[154px] w-[10px]" />
        <div className="absolute bg-[#447fb1] h-[15px] left-[119px] top-[205px] w-[10px]" />
        <div className="absolute bg-[#447fb1] h-[35px] left-[167px] top-[185px] w-[10px]" />
        <div className="absolute bg-[#447fb1] h-[6px] left-[221px] top-[214px] w-[10px]" />
      </div>

      {/* Character Image */}
      <div
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.1663222461938858)+(var(--transform-inner-height)*0.9860714673995972)))] items-center justify-center left-[218px] top-[-3px] w-[calc(1px*((var(--transform-inner-height)*0.1663222461938858)+(var(--transform-inner-width)*0.9860714673995972)))]"
        style={
          {
            '--transform-inner-width': '104',
            '--transform-inner-height': '104',
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[9.574deg]">
          <div className="relative size-[104px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgChatGptImage202511180309341}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Banner({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[rgba(160,157,251,0.81)] h-[135px] overflow-clip relative shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[375px] cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="absolute h-[62px] left-[302px] top-[49px] w-[80px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 62"
        >
          <path
            d={svgPaths.p2fb24780}
            fill="var(--fill-0, #FFF4F4)"
            fillOpacity="0.1"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[219px] top-[-4px] w-[80px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 62"
        >
          <path
            d={svgPaths.p2fb24780}
            fill="var(--fill-0, #FFF4F4)"
            fillOpacity="0.1"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute h-[62px] left-[172px] top-[80px] w-[80px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 62"
        >
          <path
            d={svgPaths.p2fb24780}
            fill="var(--fill-0, #FFF4F4)"
            fillOpacity="0.1"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[24px] not-italic top-[calc(50%+0.5px)] translate-y-[-50%]">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-nowrap">
          <p className="font-['Pretendard:Regular',sans-serif] leading-none relative shrink-0 text-[#2e2e2e] text-[12px] whitespace-pre">
            이달의 막시무스는 누구?
          </p>
          <div className="font-['Pretendard:Bold',sans-serif] leading-[1.2] relative shrink-0 text-[0px] text-[25px] text-white whitespace-pre">
            <p className="mb-0">
              <span className="font-['Pretendard:ExtraBold',sans-serif]">
                우승자
              </span>
              <span className="font-['Pretendard:SemiBold',sans-serif]">
                에게
              </span>
            </p>
            <p className="font-['Pretendard:SemiBold',sans-serif]">
              리워드를 드립니다!!
            </p>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#5a54fa] text-[10px] w-[min-content]">
          <p className="[text-underline-position:from-font] decoration-solid leading-[16px] underline">
            지금 당장 내 하트수 보러가기
          </p>
        </div>
      </div>
      <div
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025246357545256615)+(var(--transform-inner-height)*0.9996812343597412)))] items-center justify-center left-[133.82px] top-[-61.18px] w-[calc(1px*((var(--transform-inner-height)*0.025246357545256615)+(var(--transform-inner-width)*0.9996812343597412)))]"
        style={
          {
            '--transform-inner-width': '274.984375',
            '--transform-inner-height': '274.984375',
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[1.447deg]">
          <div className="relative size-[274.994px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={img336584700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
