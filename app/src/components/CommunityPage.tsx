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

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // localStorage에서 사용자 작성 글 로드 (전체 게시판)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 페이지 포커스될 때마다 새로고침
  useEffect(() => {
    const handleFocus = () => {
      setRefreshKey(prev => prev + 1);
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const userPosts = isMounted
    ? JSON.parse(localStorage.getItem('communityPosts') || '[]')
    : [];

  const handleBookmarkToggle = (postId: number, isBookmarked: boolean) => {
    setBookmarkedPosts((prev) =>
      isBookmarked ? [...prev, postId] : prev.filter((id) => id !== postId)
    );
  };

  // 기본 posts와 사용자 posts 합치기
  const allPosts = [...userPosts, ...POSTS];

  // 검색어로 필터링
  const searchedPosts =
    searchQuery.trim() === ''
      ? allPosts
      : allPosts.filter(
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
        <CommunityHeader title="커뮤니티" />

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Category Tabs */}
        <CategoryTabs activeCategory="all" />

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

        <FloatingWriteButton />

        <Bottom />
      </div>
    </div>
  );
}
