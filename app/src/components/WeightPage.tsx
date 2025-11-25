'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Top, Bottom } from './Layout';

export default function WeightPage() {
  const router = useRouter();

  return (
    <div className="bg-neutral-50 flex flex-col items-center w-full h-full overflow-hidden">
      <Top />

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        <div className="bg-white p-4 flex items-center gap-3 border-b">
          <button onClick={() => router.push('/')} className="p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>체중 정보 수정</h1>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            키, 몸무게, 목표 체중을 수정할 수 있습니다.
          </p>
        </div>
      </div>

      <Bottom />
    </div>
  );
}
