import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Top, Bottom } from '../components/Layout';
import CategoryTabs from '../components/community/CategoryTabs';
import svgPaths from "../imports/svg-qx51amnvwr";

function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate(-1)}
      className="block cursor-pointer relative shrink-0 size-[30px]"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g>
          <path d="M21 26L10 15L21 4" stroke="#5A54FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </button>
  );
}

function CompleteButton({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[12px] py-[4px] relative rounded-[50px] shrink-0 ${
        disabled ? 'bg-[#ebf2ff]' : 'bg-[#5a54fa]'
      }`}
    >
      <p className={`font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-nowrap whitespace-pre ${
        disabled ? 'text-[#cccccc]' : 'text-white'
      }`}>
        완료
      </p>
    </button>
  );
}

function EditIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M12 20H21" stroke="#CCCCCC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3f654a80} stroke="#CCCCCC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ImageIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p1cec7ff0} stroke="#686873" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d={svgPaths.p38772900} stroke="#686873" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d={svgPaths.p2cba2e00} stroke="#686873" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
        </g>
      </svg>
    </div>
  );
}

function VideoIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_87_872)">
          <path d={svgPaths.p14d24500} stroke="#686873" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d={svgPaths.p1d39b480} stroke="#686873" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d="M7.5 7.5H7.50833" stroke="#686873" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
          <path d="M12.5 7.5H12.5083" stroke="#686873" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66607" />
        </g>
        <defs>
          <clipPath id="clip0_87_872">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function CommunityWritePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    
    // localStorage에 글 저장
    const newPost = {
      id: Date.now(),
      category: selectedCategory,
      title: title.trim(),
      content: content.trim(),
      views: 0,
      likes: 0,
      comments: 0,
      timeAgo: '방금 전',
      author: '익명',
      createdAt: new Date().toISOString()
    };

    // 기존 글 목록 가져오기
    const existingPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    
    // 새 글 추가
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem('communityPosts', JSON.stringify(updatedPosts));
    
    console.log('글 작성 완료:', newPost);
    
    // 해당 카테고리 페이지로 이동
    if (selectedCategory === 'all') {
      navigate('/community');
    } else {
      navigate(`/community/${selectedCategory}`);
    }
  };

  const isFormValid = title.trim() && content.trim();

  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-y-auto overflow-x-hidden h-full w-full pb-[120px]">
      <Top />
      
      {/* Custom Header */}
      <div className="h-[48px] overflow-clip relative shrink-0 w-[375px] bg-white">
        <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[9px] translate-x-[-50%] w-[343px]">
          <BackButton />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="flex flex-row items-center self-stretch">
              <CompleteButton disabled={!isFormValid} onClick={handleSubmit} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[4px] items-start left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%]">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#02010e] text-[20px] text-center text-nowrap whitespace-pre">글쓰기</p>
        </div>
      </div>

      <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-start justify-center px-0 py-[20px] relative w-[343px] mx-auto flex-1">
        {/* 게시판 선택 */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#040415] text-[18px] text-nowrap whitespace-pre">
            게시판 선택
          </p>
        </div>
      </div>

      {/* CategoryTabs 컴포넌트 재활용 */}
      <CategoryTabs 
        activeCategory={selectedCategory} 
        mode="selection" 
        onCategorySelect={setSelectedCategory} 
      />

      <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-start justify-center px-0 py-[20px] relative w-[343px] mx-auto flex-1">
        {/* 제목 및 내용 입력 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[343px]">
          {/* 제목 입력 */}
          <div className="h-[44px] relative shrink-0 w-full">
            <div className="box-border content-stretch flex h-[44px] items-center overflow-clip pb-[8px] pt-0 px-0 relative rounded-[inherit] w-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                <EditIcon />
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic flex-1 text-[#cccccc] text-[18px] tracking-[-1px] bg-transparent border-none outline-none placeholder:text-[#cccccc]"
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
          </div>

          {/* 내용 입력 */}
          <div className="content-stretch flex h-[300px] items-start overflow-clip relative shrink-0 w-full">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              className="font-['Pretendard:Medium',sans-serif] leading-[26px] not-italic w-full h-full resize-none bg-transparent border-none outline-none text-[#cccccc] text-[18px] placeholder:text-[#cccccc]"
            />
          </div>
        </div>

        {/* 이미지/동영상 버튼 */}
        <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
          <button className="content-stretch flex gap-[7.995px] items-center relative shrink-0">
            <ImageIcon />
            <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#686873] text-[14px] text-nowrap whitespace-pre">
              이미지
            </p>
          </button>
          <button className="content-stretch flex gap-[7.995px] items-center relative shrink-0">
            <VideoIcon />
            <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#686873] text-[14px] text-nowrap whitespace-pre">
              동영상
            </p>
          </button>
        </div>

        {/* 좋은 글 작성 팁 */}
        <div className="bg-[rgba(205,205,205,0.2)] box-border content-stretch flex flex-col gap-[7.995px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[343px]">
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[301px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[16px] text-black w-full">
              💡 좋은 글 작성 팁
            </p>
            <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-[#555555] text-[14px] text-nowrap w-full whitespace-pre">
              <p className="relative shrink-0">• 명확하고 구체적인 제목을 작성해주세요</p>
              <p className="relative shrink-0">• 다른 사람을 존중하는 언어를 사용해주세요</p>
              <p className="relative shrink-0">• 관련 이미지가 있다면 함께 올려주세요</p>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}