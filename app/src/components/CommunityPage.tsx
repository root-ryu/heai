'use client';

import { useState, useEffect } from 'react';
import { Top, Bottom } from './Layout';
import CommunityHeader from './community/CommunityHeader';
import SearchBar from './community/SearchBar';
import CategoryTabs from './community/CategoryTabs';
import PostCardList from './community/PostCardList';
import FloatingWriteButton from './community/FloatingWriteButton';
import { COMMUNITY_POSTS, type Post } from '../data/communityPosts';

const POSTS: Post[] = COMMUNITY_POSTS;

interface CommunityPageProps {
  category?: 'all' | 'character' | 'free' | 'routine' | 'tips';
}

export default function CommunityPage({ category = 'all' }: CommunityPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedPosts, setBookmarkedPosts] = useState<(number | string)[]>([]);
  const [apiPosts, setApiPosts] = useState<Post[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  // API에서 게시글 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/community/posts');
        if (res.ok) {
          const data = await res.json();
          
          // 카테고리 색상 매핑
          const categoryInfo: Record<string, { color: string; bgColor: string }> = {
            '캐릭터': { color: '#FFB347', bgColor: 'rgba(255,179,71,0.67)' },
            '자유게시판': { color: '#FF8B80', bgColor: 'rgba(255,139,128,0.67)' },
            '루틴게시판': { color: '#22D760', bgColor: 'rgba(34,215,96,0.67)' },
            '꿀팁': { color: '#C8A5D8', bgColor: 'rgba(200,165,216,0.67)' },
          };

          const mappedPosts: Post[] = data.map((item: any) => {
            const catInfo = categoryInfo[item.category] || { color: '#5A54FA', bgColor: 'rgba(90,84,250,0.67)' };
            const timestamp = new Date(item.created_at).getTime();
            
            return {
              id: item.id,
              category: item.category,
              categoryColor: `bg-[${catInfo.bgColor}]`, // Tailwind class format approximation
              categoryBgColor: catInfo.bgColor,
              title: item.title,
              content: item.content,
              image: item.image,
              views: item.views || 0,
              likes: item.likes || 0,
              comments: item.comments_count || 0,
              timeAgo: '방금 전', // PostCardList에서 timestamp로 다시 계산됨
              timestamp: timestamp,
              author: item.author,
            };
          });
          
          setApiPosts(mappedPosts);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, [refreshKey]);

  // 페이지 포커스될 때마다 새로고침
  useEffect(() => {
    const handleFocus = () => {
      setRefreshKey((prev) => prev + 1);
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);
  const handleBookmarkToggle = (postId: number | string, isBookmarked: boolean) => {
    setBookmarkedPosts((prev) =>
      isBookmarked ? [...prev, postId] : prev.filter((id) => id !== postId)
    );
  };

  // 기본 posts와 API posts 합치기
  // API posts가 최신이므로 앞에 배치
  const allPosts = [...apiPosts, ...POSTS];

  // 카테고리 필터링
  const categoryMap: Record<string, string> = {
    character: '캐릭터',
    free: '자유게시판',
    routine: '루틴게시판',
    tips: '꿀팁',
  };

  const filteredByCategory = category === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === categoryMap[category]);

  // 검색어로 필터링
  const searchedPosts =
    searchQuery.trim() === ''
      ? filteredByCategory
      : filteredByCategory.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (post.content &&
              post.content.toLowerCase().includes(searchQuery.toLowerCase()))
        );

  const getPageTitle = () => {
    if (category === 'all') return '커뮤니티';
    return categoryMap[category] || '커뮤니티';
  };

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col relative">
        <Top />

        {/* Header */}
        <CommunityHeader title={getPageTitle()} />

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Category Tabs */}
        <CategoryTabs activeCategory={category} />

        {/* Posts List */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
          <div className="flex flex-col gap-[10px] pb-[20px]">
            {searchedPosts.map((post) => (
              <PostCardList
                key={`${post.id}-${refreshKey}-${post.timestamp || 'dummy'}`}
                post={post}
                isBookmarked={bookmarkedPosts.includes(post.id)}
                onBookmarkToggle={handleBookmarkToggle}
              />
            ))}
          </div>
        </div>

        <FloatingWriteButton />

        <Bottom />
      </div>
    </div>
  );
}
