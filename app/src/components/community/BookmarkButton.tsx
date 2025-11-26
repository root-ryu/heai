import { useState } from 'react';
import svgPaths from '../../imports/svg-jjl4gh5igk';

interface BookmarkButtonProps {
  postId?: number;
  initialBookmarked?: boolean;
  onToggle?: (postId: number, isBookmarked: boolean) => void;
  className?: string;
}

export default function BookmarkButton({
  postId,
  initialBookmarked = false,
  onToggle,
  className = '',
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 요소로의 이벤트 전파 차단
    const newState = !isBookmarked;
    setIsBookmarked(newState);
    if (postId !== undefined && onToggle) {
      onToggle(postId, newState);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        className || 'h-[26px] relative shrink-0 w-[28px]'
      } z-10 hover:scale-110 transition-transform`}
    >
      <svg
        className="block size-full"
        fill={isBookmarked ? '#5A54FA' : 'none'}
        preserveAspectRatio="none"
        viewBox="0 0 28 26"
      >
        <path
          d={svgPaths.p15363100}
          stroke={isBookmarked ? '#5A54FA' : '#D8D8D8'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
