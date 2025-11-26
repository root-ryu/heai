import { useRouter } from 'next/navigation';
import { Heart, MessageSquare } from 'lucide-react';
import BookmarkButton from './BookmarkButton';

interface PostCardListProps {
  post: {
    id: number;
    category: string;
    categoryColor: string;
    categoryBgColor?: string;
    title: string;
    content?: string;
    image?: string;
    hasVote?: boolean;
    voteOptions?: { text: string; percentage: number; color: string }[];
    views: number;
    likes: number;
    comments: number;
    timeAgo: string;
  };
  isBookmarked?: boolean;
  onBookmarkToggle?: (postId: number, isBookmarked: boolean) => void;
}

export default function PostCardList({
  post,
  isBookmarked = false,
  onBookmarkToggle,
}: PostCardListProps) {
  const router = useRouter();
  // categoryColor를 bg-[rgba(...)] 형식에서 실제 색상 값으로 변환
  const getCategoryBgColor = () => {
    if (post.categoryBgColor) return post.categoryBgColor;

    // 기본값 매핑
    const colorMap: Record<string, string> = {
      자유게시판: 'rgba(255,139,128,0.67)',
      캐릭터: 'rgba(255,179,71,0.67)',
      루틴게시판: 'rgba(34,215,96,0.67)',
      꿀팁: 'rgba(200,165,216,0.67)',
    };
    return colorMap[post.category] || 'rgba(90,84,250,0.67)';
  };

  const handlePostClick = () => {
    router.push(`/community/${post.id}`);
  };

  return (
    <div className="bg-white w-full">
      {/* Post Content */}
      <div
        className="px-[20px] py-[16px] cursor-pointer hover:bg-neutral-50 transition-colors"
        onClick={handlePostClick}
      >
        <div className="w-[335px] mx-auto">
          {/* Category and Bookmark */}
          <div className="flex items-center justify-between mb-[12px]">
            <div
              className="rounded-[4px] px-[6px] py-[3px]"
              style={{ backgroundColor: getCategoryBgColor() }}
            >
              <p className="font-pretendard text-[12px] leading-[16px] text-[#ffffff]">
                {post.category}
              </p>
            </div>
            <BookmarkButton
              postId={post.id}
              initialBookmarked={isBookmarked}
              onToggle={onBookmarkToggle}
            />
          </div>

          {/* Title */}
          <p className="font-pretendard text-[16px] leading-[18px] text-black mb-[12px]">
            {post.title}
          </p>

          {/* Vote or Image */}
          {post.hasVote && post.voteOptions ? (
            <div className="flex flex-col gap-[8px] mb-[12px]">
              {post.voteOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[10px] border border-[#f0f0f0]"
                >
                  <div className="p-[10px]">
                    {option.percentage > 0 && (
                      <div
                        className="absolute h-full left-0 rounded-tl-[10px] rounded-bl-[10px] top-0"
                        style={{
                          width: `${option.percentage}%`,
                          backgroundColor: option.color.includes('bg-')
                            ? undefined
                            : option.color,
                        }}
                      />
                    )}
                    <p
                      className={`font-pretendard text-[16px] relative z-10 ${
                        option.percentage > 0 ? 'text-white' : 'text-black'
                      }`}
                    >
                      {option.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : post.image ? (
            <div className="relative w-full h-[148px] rounded-[8px] mb-[12px] overflow-hidden bg-[rgba(251,201,201,0.2)]">
              <img
                src={post.image}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          ) : null}

          {/* Views and Time */}
          <div className="flex items-center justify-between">
            <p className="font-pretendard text-[14px] leading-[16px] text-[#8c8c8c]">
              조회수 {post.views}
            </p>
            <p className="font-pretendard text-[14px] leading-[24px] text-[#8c8c8c]">
              {post.timeAgo}
            </p>
          </div>
        </div>
      </div>

      {/* Likes and Comments */}
      <div className="bg-white px-[20px] pb-[20px] pt-[10px]">
        <div className="w-[335px] mx-auto flex items-center gap-[16px]">
          <div className="flex items-center gap-[4px]">
            <Heart className="w-[16px] h-[16px] text-[#5D5D5D]" />
            <p className="font-pretendard text-[14px] leading-[24px] text-[#5e5e5e]">
              추천수 {post.likes}
            </p>
          </div>
          <div className="flex items-center gap-[4px]">
            <MessageSquare className="w-[16px] h-[16px] text-[#5E5E5E]" />
            <p className="font-pretendard text-[14px] leading-[24px] text-[#5e5e5e]">
              댓글 {post.comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
