function Button() {
  return (
    <div className="bg-[#5a54fa] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">전체</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,179,71,0.21)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0 w-[71px]" data-name="button">
      <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">캐릭터</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,139,128,0.22)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">자유게시판</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(34,215,96,0.16)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">루틴게시판</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(200,165,216,0.64)] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-pretendard leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">꿀팁</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[10px] pt-0 px-0 relative size-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}