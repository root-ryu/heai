'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Top, Bottom } from './Layout';
import CommunityHeader from './community/CommunityHeader';
import SearchBar from './community/SearchBar';
import CategoryTabs from './community/CategoryTabs';
import PostCardList from './community/PostCardList';
import FloatingWriteButton from './community/FloatingWriteButton';

const imgFrame2147237724 = '/abf40ce63a83d228878f1bf676a2d1691edebe72.png';
const imgFrame2147237725 = '/d5fbe443b722b104881319d96d0ee9af0ff88a7f.png';
const imgFrame2147237726 = '/58ca80176b87a211990413608d49ca2668fe6648.png';
const imgFrame2147237727 = '/9cd300d4aac2c5d3b13bd82a34319994811bafdd.png';

interface Post {
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
  author: string;
}

const ALL_POSTS: Post[] = [
  {
    id: 1,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title: '오늘 루틴 하루 쉴건데 뭐 먹을지 투표해주세요',
    hasVote: true,
    voteOptions: [
      { text: '대방어', percentage: 0, color: '#dddddd' },
      { text: '굴보쌈', percentage: 0, color: '#dddddd' },
      { text: '설빙!!! 자몽코코', percentage: 0, color: '#dddddd' },
    ],
    views: 1452,
    likes: 0,
    comments: 2,
    timeAgo: '17분 전',
    author: '조회수 1,452',
  },
  {
    id: 2,
    category: '캐릭터',
    categoryColor: 'bg-[rgba(255,179,71,0.67)]',
    categoryBgColor: 'rgba(255,179,71,0.67)',
    title: 'ㅎ 사혼의 ..구슬 조각을 아시나요..ㅎㅎ  ...',
    image: imgFrame2147237724,
    views: 1451,
    likes: 14,
    comments: 2,
    timeAgo: '17분 전',
    author: '조회수 1,451',
  },
  {
    id: 3,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title: '이번에 나우유씨미3 너무 재미없다던데 대신 위키드 볼까 말까?',
    hasVote: true,
    voteOptions: [
      { text: '위키드', percentage: 70, color: '#5a54fa' },
      { text: '나우유씨미3', percentage: 30, color: '#dfe5ff' },
    ],
    views: 1452,
    likes: 0,
    comments: 2,
    timeAgo: '17분 전',
    author: '조회수 1,452',
  },
  {
    id: 4,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title:
      '아이돌 나온다는것만 보고 샀는데 너무 후회해 야나두 언어..근데 생각해보니까 ...',
    image: imgFrame2147237724,
    views: 1452,
    likes: 1,
    comments: 2,
    timeAgo: '17분 전',
    author: '조수 1,452',
  },
  {
    id: 5,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title: '이거는 너무 내 스타일인데 우리 얘기 도 잇어ㅋㅋㅋㅋㅋ',
    image: imgFrame2147237725,
    views: 1452,
    likes: 0,
    comments: 2,
    timeAgo: '17분 전',
    author: '조회수 1,452',
  },
  {
    id: 6,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title:
      '막시무스... 너.. 진짜 나쁜 녀석이다냥..어떻게 먹을 걸 생각하고 운동하지 않을 수가 있는냥...',
    image: imgFrame2147237726,
    views: 1452,
    likes: 0,
    comments: 2,
    timeAgo: '17분 전',
    author: '조회수 1,452',
  },
  {
    id: 7,
    category: '자유게시판',
    categoryColor: 'bg-[rgba(255,82,65,0.67)]',
    categoryBgColor: 'rgba(255,139,128,0.67)',
    title:
      '아니야.. 오늘 다 했고 호 봤다고.. 넉커버스 같은게 나올줄 알았는데 그냥 사람이 ㅎㅎ',
    image: imgFrame2147237727,
    views: 1452,
    likes: 0,
    comments: 2,
    timeAgo: '17분 전',
    author: '조회수 1,452',
  },
];

export default function FreeBoardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const handleBookmarkToggle = (postId: number, isBookmarked: boolean) => {
    setBookmarkedPosts((prev) =>
      isBookmarked ? [...prev, postId] : prev.filter((id) => id !== postId)
    );
  };

  // 자유게시판 카테고리만 필터링
  const freeBoardPosts = ALL_POSTS.filter(
    (post) => post.category === '자유게시판'
  );

  // 검색어로 추가 필터링
  const searchedPosts =
    searchQuery.trim() === ''
      ? freeBoardPosts
      : freeBoardPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (post.content &&
              post.content.toLowerCase().includes(searchQuery.toLowerCase()))
        );

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <Top />

      {/* Header */}
      <CommunityHeader title="자유게시판" />

      {/* Search Bar */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {/* Category Tabs */}
      <CategoryTabs activeCategory="free" />

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
        <div className="flex flex-col gap-[10px] pb-[20px]">
          {searchedPosts.map((post) => (
            <PostCardList
              key={post.id}
              post={post}
              isBookmarked={bookmarkedPosts.includes(post.id)}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ))}
        </div>
      </div>

      <Bottom />
      <FloatingWriteButton />
    </div>
  );
}
