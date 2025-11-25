import { useNavigate } from 'react-router-dom';

interface CategoryTabsProps {
  activeCategory: string; // 'all' | 'character' | 'free' | 'routine' | 'tips'
  mode?: 'navigation' | 'selection'; // navigation: 페이지 이동, selection: 선택만
  onCategorySelect?: (category: string) => void; // selection 모드일 때 사용
}

const CATEGORIES = [
  { name: '전체', color: 'rgba(90, 84, 250, 1)', route: '/community', key: 'all' },
  { name: '캐릭터', color: 'rgba(255, 179, 71, 1)', route: '/community/character', key: 'character' },
  { name: '자유게시판', color: 'rgba(255, 139, 128, 1)', route: '/community/free', key: 'free' },
  { name: '루틴게시판', color: 'rgba(34, 215, 96, 1)', route: '/community/routine', key: 'routine' },
  { name: '꿀팁', color: 'rgba(200, 165, 216, 1)', route: '/community/tips', key: 'tips' },
];

export default function CategoryTabs({ activeCategory, mode = 'navigation', onCategorySelect }: CategoryTabsProps) {
  const navigate = useNavigate();

  const handleClick = (cat: typeof CATEGORIES[0]) => {
    if (mode === 'selection' && onCategorySelect) {
      onCategorySelect(cat.key);
    } else {
      navigate(cat.route);
    }
  };

  return (
    <div className="bg-white w-full px-[16px] pb-[10px] shrink-0">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip pb-[10px] pt-0 px-0 relative shrink-0 w-[343px]">
        {CATEGORIES.map((cat) => {
          const isActive = cat.key === activeCategory;
          // rgba 색상의 alpha 값만 조정
          const bgColor = isActive ? cat.color : cat.color.replace(', 1)', ', 0.2)');
          
          return (
            <button
              key={cat.key}
              onClick={() => handleClick(cat)}
              className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0 transition-all"
              style={{ 
                backgroundColor: bgColor
              }}
            >
              <p className={`font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? 'text-white' : 'text-black'}`}>
                {cat.name}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}