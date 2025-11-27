const imgFrame2147237665 = '/fcbf00c6e7669c5731c5c6279240b0de44d03a29.png';
const imgFrame2147237724 = '/abf40ce63a83d228878f1bf676a2d1691edebe72.png';
const imgFrame2147237725 = '/d5fbe443b722b104881319d96d0ee9af0ff88a7f.png';
const imgFrame2147237726 = '/58ca80176b87a211990413608d49ca2668fe6648.png';
const imgFrame2147237727 = '/9cd300d4aac2c5d3b13bd82a34319994811bafdd.png';

// 캐릭터 게시판용 이미지
const img81C692A7A7Be452DBf947A68C7B899Ba1 =
  '/507fd8bd7df8fea3fd6397e46c008e281673c2b5.png';
const imgChatGptImage20258260554501 =
  '/a17109099732baa2516d67467fbb4097c0f27c32.png';
const imgChatGptImage20258260325201 =
  '/38081470ca4fec66da3564d88891c95b3c138e4b.png';
const imgRectangle = '/e4202411ab30ef9d32bc99aa9008acaf4e50181f.png';
const img81C692A7A7Be452DBf947A68C7B899Ba2 =
  '/71462b102d5e572fde7e57cd40c6bc509b1d5cac.png';

export interface Post {
  id: number | string;
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
  timestamp?: number;
  author: string;
}

// 고정된 기준 시간 (2025-11-27 14:20:00 KST)
// 이 시간을 기준으로 각 게시글의 작성 시간을 계산
// 서버/클라이언트 모두 같은 값을 사용하므로 Hydration 에러 없음
const BASE_TIME = new Date('2025-11-27T14:20:00+09:00').getTime();

export const COMMUNITY_POSTS: Post[] = [
  {
    id: 1,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title: '오늘 루틴 하루 쉴건데 뭐 먹을지 투표해주세요',
    content:
      '운동 열심히 했으니까 오늘은 맛있는 거 먹어야죠! 여러분이라면 뭐 드시겠어요? 댓글로 추천해주세요!',
    hasVote: true,
    voteOptions: [
      { text: '대방어', percentage: 0, color: '#dddddd' },
      { text: '굴보쌈', percentage: 0, color: '#dddddd' },
      { text: '설빙!!! 자몽코코', percentage: 0, color: '#dddddd' },
    ],
    views: 87,
    likes: 20,
    comments: 3,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: '운동왕',
  },
  {
    id: 2,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: 'ㅎ 사혼의 ..구슬 조각을 아시나요..ㅎㅎ  ...',
    content:
      '옛날 추억의 캐릭터인데 요즘 아는 사람이 없더라구요... 혹시 아시는 분?',
    image: imgFrame2147237665,
    views: 142,
    likes: 14,
    comments: 2,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: '추억소환',
  },
  {
    id: 3,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title: '이번에 나우유씨미3 너무 재미없다던데 대신 위키드 볼까 말까?',
    content:
      '주말에 영화 보러 가려는데 나우유씨미3 평이 별로더라구요. 위키드는 어떨까요?',
    hasVote: true,
    voteOptions: [
      { text: '위키드', percentage: 70, color: '#5a54fa' },
      { text: '나우유씨미3', percentage: 30, color: '#dfe5ff' },
    ],
    views: 156,
    likes: 8,
    comments: 5,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: '영화광',
  },
  {
    id: 4,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title:
      '아이돌 나온다는것만 보고 샀는데 너무 후회해 야나두 언어..근데 생각해보니까 ...',
    content:
      '광고에 나온 아이돌 팬이라서 충동구매 했는데 생각보다 별로네요 ㅠㅠ 돈 아깝다...',
    image: imgFrame2147237724,
    views: 93,
    likes: 1,
    comments: 2,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: '후회중',
  },
  {
    id: 5,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title: '이거는 너무 내 스타일인데 우리 얘기 도 잇어ㅋㅋㅋㅋㅋ',
    content: '완전 내가 하고 싶었던 말이야 ㅋㅋㅋ 공감 백배!',
    image: imgFrame2147237725,
    views: 178,
    likes: 15,
    comments: 4,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: '공감왕',
  },
  {
    id: 6,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title:
      '막시무스... 너.. 진짜 나쁜 녀석이다냥..어떻게 먹을 걸 생각하고 운동하지 않을 수가 있는냥...',
    content: '운동 캐릭터가 먹을 생각만 하고 있어요... 이게 맞나요? ㅋㅋㅋ',
    image: imgFrame2147237726,
    views: 64,
    likes: 22,
    comments: 7,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: '냥집사',
  },
  {
    id: 7,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title:
      '아니야.. 오늘 다 했고 호 봤다고.. 넉커버스 같은게 나올줄 알았는데 그냥 사람이 ㅎㅎ',
    content: '기대했던 것과 다르게 나와서 좀 실망... 그래도 나름 볼만했어요',
    image: imgFrame2147237727,
    views: 121,
    likes: 5,
    comments: 3,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: '실망금지',
  },
  // 캐릭터 게시판
  {
    id: 101,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: '정의의 이름으로 널!',
    content: '정의의 이름으로 널 응징하겠다! 오늘도 악당 소탕 완료 ㅋㅋㅋ',
    image: img81C692A7A7Be452DBf947A68C7B899Ba1,
    views: 198,
    likes: 280,
    comments: 21,
    timeAgo: '17분 전',
    timestamp: BASE_TIME - 17 * 60 * 1000, // 17분 전
    author: 'Mr셀러막',
  },
  {
    id: 102,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: '병줍알바 하실 분..?',
    content: '병 줍는 알바 구합니다! 시급 협의 가능합니다',
    image: imgChatGptImage20258260554501,
    views: 112,
    likes: 42,
    comments: 10,
    timeAgo: '26분 전',
    timestamp: BASE_TIME - 26 * 60 * 1000, // 26분 전
    author: '붕어빵 벤츠',
  },
  {
    id: 103,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: '린쨩이랑 드디어 결혼...',
    content: '오늘 드디어 린쨩이랑 결혼했어요! 모두 축하해주세요 💕',
    image: imgChatGptImage20258260325201,
    views: 167,
    likes: 24,
    comments: 20,
    timeAgo: '50분 전',
    timestamp: BASE_TIME - 50 * 60 * 1000, // 50분 전
    author: '린쨩 사랑한다능',
  },
  {
    id: 104,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: '춥다',
    content: '오늘 날씨 너무 춥다... 따뜻한 코코아 한잔 하고 싶네요',
    image: imgRectangle,
    views: 287,
    likes: 15,
    comments: 10,
    timeAgo: '1시간 전',
    timestamp: BASE_TIME - 1 * 60 * 60 * 1000, // 1시간 전
    author: '요다',
  },
  {
    id: 105,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: '내 눈을 바라봐',
    content: '내 눈을 똑바로 바라봐... 최면에 걸려버릴걸?',
    image: img81C692A7A7Be452DBf947A68C7B899Ba2,
    views: 423,
    likes: 10,
    comments: 4,
    timeAgo: '2시간 전',
    timestamp: BASE_TIME - 2 * 60 * 60 * 1000, // 2시간 전
    author: '밤티걸좋아요',
  },
  {
    id: 106,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: '남친 구해요',
    content: '착하고 성실한 남친 구합니다! 연락주세요~',
    image: imgFrame2147237665,
    views: 756,
    likes: 20,
    comments: 18,
    timeAgo: '3시간 전',
    timestamp: BASE_TIME - 3 * 60 * 60 * 1000, // 3시간 전
    author: '노밤티걸',
  },
  // 루틴 게시판
  {
    id: 201,
    category: '루틴게시판',
    categoryColor: 'bg-[rgba(34,215,96,0.67)]',
    categoryBgColor: 'rgba(34,215,96,0.67)',
    title: '아침 루틴으로 하루를 바꿨어요!',
    content:
      '매일 아침 6시에 일어나서 물 한 잔, 스트레칭 10분, 명상 5분을 실천 중입니다. 하루가 정말 달라졌어요!',
    image: img81C692A7A7Be452DBf947A68C7B899Ba1,
    views: 334,
    likes: 156,
    comments: 34,
    timeAgo: '1시간 전',
    timestamp: BASE_TIME - 1 * 60 * 60 * 1000, // 1시간 전
    author: '루틴왕',
  },
  {
    id: 202,
    category: '루틴게시판',
    categoryColor: 'bg-[rgba(34,215,96,0.67)]',
    categoryBgColor: 'rgba(34,215,96,0.67)',
    title: '운동 루틴 공유합니다',
    content:
      '월수금은 웨이트, 화목토는 유산소! 이렇게 하니까 체력이 많이 좋아졌어요',
    image: imgChatGptImage20258260554501,
    views: 489,
    likes: 89,
    comments: 12,
    timeAgo: '2시간 전',
    timestamp: BASE_TIME - 2 * 60 * 60 * 1000, // 2시간 전
    author: '헬스광',
  },
  // 꿀팁 게시판
  {
    id: 301,
    category: '꿀팁',
    categoryColor: 'bg-[rgba(200,165,216,0.67)]',
    categoryBgColor: 'rgba(200,165,216,0.67)',
    title: '다이어트 꿀팁 공유해요',
    content:
      '물 많이 마시고, 식사는 천천히, 간식은 과일로! 이렇게만 해도 효과 좋아요',
    image: imgChatGptImage20258260325201,
    views: 145,
    likes: 234,
    comments: 56,
    timeAgo: '30분 전',
    timestamp: BASE_TIME - 30 * 60 * 1000, // 30분 전
    author: '다이어터',
  },
  {
    id: 302,
    category: '꿀팁',
    categoryColor: 'bg-[rgba(200,165,216,0.67)]',
    categoryBgColor: 'rgba(200,165,216,0.67)',
    title: '집에서 할 수 있는 운동',
    content: '버피, 플랭크, 스쿼트만 해도 충분해요! 기구 없이도 가능합니다',
    image: imgRectangle,
    views: 312,
    likes: 123,
    comments: 23,
    timeAgo: '1시간 전',
    timestamp: BASE_TIME - 1 * 60 * 60 * 1000, // 1시간 전
    author: '홈트족',
  },
];
