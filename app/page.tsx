"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// [수정] new Date()를 그냥 쓰면 서버/클라이언트 시간이 달라 에러가 납니다.
// 초기 메시지는 고정된 날짜를 박아두는 것이 안전합니다.
const INITIAL_MESSAGE: Message = {
  id: '0',
  text: '안냥! 👋 저는 당신의 AI펫 최양갱 이다냥.\n어떤 건강 고민이 있냥? 다 들어주겠다냥!',
  sender: 'ai',
  timestamp: new Date(), // 아무 고정된 날짜로나 설정
};

const SUGGESTED_KEYWORDS = ['오늘의 추천 운동', '식단 조언', '동기부여가 필요해'];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // [추가] 클라이언트에서만 렌더링되었음을 확인하는 플래그 (Hydration 에러 방지용 안전장치)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (messageText === '') return;

    // 1. 내 메시지 화면에 표시
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setShowSuggestions(false);
    setIsTyping(true);

    try {
      // 2. 백엔드 API 호출 (/api/chat)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageText,
          user_id: 'user_123' 
        }),
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();

      // 3. AI 응답 화면에 표시
      const aiMessage: Message = {
        id: data.data.id,
        text: data.data.content,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: '미안하다냥... 연결이 불안정하다냥 😿',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.nativeEvent.isComposing) return;
      e.preventDefault();
      handleSend();
    }
  };

  // [중요] 아직 마운트되지 않았으면(서버 렌더링 중이면) 아무것도 안 보여주거나 로딩만 보여줌
  // 이렇게 하면 확장프로그램이 끼어들 틈을 주지 않아 에러가 사라집니다.
  if (!mounted) {
    return null; 
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-[375px] bg-white rounded-[30px] shadow-2xl overflow-hidden h-[700px] flex flex-col">
        
        {/* 헤더 */}
        <div className="px-4 py-4 bg-white shadow-sm z-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-2xl border-2 border-yellow-300">🐱</div>
             <div>
               <h1 className="font-bold text-gray-800 text-lg">AI펫 최양갱</h1>
               <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                 <span className="w-2 h-2 bg-green-500 rounded-full"></span> 온라인
               </p>
             </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Minimize2 className="w-5 h-5 text-[#5a54fa]"/></button>
        </div>

        {/* 채팅 영역 */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#F8FBFF] space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-[#5a54fa] text-white rounded-tr-none' 
                  : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
              }`}>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                    {new Date(msg.timestamp).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {/* 로딩 애니메이션 */}
          {isTyping && (
            <div className="flex justify-start gap-2">
               <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm border border-yellow-300">🐱</div>
               <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-4 shadow-sm flex items-center gap-1">
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* 추천 검색어 */}
        {showSuggestions && (
            <div className="px-4 py-2 bg-[#F8FBFF] flex gap-2 overflow-x-auto pb-3">
                {SUGGESTED_KEYWORDS.map(k => (
                    <button key={k} onClick={() => handleSend(k)} className="whitespace-nowrap px-3 py-1.5 bg-white border border-[#5a54fa] text-[#5a54fa] text-xs font-medium rounded-full hover:bg-[#5a54fa] hover:text-white transition-all active:scale-95 shadow-sm">
                        {k}
                    </button>
                ))}
            </div>
        )}

        {/* 입력창 */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 shadow-inner focus-within:border-[#5a54fa] transition-colors">
            <input 
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              placeholder="메시지를 입력하세요..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={() => handleSend()} 
              disabled={!inputText.trim()} 
              className="p-1.5 rounded-full bg-[#5a54fa] text-white disabled:bg-gray-200 disabled:text-gray-400 transition-all hover:bg-[#4a44ea] active:scale-90"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}