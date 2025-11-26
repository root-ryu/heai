import svgPaths from '../../imports/svg-jjl4gh5igk';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = '키워드를 검색 하세요...',
}: SearchBarProps) {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-between px-4 py-[10px] relative shrink-0 w-full">
      <div className="basis-0 bg-[#f3f3f5] grow min-h-px min-w-px relative rounded-[70px] shrink-0">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center px-[14px] py-[10px] relative w-full">
            <div className="basis-0 content-stretch flex gap-[7px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={svgPaths.p19568f00}
                    stroke="#AAAAAA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="#AAAAAA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none font-['Pretendard:Regular',sans-serif] text-[16px] text-black placeholder:text-[#717182]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
