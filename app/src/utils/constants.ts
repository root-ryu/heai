export const CATEGORY_DATA: Record<string, { color: string; bgColor: string }> = {
  character: {
    color: '#FFB347',
    bgColor: 'rgba(255,179,71,0.67)',
  },
  free: {
    color: '#FF8B80',
    bgColor: 'rgba(255,139,128,0.67)',
  },
  routine: {
    color: '#22D760',
    bgColor: 'rgba(34,215,96,0.67)',
  },
  tips: {
    color: '#C8A5D8',
    bgColor: 'rgba(200,165,216,0.67)',
  },
};

export const CATEGORY_MAP: Record<string, string> = {
  character: '캐릭터',
  free: '자유게시판',
  routine: '루틴게시판',
  tips: '꿀팁',
};
