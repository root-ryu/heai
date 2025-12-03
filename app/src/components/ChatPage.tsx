'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Minimize2, User, Delete } from 'lucide-react';
import { getUserNickname } from '../utils/nickname';

// [타입 정의]
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// [초기 메시지 생성 함수]
const getInitialMessage = (): Message => ({
  id: '0',
  text: '안냥! 👋 저는 당신의 AI펫 최양갱 이다냥.\n어떤 건강 고민이 있냥? 다 들어주겠다냥!',
  sender: 'ai',
  timestamp: new Date(),
});

const SUGGESTED_KEYWORDS = [
  '오늘의 추천 운동',
  '식단 조언',
  '동기부여가 필요해',
  '오늘의 팁',
  '운동 기록 확인',
];

// [키보드 데이터 정의] - 코드를 깔끔하게 하기 위해 배열로 정의
const KEYS_KR_ROW_1 = [
  'ㅂ',
  'ㅈ',
  'ㄷ',
  'ㄱ',
  'ㅅ',
  'ㅛ',
  'ㅕ',
  'ㅑ',
  'ㅐ',
  'ㅔ',
];
const KEYS_KR_ROW_2 = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'];
const KEYS_KR_ROW_3 = ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'];

const KEYS_EN_ROW_1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const KEYS_EN_ROW_2 = ['@', '#', '$', '%', '&', '*', '(', ')', '-'];
const KEYS_EN_ROW_3 = ['!', '?', '+', '=', '/', '.', ','];

export default function ChatPage() {
  // 1. [기능/로직]
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [nickname, setNickname] = useState<string>('');

  // 2. [UI 상태]
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [keyboardMode, setKeyboardMode] = useState<'korean' | 'special'>(
    'korean'
  );
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 초기 로드: 닉네임 가져오기 및 채팅 기록 복원
  useEffect(() => {
    setMounted(true);
    const userNickname = getUserNickname();
    setNickname(userNickname);

    const savedHistory = localStorage.getItem(`chat_history_${userNickname}`);
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        // Date 객체 복원
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const restoredMessages = parsedHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));

        // 저장된 대화가 초기 메시지 하나뿐이라면, 현재 시간으로 갱신 (방금 들어온 것처럼)
        if (restoredMessages.length === 1 && restoredMessages[0].id === '0') {
          setMessages([getInitialMessage()]);
        } else {
          setMessages(restoredMessages);
        }
        // 메시지가 있어도 추천 검색어 표시 (사용자가 원할 수 있음)
        // if (restoredMessages.length > 1) {
        //   setShowSuggestions(false);
        // }
      } catch (e) {
        console.error('Failed to parse chat history', e);
        setMessages([getInitialMessage()]);
      }
    } else {
      setMessages([getInitialMessage()]);
    }
  }, []);

  // 메시지 변경 시 저장
  useEffect(() => {
    if (mounted && nickname && messages.length > 0) {
      localStorage.setItem(
        `chat_history_${nickname}`,
        JSON.stringify(messages)
      );
    }
  }, [messages, nickname, mounted]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showKeyboard]);

  // 3. [API 호출 핸들러]
  const handleSend = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (messageText === '') return;

    // 사용자 메시지
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
    setShowKeyboard(false);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          user_id: nickname || 'user_123', // 닉네임 사용
        }),
      });

      if (!response.ok) throw new Error('API Error');
      const data = await response.json();

      // AI 응답
      const aiMessage: Message = {
        id: data.data.id || Date.now().toString(),
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

  const handleMinimize = () => {
    router.back();
  };

  // 물리 키보드 엔터
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.nativeEvent.isComposing) return;
      e.preventDefault();
      handleSend();
    }
  };

  // 가상 키보드 입력
  const handleKeyboardKey = (key: string) => {
    if (key === 'backspace') {
      setInputText((prev) => prev.slice(0, -1));
    } else if (key === 'space') {
      setInputText((prev) => prev + ' ');
    } else {
      setInputText((prev) => prev + key);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={handleMinimize}
      />

      {/* 모달 컨테이너 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="w-full max-w-[375px] mx-auto pointer-events-auto animate-slide-up-from-bottom">
          {/* 메인 채팅 영역 */}
          <div
            className={`bg-neutral-50 flex flex-col rounded-t-[30px] shadow-2xl overflow-hidden transition-all h-[92svh] w-full relative`}
          >
            {/* Header */}
            <div className="bg-[#FFFFFF] w-full px-4 py-4 flex items-center justify-between shadow-lg rounded-t-[30px] z-10">
              <div className="flex items-center gap-3">
                <div className="relative size-[48px] shrink-0 bg-yellow-100 rounded-full border-2 border-yellow-300 flex items-center justify-center overflow-hidden">
                  <img
                    alt="AI Chat"
                    className="absolute inset-0 object-cover size-full"
                    src="/ffe30871b964849eea21498f341a536a18d0afa4.png"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerText = '🐱';
                    }}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-[#2e2e2e] text-[18px]">
                    AI펫 최양갱
                  </h1>
                  <p className="text-green-500 text-[12px] font-medium flex items-center gap-1">
                    온라인
                  </p>
                </div>
              </div>
              <button
                onClick={handleMinimize}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all active:scale-95"
              >
                <Minimize2 className="w-5 h-5 text-[#5a54fa]" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto overflow-x-hidden w-full px-4 py-4 space-y-4 bg-[#F8FBFF]"
              onClick={() => setShowKeyboard(false)}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`flex gap-2 max-w-[80%] ${
                      message.sender === 'user'
                        ? 'flex-row-reverse'
                        : 'flex-row'
                    }`}
                  >
                    {message.sender === 'user' && (
                      <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#5a54fa]">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-[#5a54fa] text-white rounded-tr-none'
                          : 'bg-white text-[#2e2e2e] border border-gray-100 rounded-tl-none'
                      }`}
                    >
                      <p className="text-[14px] leading-[1.5] whitespace-pre-wrap break-words">
                        {message.text}
                      </p>
                      <p
                        className={`text-[10px] mt-1 ${
                          message.sender === 'user'
                            ? 'text-white/70'
                            : 'text-gray-400'
                        }`}
                      >
                        {new Date(message.timestamp).toLocaleTimeString(
                          'ko-KR',
                          { hour: '2-digit', minute: '2-digit' }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start gap-2">
                  <div className="relative w-8 h-8 shrink-0 bg-yellow-100 rounded-full border-2 border-yellow-300 flex items-center justify-center overflow-hidden">
                    <img
                      alt="AI Typing"
                      className="absolute inset-0 object-cover size-full"
                      src="/ffe30871b964849eea21498f341a536a18d0afa4.png"
                    />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-4 shadow-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-0" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Floating Suggestions Toggle & List */}
            {/* Floating Suggestions Toggle & List */}
            <div className="absolute bottom-[80px] left-0 right-0 px-4 z-30 flex items-end gap-2 pointer-events-none">
              {/* Chips List (Toggled) */}
              {isHelpOpen && (
                <div className="flex-1 min-w-0 overflow-x-auto scrollbar-hide pointer-events-auto animate-fade-in-left">
                  <div className="flex gap-2 w-max px-1">
                    {SUGGESTED_KEYWORDS.map((keyword) => (
                      <button
                        key={keyword}
                        onClick={() => {
                          handleSend(keyword);
                          setIsHelpOpen(false);
                        }}
                        className="shrink-0 px-3 py-2 rounded-[20px] bg-[rgba(255,247,228,0.95)] text-[rgba(148,44,34,1)] border border-[rgba(148,44,34,0.3)] shadow-sm hover:bg-[rgba(148,44,34,0.1)] transition-all active:scale-95 text-[13px] font-medium backdrop-blur-sm whitespace-nowrap"
                      >
                        {keyword}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Toggle Button */}
              <button
                onClick={() => setIsHelpOpen(!isHelpOpen)}
                className="ml-auto size-[40px] rounded-full bg-[#5A54FA] shadow-lg flex items-center justify-center hover:bg-[#4a44ea] transition-all active:scale-95 pointer-events-auto shrink-0"
              >
                {isHelpOpen ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                )}
              </button>
            </div>

            {/* Input (키보드 없을 때) */}
            {!showKeyboard && (
              <div className="w-full px-4 pb-4 pt-2 bg-[#F8FBFF]">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200 focus-within:border-[#5a54fa] transition-colors">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    // 모바일 느낌을 살리려면 아래 주석 해제하여 가상키보드 사용
                    // onClick={() => setShowKeyboard(true)}
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 outline-none text-[16px] bg-transparent text-gray-700"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputText.trim()}
                    className={`p-2 rounded-full transition-all ${
                      !inputText.trim()
                        ? 'bg-gray-200 text-gray-400'
                        : 'bg-[#5a54fa] text-white hover:bg-[#4a44ea] active:scale-95'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 가상 키보드 영역 */}
        {showKeyboard && (
          <div className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center bg-gray-100">
            <div className="w-full">
              {/* 입력창 (키보드 위) */}
              <div className="w-full px-4 py-3 bg-neutral-50">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200">
                  <input
                    type="text"
                    value={inputText}
                    readOnly
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 outline-none text-[16px] bg-transparent"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputText.trim()}
                    className="p-2 rounded-full bg-[#5a54fa] text-white"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 키패드 UI */}
              <div className="bg-[#D1D5DB] pb-[34px] pt-2 px-2">
                {/* 1. 한글 모드 */}
                {keyboardMode === 'korean' ? (
                  <>
                    <div className="flex gap-1 mb-2 justify-center">
                      {KEYS_KR_ROW_1.map((key) => (
                        <button
                          key={key}
                          onClick={() => handleKeyboardKey(key)}
                          className="flex-1 bg-white rounded-md py-3 active:bg-gray-200 shadow-sm font-medium"
                        >
                          {key}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1 mb-2 justify-center px-4">
                      {KEYS_KR_ROW_2.map((key) => (
                        <button
                          key={key}
                          onClick={() => handleKeyboardKey(key)}
                          className="flex-1 bg-white rounded-md py-3 active:bg-gray-200 shadow-sm font-medium"
                        >
                          {key}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1 mb-2 justify-center">
                      <button className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 active:bg-gray-400 shadow-sm flex items-center justify-center text-white">
                        ⇧
                      </button>
                      {KEYS_KR_ROW_3.map((key) => (
                        <button
                          key={key}
                          onClick={() => handleKeyboardKey(key)}
                          className="flex-1 bg-white rounded-md py-3 active:bg-gray-200 shadow-sm font-medium"
                        >
                          {key}
                        </button>
                      ))}
                      <button
                        onClick={() => handleKeyboardKey('backspace')}
                        className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 active:bg-gray-400 shadow-sm flex items-center justify-center"
                      >
                        <Delete className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </>
                ) : (
                  /* 2. 특수문자 모드 */
                  <>
                    <div className="flex gap-1 mb-2 justify-center">
                      {KEYS_EN_ROW_1.map((key) => (
                        <button
                          key={key}
                          onClick={() => handleKeyboardKey(key)}
                          className="flex-1 bg-white rounded-md py-3 active:bg-gray-200 shadow-sm font-medium"
                        >
                          {key}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1 mb-2 justify-center px-4">
                      {KEYS_EN_ROW_2.map((key) => (
                        <button
                          key={key}
                          onClick={() => handleKeyboardKey(key)}
                          className="flex-1 bg-white rounded-md py-3 active:bg-gray-200 shadow-sm font-medium"
                        >
                          {key}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1 mb-2 justify-center">
                      <button className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 active:bg-gray-400 shadow-sm flex items-center justify-center text-white">
                        ⇧
                      </button>
                      {KEYS_EN_ROW_3.map((key) => (
                        <button
                          key={key}
                          onClick={() => handleKeyboardKey(key)}
                          className="flex-1 bg-white rounded-md py-3 active:bg-gray-200 shadow-sm font-medium"
                        >
                          {key}
                        </button>
                      ))}
                      <button
                        onClick={() => handleKeyboardKey('backspace')}
                        className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 active:bg-gray-400 shadow-sm flex items-center justify-center"
                      >
                        <Delete className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </>
                )}

                {/* 3. 하단 기능키 (공통) */}
                <div className="flex gap-1 justify-center mt-2">
                  <button
                    onClick={() =>
                      setKeyboardMode(
                        keyboardMode === 'korean' ? 'special' : 'korean'
                      )
                    }
                    className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 text-white text-xs shadow-sm active:bg-gray-400"
                  >
                    {keyboardMode === 'korean' ? '!#1' : '한글'}
                  </button>
                  <button className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 text-white text-sm shadow-sm active:bg-gray-400">
                    😊
                  </button>
                  <button
                    onClick={() => handleKeyboardKey('space')}
                    className="flex-[4] bg-white rounded-md py-3 text-sm shadow-sm active:bg-gray-200"
                  >
                    스페이스
                  </button>
                  <button
                    onClick={() => handleSend()}
                    className="flex-[2] bg-[#5a54fa] text-white rounded-md py-3 text-sm shadow-sm active:bg-[#4a44ea]"
                  >
                    엔터
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
