import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Top, Bottom } from './Layout';
import svgPaths from "../imports/svg-8zbi8gr2se";

interface MenuItemProps {
  title: string;
  onClick?: () => void;
}

function MenuItem({ title, onClick }: MenuItemProps) {
  return (
    <button 
      onClick={onClick}
      className="bg-white w-full h-[60px] flex items-center justify-between px-[16px] border-b border-[#f0f0f0]"
    >
      <p className="font-['Pretendard:Regular',sans-serif] text-[16px] text-black">
        {title}
      </p>
      <ChevronRight className="w-[20px] h-[20px] text-[#AAAAAA]" />
    </button>
  );
}

export default function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-[375px] h-[812px] overflow-hidden">
      <Top />
      
      {/* Header */}
      <div className="bg-white w-full shrink-0">
        <div className="h-[48px] relative w-full flex items-center justify-center">
          <button 
            onClick={() => navigate(-1)}
            className="absolute left-[7px]"
          >
            <svg className="block w-[30px] h-[30px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d="M21 26L10 15L21 4" stroke="#5A54FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-[24px] text-[#02010e]">
            설정
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        <div className="pt-[20px]">
          {/* 계정 Section */}
          <div className="mb-[20px]">
            <div className="px-[16px] mb-[8px]">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#717182]">
                계정
              </p>
            </div>
            <MenuItem title="계정 정보" />
            <MenuItem title="비밀번호 변경" />
            <MenuItem title="로그아웃" onClick={() => console.log('로그아웃')} />
          </div>

          {/* 알림 Section */}
          <div className="mb-[20px]">
            <div className="px-[16px] mb-[8px]">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#717182]">
                알림
              </p>
            </div>
            <MenuItem title="알림 설정" />
            <MenuItem title="푸시 알림" />
          </div>

          {/* 서비스 Section */}
          <div className="mb-[20px]">
            <div className="px-[16px] mb-[8px]">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#717182]">
                서비스
              </p>
            </div>
            <MenuItem title="공지사항" />
            <MenuItem title="이벤트" />
            <MenuItem title="FAQ" />
            <MenuItem title="1:1 문의" />
          </div>

          {/* 정보 Section */}
          <div className="mb-[20px]">
            <div className="px-[16px] mb-[8px]">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#717182]">
                정보
              </p>
            </div>
            <MenuItem title="이용약관" />
            <MenuItem title="개인정보 처리방침" />
            <MenuItem title="오픈소스 라이선스" />
            <MenuItem title="버전 정보" />
          </div>

          {/* 기타 Section */}
          <div className="mb-[20px]">
            <div className="px-[16px] mb-[8px]">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#717182]">
                기타
              </p>
            </div>
            <MenuItem title="앱 평가하기" />
            <MenuItem title="친구 초대하기" />
            <MenuItem title="회원 탈퇴" />
          </div>
        </div>
      </div>

      <Bottom />
    </div>
  );
}
