'use client';

import { useState, useRef, useEffect, ReactNode, useCallback } from 'react';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh?: () => Promise<void>;
  className?: string;
}

export default function PullToRefresh({
  children,
  onRefresh,
  className = '',
}: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);
  const isPullingRef = useRef(false);
  const pullDistanceRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const THRESHOLD = 100; // 새로고침 트리거 거리
  const MAX_PULL = 150; // 최대 당김 거리

  // pullDistance 동기화
  useEffect(() => {
    pullDistanceRef.current = pullDistance;
  }, [pullDistance]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setPullDistance(60);

    try {
      if (onRefresh) {
        await onRefresh();
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error('Refresh failed:', error);
    } finally {
      setIsRefreshing(false);
      setPullDistance(0);
    }
  }, [onRefresh]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      // 이미 새로고침 중이면 무시
      if (isRefreshing) return;

      // 버튼, 체크박스 등 인터랙티브 요소 터치 시 무시
      const target = e.target as HTMLElement;
      if (target.closest('button, input, a, [role="button"]')) {
        return;
      }

      // 스크롤이 맨 위일 때만 시작
      if (container.scrollTop > 5) return;

      startY.current = e.touches[0].clientY;
      isPullingRef.current = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPullingRef.current || isRefreshing) return;

      // 스크롤이 맨 위가 아니면 초기화
      if (container.scrollTop > 5) {
        setPullDistance(0);
        pullDistanceRef.current = 0;
        return;
      }

      const currentY = e.touches[0].clientY;
      const diff = currentY - startY.current;

      if (diff > 0) {
        // 저항감 있는 당김 효과
        const resistance = 0.5;
        const distance = Math.min(diff * resistance, MAX_PULL);
        setPullDistance(distance);
        pullDistanceRef.current = distance;

        // 당기는 동안 기본 스크롤 방지
        if (distance > 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // 버튼, 체크박스 등 인터랙티브 요소 터치 시 무시
      const target = e.target as HTMLElement;
      if (target.closest('button, input, a, [role="button"]')) {
        isPullingRef.current = false;
        setPullDistance(0);
        pullDistanceRef.current = 0;
        return;
      }

      if (!isPullingRef.current) return;
      isPullingRef.current = false;

      const currentPullDistance = pullDistanceRef.current;

      if (currentPullDistance >= THRESHOLD && !isRefreshing) {
        handleRefresh();
      } else {
        setPullDistance(0);
        pullDistanceRef.current = 0;
      }
    };

    container.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isRefreshing, handleRefresh]);

  const progress = Math.min(pullDistance / THRESHOLD, 1);
  const isPulling = pullDistance > 0;

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className={`relative w-full overflow-y-auto overflow-x-hidden ${className}`}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* Pull indicator */}
      <div
        className="absolute left-0 right-0 flex items-center justify-center z-50 pointer-events-none"
        style={{
          top: 0,
          height: `${pullDistance}px`,
          opacity: progress,
          transition: isPulling ? 'none' : 'all 0.3s ease-out',
        }}
      >
        <div
          className={`w-[32px] h-[32px] rounded-full border-[3px] border-[#5A54FA] border-t-transparent ${
            isRefreshing ? 'animate-spin' : ''
          }`}
          style={{
            transform: isRefreshing ? 'none' : `rotate(${progress * 360}deg)`,
            transition: isPulling ? 'none' : 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Content - translateY 대신 paddingTop 사용 */}
      <div
        className="w-full min-h-full"
        style={{
          paddingTop: `${pullDistance}px`,
          transition: isPulling ? 'none' : 'padding-top 0.3s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}
