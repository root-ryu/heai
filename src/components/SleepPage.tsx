import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Top, Bottom } from './Layout';

export default function SleepPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <div className="bg-neutral-50 flex flex-col items-center w-[375px] h-[812px] overflow-hidden">
      <Top />
      
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        <div className="bg-white p-4 flex items-center gap-3 border-b">
          <button onClick={() => navigate('/')} className="p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>수면 기록</h1>
        </div>
        <div className="flex gap-2 p-4 bg-white border-b">
          <button 
            onClick={() => setView('daily')}
            className={`px-4 py-2 rounded-lg ${view === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          >
            일간
          </button>
          <button 
            onClick={() => setView('weekly')}
            className={`px-4 py-2 rounded-lg ${view === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          >
            주간
          </button>
          <button 
            onClick={() => setView('monthly')}
            className={`px-4 py-2 rounded-lg ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
          >
            월간
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600">{view === 'daily' ? '일간' : view === 'weekly' ? '주간' : '월간'} 수면 기록을 확인할 수 있습니다.</p>
        </div>
      </div>
      
      <Bottom />
    </div>
  );
}