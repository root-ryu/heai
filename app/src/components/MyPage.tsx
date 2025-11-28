'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Top, Bottom } from './Layout';
import svgPaths from '../imports/svg-czxy8mittk';
import { img2KLine, imgDone } from '../imports/svg-ivbnd';
import { imgVector as imgVectorArrow } from '../imports/svg-8aral';
import { getUserNickname } from '../utils/nickname';

// Image paths
const profileImage = '/587ee515c750bd68bb461300b07b5c4f101bc28b.png';
const premiumCharacter = '/4a456d86592b11f3124e9e29631e30a46010d570.png';
const premiumCrown = '/ffe30871b964849eea21498f341a536a18d0afa4.png';
const vectorStar = '/Vector.png';
const vectorStar1 = '/Vector-1.png';
const cameraIcon = '/camera.png';
const editIcon = '/edit-3.png';
const settingsIcon = '/seticon.png';
const badgeStar = '/3d4da97355c8d7deb8447b536e3fd3c643e11b08.png';
const badgeChat = '/26cda04c5923d1cc3e7f6f9ae6250e521115ed3e.png';
const iconRunning = '/c3c906488263ada726ed24a6f7c17d8e73a8637b.png';
const iconCycling = '/ed5c8865480b0b1d614ed28f465a5a18d5adc0ad.png';
const iconYoga = '/d96cdf5a14f316085b9ec40de1b6c0bcc4683967.png';
const iconOthers = '/e6a38d3bd5fad0a2e488ffc45ba5ab8a4a8aef2c.png';
const eyeLogo = '/eyelogo.png';

export default function MyPage() {
  // 1. 초기값은 빈 문자열로 설정 (서버 빌드 시 안전함)
  const [nickname, setNickname] = useState('');
  const router = useRouter();

  useEffect(() => {
    // 2. 브라우저가 실행된 후(Mount) 안전하게 로컬스토리지 접근
    const storedNickname = getUserNickname();
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col">
        <Top />

        {/* Header */}
        <div className="bg-white h-[48px] overflow-clip relative shrink-0 w-full">
          <div className="absolute content-stretch flex items-center justify-between left-[7px] top-[9px] w-[calc(100%-14px)]">
            <div className="shrink-0 size-[30px]" />
            <button
              onClick={() => router.push('/settings')}
              className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            >
              <div className="relative shrink-0 size-[30px]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={settingsIcon}
                />
              </div>
            </button>
          </div>
          <p className="absolute font-pretendard font-semibold leading-[24px] left-[50%] not-italic text-[#02010e] text-[20px] text-center text-nowrap top-[50%] translate-x-[-50%] translate-y-[-50%]">
            마이페이지
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
          {/* Profile Section */}
          <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-0 py-[28px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[343px]">
              {/* Profile Image */}
              <div className="bg-white border-[#9abaff] border-[3px] border-solid box-border content-stretch flex gap-[10px] items-center relative rounded-[200px] shrink-0 size-[90px]">
                <div className="aspect-[593/593] basis-0 grow min-h-px min-w-px relative shrink-0">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={profileImage}
                  />
                </div>
                {/* Camera Button */}
                <div className="absolute bg-[#e1eafe] bottom-0 box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[7px] right-[-4.5px] rounded-[50px] size-[32px]">
                  <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={cameraIcon}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                {/* Level & Badge */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[#ebeaff] h-[25px] relative rounded-[10px] shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[25px] items-center justify-center px-[8px] py-[2px] relative">
                      <p className="font-pretendard font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre leading-none mt-[1px]">
                        Lv. 15
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#ebeaff] h-[25px] relative rounded-[10px] shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[25px] items-center justify-center px-[8px] py-[2px] relative">
                      <p className="font-pretendard font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre leading-none mt-[1px]">
                        루틴 마스터
                      </p>
                    </div>
                  </div>
                </div>

                {/* Name & Edit */}
                <div className="content-stretch flex gap-[5px] items-start relative shrink-0 w-full">
                  <p className="font-pretendard font-semibold leading-[20px] not-italic relative shrink-0 text-[#110c11] text-[18px] text-nowrap whitespace-pre">
                    {/* [수정 완료] 함수 직접 호출을 지우고 상태 변수로 변경 */}
                    {nickname}
                  </p>
                  <div className="relative shrink-0 size-[20px]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={editIcon}
                    />
                  </div>
                </div>

                {/* Height & Weight */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-montserrat font-medium leading-none relative shrink-0 text-[#110c11] text-[0px] text-nowrap whitespace-pre">
                    <span className="text-[18px]">180</span>
                    <span className="text-[16px] text-[rgba(17,12,17,0.75)]">
                      cm
                    </span>
                  </p>
                  <div className="bg-[rgba(17,12,17,0.25)] rounded-[2px] shrink-0 size-[2px]" />
                  <p className="font-montserrat font-medium leading-none relative shrink-0 text-[#110c11] text-[0px] text-center text-nowrap whitespace-pre">
                    <span className="text-[18px]">82</span>
                    <span className="text-[16px] text-[rgba(17,12,17,0.75)]">
                      kg
                    </span>
                  </p>
                </div>

                {/* Bio */}
                <p className="font-pretendard font-medium leading-[21px] not-italic relative shrink-0 text-[#888888] text-[12px] text-nowrap whitespace-pre">
                  설빙 사주세용
                </p>
              </div>
            </div>
          </div>

          {/* Premium Banner */}
          <div className="bg-[#b5cdff] h-[138px] overflow-clip relative shrink-0 w-full cursor-pointer hover:bg-[#a5bdff] transition-colors">
            <div className="absolute h-[114px] right-[8px] top-[2px] w-[135px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[248.54%] left-[-17.76%] max-w-none top-[-123.14%] w-[139.89%]"
                  src={premiumCharacter}
                />
              </div>
            </div>
            <p className="absolute font-pretendard font-semibold leading-[24px] left-[32px] not-italic text-[#f8fbff] text-[14px] top-[90px] w-[223px]">
              광고 없이, 무제한 AI 루틴 관리까지!
            </p>
            <div className="absolute font-pretendard font-extrabold leading-[25px] left-[32px] not-italic text-[24px] text-white top-[34px] w-[223px]">
              <p className="mb-0">
                <span className="text-[#5a54fa]">프리미엄</span>
                <span>으로 더 </span>
              </p>
              <p>자유롭게 루틴하기 </p>
            </div>
            <div className="absolute left-[309px] size-[52px] top-[76px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={premiumCrown}
              />
            </div>
            <div className="absolute inset-[11.97%_90.4%_68.31%_3.2%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={vectorStar}
              />
            </div>
            <div className="absolute inset-[11.97%_88.27%_78.17%_8.53%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={vectorStar1}
              />
            </div>
          </div>

          {/* Recent Badges Section */}
          <div className="bg-white box-border content-stretch flex flex-col gap-[15.984px] items-center justify-center px-4 py-[20px] relative shrink-0 w-full mt-[20px]">
            {/* Section Title */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[343px]">
              <p className="font-pretendard font-semibold leading-[normal] not-italic relative shrink-0 text-[#040415] text-[18px] text-nowrap whitespace-pre">
                최근 획득 뱃지{' '}
              </p>
              <button className="h-[9.998px] relative shrink-0 w-[4.999px] cursor-pointer hover:opacity-70 transition-opacity">
                <div className="absolute inset-[-7.5%_-15%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgVectorArrow}
                  />
                </div>
              </button>
            </div>

            {/* Badges */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[343px] gap-[8px]">
              {/* Badge 1 */}
              <div className="bg-[#fbfbfb] box-border content-stretch flex flex-col gap-[8px] h-[107px] items-center justify-center p-[10px] relative rounded-[14px] flex-1">
                <div className="h-[36px] relative shrink-0 w-[33px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute h-[455.11%] left-[-9.88%] max-w-none top-[-323.97%] w-[494.69%]"
                      src={badgeStar}
                    />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center w-full">
                  <p className="font-pretendard font-bold leading-[16.5px] not-italic relative shrink-0 text-[#151522] text-[14px]">
                    챌린지 마스터
                  </p>
                  <div className="font-pretendard leading-[13.5px] relative shrink-0 text-[#686873] text-[12px]">
                    <p className="mb-0">10개 챌린지 </p>
                    <p>완료</p>
                  </div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="bg-[#fbfbfb] box-border content-stretch flex flex-col gap-[8px] h-[107px] items-center justify-center p-[10px] relative rounded-[14px] flex-1">
                <div className="h-[36px] relative shrink-0 w-[33px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute h-[457.14%] left-[-389.92%] max-w-none top-[-219.19%] w-[494.69%]"
                      src={badgeStar}
                    />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center w-full">
                  <p className="font-pretendard font-bold leading-[16.5px] not-italic relative shrink-0 text-[#151522] text-[14px]">
                    성실한 글 작성
                  </p>
                  <div className="font-pretendard leading-[13.5px] relative shrink-0 text-[#686873] text-[12px]">
                    <p className="mb-0">게시물 100개 </p>
                    <p>달성</p>
                  </div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="bg-[#fbfbfb] box-border content-stretch flex flex-col gap-[8px] h-[107px] items-center justify-center p-[10px] relative rounded-[14px] flex-1">
                <div className="h-[34px] relative shrink-0 w-[33px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute h-[146.57%] left-0 max-w-none top-[-21.19%] w-full"
                      src={badgeChat}
                    />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-center w-full">
                  <p className="font-pretendard font-bold leading-[16.5px] not-italic relative shrink-0 text-[#151522] text-[14px]">
                    활발한 소통
                  </p>
                  <div className="font-pretendard leading-[13.5px] relative shrink-0 text-[#686873] text-[12px]">
                    <p className="mb-0">댓글 50개 </p>
                    <p>작성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Routine Status */}
          <WeeklyRoutineStatus />

          {/* Routine Streak */}
          <RoutineStreakChart />

          {/* Bottom Menu */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[343px] mx-auto mt-[20px] mb-[20px]">
            {/* Bookmark */}
            <button
              onClick={() => router.push('/bookmark')}
              className="box-border content-stretch flex h-[54px] items-center justify-between pb-0 pt-px px-[20px] relative shrink-0 w-full hover:bg-[#f8f8f8] transition-colors"
            >
              <div
                aria-hidden="true"
                className="absolute border-[#dddddd] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
              />
              <p className="font-pretendard font-semibold leading-[26px] not-italic relative shrink-0 text-[#151522] text-[16px] text-nowrap">
                북마크
              </p>
              <div className="h-[9.998px] relative shrink-0 w-[4.999px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 7 12"
                >
                  <path
                    d={svgPaths.p31233cc0}
                    stroke="#999999"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66639"
                  />
                </svg>
              </div>
            </button>

            {/* Character History */}
            <button className="box-border content-stretch flex h-[56px] items-center justify-between px-[20px] py-px relative shrink-0 w-full hover:bg-[#f8f8f8] transition-colors">
              <div
                aria-hidden="true"
                className="absolute border-[#dddddd] border-[1px_0px] border-solid inset-0 pointer-events-none"
              />
              <p className="font-pretendard font-semibold leading-[26px] not-italic relative shrink-0 text-[#151522] text-[16px] text-nowrap">
                내 캐릭터 성장 히스토리
              </p>
              <div className="h-[9.998px] relative shrink-0 w-[4.999px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 7 12"
                >
                  <path
                    d={svgPaths.p31233cc0}
                    stroke="#999999"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66639"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <Bottom />
      </div>
    </div>
  );
}

function WeeklyRoutineStatus() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center px-4 py-[20px] relative shrink-0 w-full mt-[20px]">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[343px]">
        <p className="font-pretendard font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(17,12,17,0.75)] text-nowrap text-right whitespace-pre">
          주간루틴 달성 현황
        </p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full max-w-[343px]">
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[16px] items-center ml-0 mt-0 relative w-full">
          {/* Running */}
          <RoutineRow
            icon={iconRunning}
            label="달리기"
            percentage={22}
            color="#ffc83d"
            width={54}
            iconStyle={{
              transform: 'rotate(180deg) scaleY(-1)',
              height: '326.11%',
              left: '-5.12%',
              top: '-216.34%',
              width: '321.52%',
            }}
          />
          {/* Cycling */}
          <RoutineRow
            icon={iconCycling}
            label="자전거"
            percentage={50}
            color="#9abaff"
            width={120}
            iconStyle={{
              height: '123.91%',
              left: '-11.19%',
              top: '-4.3%',
              width: '120%',
            }}
          />
          {/* Yoga */}
          <RoutineRow
            icon={iconYoga}
            label="요가"
            percentage={13}
            color="#ff6f61"
            width={30}
            iconStyle={{
              height: '122.9%',
              left: '-6.42%',
              top: '-11.76%',
              width: '117.98%',
            }}
          />
          {/* Others */}
          <RoutineRow
            icon={iconOthers}
            label="그외"
            percentage={15}
            color="#3baa5c"
            width={36}
            iconStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
          />
        </div>
      </div>
      <div className="absolute h-[74px] right-[4px] top-[4px] w-[96px] pointer-events-none">
        <img
          alt=""
          className="block max-w-none size-full object-contain"
          src={eyeLogo}
        />
      </div>
      <p className="[text-underline-position:from-font] decoration-solid font-pretendard leading-none w-full not-italic relative shrink-0 text-[12px] text-[rgba(12,12,12,0.53)] text-center underline cursor-pointer hover:text-[rgba(12,12,12,0.8)] transition-colors">
        + 새 루틴 추가
      </p>
    </div>
  );
}

function RoutineRow({
  icon,
  label,
  percentage,
  color,
  width,
  iconStyle,
}: {
  icon: string;
  label: string;
  percentage: number;
  color: string;
  width: number;
  iconStyle?: React.CSSProperties & {
    transform?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    objectPosition?: string;
  };
}) {
  const isRunning = label === '달리기';

  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full">
      <div className="border-r border-[#dcdcdc] box-border flex gap-[4px] items-start pl-0 pr-[10px] py-0 relative shrink-0 w-[80px]">
        <p
          className="font-pretendard font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(17,12,17,0.75)] text-nowrap text-right whitespace-pre"
          style={{
            width: label === '요가' || label === '그외' ? '37px' : 'auto',
          }}
        >
          {label}
        </p>
        <div className="flex items-center justify-center relative shrink-0">
          {isRunning ? (
            <div
              className="flex-none"
              style={{ transform: iconStyle?.transform || 'none' }}
            >
              <div className="relative size-[24px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute max-w-none"
                    style={{
                      height: iconStyle?.height,
                      left: iconStyle?.left,
                      top: iconStyle?.top,
                      width: iconStyle?.width,
                    }}
                    src={icon}
                  />
                </div>
              </div>
            </div>
          ) : label === '자전거' ? (
            <div className="h-[25px] relative shrink-0 w-[20px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute max-w-none"
                  style={{
                    height: iconStyle?.height,
                    left: iconStyle?.left,
                    top: iconStyle?.top,
                    width: iconStyle?.width,
                  }}
                  src={icon}
                />
              </div>
            </div>
          ) : label === '요가' ? (
            <div className="h-[24px] relative shrink-0 w-[25px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute max-w-none"
                  style={{
                    height: iconStyle?.height,
                    left: iconStyle?.left,
                    top: iconStyle?.top,
                    width: iconStyle?.width,
                  }}
                  src={icon}
                />
              </div>
            </div>
          ) : (
            <div className="relative shrink-0 size-[25px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none pointer-events-none size-full"
                style={{
                  objectFit: iconStyle?.objectFit,
                  objectPosition: iconStyle?.objectPosition,
                }}
                src={icon}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className="h-[8px] rounded-[1px] shrink-0"
        style={{ backgroundColor: color, width: `${width}px` }}
      />
      <p
        className="font-pretendard font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre"
        style={{ color }}
      >
        {percentage}%
      </p>
    </div>
  );
}

function RoutineStreakChart() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center px-4 py-[20px] relative shrink-0 w-full mt-[20px]">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[343px]">
        <p className="font-pretendard font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(17,12,17,0.75)] text-nowrap text-right whitespace-pre">
          루틴 연속 기록
        </p>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
          <p className="font-pretendard font-semibold leading-[32px] not-italic relative shrink-0 text-[#110c11] text-[20px] text-nowrap text-right whitespace-pre">
            35 day
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-[320px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          {/* Y-axis labels */}
          <p className="[grid-area:1_/_1] font-montserrat font-medium leading-[12px] ml-[26px] mt-[8px] opacity-75 relative text-[10px] text-[rgba(17,12,17,0.5)] text-nowrap text-right translate-x-[-100%] whitespace-pre">
            100%
          </p>
          <p className="[grid-area:1_/_1] font-montserrat font-medium leading-[12px] ml-[26px] mt-[104px] opacity-75 relative text-[10px] text-[rgba(17,12,17,0.5)] text-right translate-x-[-100%] w-[20px]">
            0
          </p>

          {/* Grid lines */}
          <div className="[grid-area:1_/_1] h-0 ml-[30px] mt-[14px] relative w-[296px]">
            <div className="absolute inset-[-0.13px_-0.04%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={img2KLine}
              />
            </div>
          </div>

          {/* 토요일 (토) */}
          <p className="[grid-area:1_/_1] font-pretendard font-medium leading-[16px] ml-[310px] mt-[118px] not-italic opacity-75 relative text-[#5a54fa] text-[14px] text-center translate-x-[-50%] w-[24px]">
            토
          </p>

          {/* 금요일 (금) */}
          <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-[250px] mt-[118px] relative">
            <div className="relative shrink-0 size-[16px]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgDone}
              />
            </div>
            <p className="font-noto font-bold leading-[16px] relative shrink-0 text-[#5a54fa] text-[14px] text-center w-[16px]">
              금
            </p>
          </div>
          <div className="[grid-area:1_/_1] bg-[#5a54fa] h-[110px] ml-[264px] mt-0 rounded-tl-[2px] rounded-tr-[2px] w-[12px]" />

          {/* 목요일 (목) */}
          <p className="[grid-area:1_/_1] font-pretendard font-medium leading-[16px] ml-[222px] mt-[118px] not-italic opacity-75 relative text-[#5a54fa] text-[14px] text-center translate-x-[-50%] w-[24px]">
            목
          </p>
          <div className="[grid-area:1_/_1] bg-[#5a54fa] h-[27px] ml-[216px] mt-[83px] opacity-75 rounded-tl-[2px] rounded-tr-[2px] w-[12px]" />

          {/* 수요일 (수) */}
          <p className="[grid-area:1_/_1] font-pretendard font-medium leading-[16px] ml-[178px] mt-[118px] not-italic opacity-75 relative text-[#5a54fa] text-[14px] text-center translate-x-[-50%] w-[24px]">
            수
          </p>
          <div className="[grid-area:1_/_1] bg-[#5a54fa] h-[45px] ml-[172px] mt-[65px] opacity-75 rounded-tl-[2px] rounded-tr-[2px] w-[12px]" />

          {/* 화요일 (화) */}
          <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-[118px] mt-[118px] opacity-75 relative">
            <div className="relative shrink-0 size-[16px]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgDone}
              />
            </div>
            <p className="font-noto font-medium leading-[16px] relative shrink-0 text-[#5a54fa] text-[14px] text-center w-[16px]">
              화
            </p>
          </div>
          <div className="[grid-area:1_/_1] bg-[#5a54fa] h-[98px] ml-[131px] mt-[12px] opacity-75 rounded-tl-[2px] rounded-tr-[2px] w-[12px]" />

          {/* 월요일 (월) */}
          <div className="[grid-area:1_/_1] box-border content-stretch flex items-start ml-[74px] mt-[118px] opacity-75 relative">
            <div className="relative shrink-0 size-[16px]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgDone}
              />
            </div>
            <p className="font-noto font-medium leading-[16px] relative shrink-0 text-[#5a54fa] text-[14px] text-center w-[16px]">
              월
            </p>
          </div>
          <div className="[grid-area:1_/_1] bg-[#5a54fa] h-[96px] ml-[87px] mt-[14px] opacity-75 rounded-tl-[2px] rounded-tr-[2px] w-[12px]" />

          {/* 일요일 (일) */}
          <p className="[grid-area:1_/_1] font-pretendard font-medium leading-[16px] ml-[46px] mt-[118px] not-italic opacity-75 relative text-[#5a54fa] text-[14px] text-center translate-x-[-50%] w-[24px]">
            일
          </p>
          <div className="[grid-area:1_/_1] bg-[#5a54fa] h-[72px] ml-[40px] mt-[38px] opacity-75 rounded-tl-[2px] rounded-tr-[2px] w-[12px]" />

          {/* 0 line */}
          <div className="[grid-area:1_/_1] h-0 ml-[30px] mt-[110px] relative w-[296px]">
            <div className="absolute inset-[-0.13px_-0.04%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={img2KLine}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}