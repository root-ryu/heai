import svgPaths from "./svg-pl2u86cxgo";

function Edit() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit-3">
          <path d="M10 16.6667H17.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p227dd980} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Btn() {
  return (
    <div className="bg-[#5a54fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[50px] size-full" data-name="btn">
      <Edit />
    </div>
  );
}