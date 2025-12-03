'use client';

import { useState, useEffect } from 'react';
import { Top, Bottom } from './Layout';
import PullToRefresh from './PullToRefresh';
import CommunityHeader from './community/CommunityHeader';
import SearchBar from './community/SearchBar';
import CategoryTabs from './community/CategoryTabs';
import PostCardList from './community/PostCardList';
import FloatingWriteButton from './community/FloatingWriteButton';
import { COMMUNITY_POSTS, type Post } from '../data/communityPosts';

export default function FreeBoardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // localStorage에서 사용자 작성 글 로드 (자유게시판)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 페이지 포커스될 때마다 새로고침
  useEffect(() => {
    const handleFocus = () => {
      setRefreshKey((prev) => prev + 1);
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const userPosts = isMounted
    ? JSON.parse(localStorage.getItem('communityPosts') || '[]').filter(
        (post: Post) => post.category === '자유게시판'
      )
    : [];

  const handleBookmarkToggle = (postId: number, isBookmarked: boolean) => {
    setBookmarkedPosts((prev) =>
      isBookmarked ? [...prev, postId] : prev.filter((id) => id !== postId)
    );
  };

  // 자유게시판 카테고리만 필터링
  const freeBoardPosts = COMMUNITY_POSTS.filter(
    (post) => post.category === '자유게시판'
  );

  // 사용자 작성 글과 기본 글 합치기
  const allFreePosts = [...userPosts, ...freeBoardPosts];

  // 검색어로 추가 필터링
  const searchedPosts =
    searchQuery.trim() === ''
      ? allFreePosts
      : allFreePosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (post.content &&
              post.content.toLowerCase().includes(searchQuery.toLowerCase()))
        );

  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center w-full h-full overflow-hidden">
      <div className="max-w-[375px] mx-auto w-full h-full flex flex-col relative">
        <Top />

        {/* Header */}
        <CommunityHeader title="자유게시판" />

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Category Tabs */}
        <CategoryTabs activeCategory="free" />

        <PullToRefresh>
        {/* Posts List */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-[120px]">
          <div className="flex flex-col gap-[10px] pb-[20px]">
            {searchedPosts.map((post) => (
              <PostCardList
                key={`${post.id}-${refreshKey}`}
                post={post}
                isBookmarked={bookmarkedPosts.includes(post.id)}
                onBookmarkToggle={handleBookmarkToggle}
              />
            ))}
          </div>
        </div>
        </PullToRefresh>
        <FloatingWriteButton />

        <Bottom />
      </div>
    </div>
  );
}
