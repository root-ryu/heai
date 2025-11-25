import { useNavigate } from 'react-router-dom';
import { Top, Bottom } from './Layout';
import { ArrowLeft } from 'lucide-react';
import svgPaths from "../imports/svg-zpvojqo964";
import img from "figma:asset/29730ee16b412ecb815a5ea38fef192f75fe4874.png";
import img175583051339328B855EeBc38424CB725B7550489330E2 from "figma:asset/6b226a363770f9043803e399e7053e80809c53f7.png";
import img1 from "figma:asset/fd2aa84c99d09e0c96625e3e4daa9607bd9c69bf.png";
import imgImage92 from "figma:asset/587ee515c750bd68bb461300b07b5c4f101bc28b.png";

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-50 flex flex-col items-center w-[375px] h-[812px] overflow-hidden">
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
            마이페이지
          </p>
          <button onClick={() => navigate('/settings')} className="absolute right-[16px]">
            <svg className="block w-[30px] h-[30px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d="M25 22.5H5M25 15H5M25 7.5H5" stroke="#5A54FA" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
        {/* Profile Image */}
        <div className="relative w-full flex justify-center pt-[80px]">
          <div className="bg-white overflow-clip rounded-[200px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] w-[251px] h-[251px]">
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px]">
              <img alt="막시무스" className="w-full h-full object-cover" src={imgImage92} />
            </div>
          </div>
          
          {/* Camera Button */}
          <button className="absolute bg-[#f0f0f0] rounded-[50px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2),0px_0px_16px_0px_rgba(0,0,0,0.12),0px_0px_12px_0px_rgba(0,0,0,0.14)] w-[55px] h-[55px] flex items-center justify-center" style={{ top: '262px', left: 'calc(50% + 63.5px)' }}>
            <svg className="w-[30px] h-[30px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d={svgPaths.p2995d200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2c805780} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Name */}
        <div className="text-center mt-[30px]">
          <p className="font-['Roboto:SemiBold','Noto_Sans_KR:Bold',sans-serif] font-semibold text-[20px] text-black">
            막시무스
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-[32px] mt-[50px] px-[36px]">
          {/* Calendar */}
          <button 
            onClick={() => navigate('/calendar')}
            className="bg-white rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] w-[80px] h-[80px] flex flex-col items-center justify-center"
          >
            <div className="w-[42px] h-[48px] mb-[2px]">
              <img alt="캘린더" className="w-full h-full object-cover" src={img} />
            </div>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-black">캘린더</p>
          </button>

          {/* Badge */}
          <button className="bg-white rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] w-[80px] h-[80px] flex flex-col items-center justify-center">
            <div className="w-[56px] h-[48px] mb-[2px]">
              <img alt="뱃지" className="w-full h-full object-contain" src={img175583051339328B855EeBc38424CB725B7550489330E2} />
            </div>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-black">뱃지</p>
          </button>

          {/* Notifications */}
          <button 
            onClick={() => navigate('/notifications')}
            className="bg-white rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] w-[80px] h-[80px] flex flex-col items-center justify-center"
          >
            <div className="w-[42px] h-[48px] mb-[2px]">
              <img alt="새소식" className="w-full h-full object-cover" src={img1} />
            </div>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-black">새소식</p>
          </button>
        </div>
      </div>

      <Bottom />
    </div>
  );
}