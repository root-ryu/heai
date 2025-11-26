'use client';

import { use } from 'react';
import CommunityDetailPage from '@/app/src/components/CommunityDetailPage';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <CommunityDetailPage postId={parseInt(id)} />;
}
