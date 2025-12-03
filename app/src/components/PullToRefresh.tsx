'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh?: () => Promise<void>;
}

export default function PullToRefresh({ children, onRefresh }: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const startY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const THRESHOLD = 80; // 새로고침 트리거 거리
  const MAX_PULL = 120; // 최대 당김 거리

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      // 스크롤이 맨 위에 있을 때만 pull-to-refresh 활성화
      const scrollableParent = findScrollableParent(e.target as HTMLElement);
      if (scrollableParent && scrollableParent.scrollTop > 0) return;
      
      startY.current = e.touches[0].clientY;
      setIsPulling(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling || isRefreshing) return;

      const scrollableParent = findScrollableParent(e.target as HTMLElement);
      if (scrollableParent && scrollableParent.scrollTop > 0) {
        setPullDistance(0);
        return;
      }

      const currentY = e.touches[0].clientY;
      const diff = currentY - startY.current;

      if (diff > 0) {
        // 저항감 있는 당김 효과
        const resistance = 0.5;
        const distance = Math.min(diff * resistance, MAX_PULL);
        setPullDistance(distance);

        // 당기는 동안 기본 스크롤 방지
        if (distance > 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = async () => {
      if (!isPulling) return;
      setIsPulling(false);

      if (pullDistance >= THRESHOLD && !isRefreshing) {
        setIsRefreshing(true);
        setPullDistance(60); // 로딩 인디케이터 표시 위치

        try {
          if (onRefresh) {
            await onRefresh();
          } else {
            // 기본 새로고침
            window.location.reload();
          }
        } catch (error) {
          console.error('Refresh failed:', error);
        } finally {
          setIsRefreshing(false);
          setPullDistance(0);
        }
      } else {
        setPullDistance(0);
      }
    };

    // 스크롤 가능한 부모 요소 찾기
    const findScrollableParent = (element: HTMLElement | null): HTMLElement | null => {
      while (element) {
        const style = window.getComputedStyle(element);
        const overflowY = style.overflowY;
        if ((overflowY === 'auto' || overflowY === 'scroll') && element.scrollHeight > element.clientHeight) {
          return element;
        }
        element = element.parentElement;
      }
      return null;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPulling, isRefreshing, pullDistance, onRefresh]);

  const progress = Math.min(pullDistance / THRESHOLD, 1);

  return (
    <div ref={containerRef} className="relative w-full h-full">
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

      {/* Content */}
      <div
        className="w-full h-full"
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: isPulling ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}
