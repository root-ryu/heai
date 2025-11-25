import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Bot, User, Minimize2, Delete } from 'lucide-react';
import imgEye12 from "figma:asset/532303d6c8033a0d1a7fe404f94ac83b8cb9ed53.png";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: '0',
  text: '안냥! 👋 저는 당신의 AI펫 최양갱 이다냥.\n오늘은 무엇을 도와드릴까냥?',
  sender: 'ai',
  timestamp: new Date(),
};

const SUGGESTED_KEYWORDS = [
  '오늘의 추천 운동',
  '식단 조언',
  '동기부여가 필요해',
  '오늘의 팁',
  '운동 기록 확인',
];

export default function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [keyboardMode, setKeyboardMode] = useState<'korean' | 'special'>('korean');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('추천 운동') || lowerMessage.includes('운동')) {
      return '오늘의 추천 운동이다냥! 🏃‍♂️\n\n1. 스쿼트 15회 x 3세트\n2. 플랭크 30초 x 3세트\n3. 점핑잭 20회 x 3세트\n\n가볍게 시작해서 서서히 강도를 높여보라냥! 💪';
    } else if (lowerMessage.includes('식단') || lowerMessage.includes('다이어트')) {
      return '건강한 식단을 위한 팁이다냥! 🥗\n\n- 아침: 달걀 2개 + 고구마 + 샐러드\n- 점심: 현미밥 + 닭가슴살 + 채소\n- 저녁: 샐러드 + 연어\n\n물도 하루 2L 이상 마시라냥!';
    } else if (lowerMessage.includes('동기부여') || lowerMessage.includes('힘들어')) {
      return '힘내라냥! 💪✨\n\n작은 진전도 진전이다냥! 오늘 하루도 최선을 다한 당신은 대단하다냥! 포기하지 말고 한 걸음씩 나아가보라냥. 나는 항상 당신을 응원한다냥! 🎉';
    } else if (lowerMessage.includes('팁')) {
      return '오늘의 건강 팁이다냥! 💡\n\n- 아침에 일어나자마자 물 한 잔 마시기\n- 30분마다 스트레칭하기\n- 잠들기 2시간 전 스마트폰 끄기\n- 매일 같은 시간에 자고 일어나기\n\n작은 습관이 큰 변화를 만든다냥!';
    } else if (lowerMessage.includes('기록') || lowerMessage.includes('확인')) {
      return '운동 기록을 확인했다냥! 📊\n\n이번 주 운동: 5일\n완료한 틴: 18개\n소모 칼로리: 약 1,200kcal\n\n정말 잘하고 있다냥! 이 페이스를 유지하라냥! 🔥';
    } else if (lowerMessage.includes('안녕') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return '안녕하다냥! 😺 오늘도 건강한 하루 보내고 있느냐냥? 무엇이든 물어보라냥!';
    } else if (lowerMessage.includes('감사') || lowerMessage.includes('고마워')) {
      return '천만에다냥! 😊 당신의 건강을 위해 언제든지 도와줄 준비가 되어있다냥! 화이팅이다냥! 🌟';
    } else {
      return '흠... 잘 이해하지 못했다냥 🤔\n루틴, 운동, 식단, 기록 등에 대해 물어보면 도움을 줄 수 있다냥!';
    }
  };

  const handleSend = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (messageText === '') return;

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

    // AI 응답 시뮬레이션 (1-2초 딜레이)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(messageText),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (keyword: string) => {
    handleSend(keyword);
  };

  const handleMinimize = () => {
    navigate(-1);
  };

  const handleKeyboardKey = (key: string) => {
    if (key === 'backspace') {
      setInputText(prev => prev.slice(0, -1));
    } else if (key === 'space') {
      setInputText(prev => prev + ' ');
    } else {
      setInputText(prev => prev + key);
    }
  };

  const handleKeyboardModeChange = (mode: 'korean' | 'special') => {
    setKeyboardMode(mode);
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={handleMinimize} />
      
      {/* Chat Modal - 화면 안에서 아래에서 위로 올라옴 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
        <div className="w-[375px] animate-slide-up-from-bottom">
          {/* Chat Container */}
          <div className={`bg-neutral-50 flex flex-col rounded-t-[30px] shadow-2xl overflow-hidden transition-all h-[765px]`}>
            {/* Chat Header */}
            <div className="bg-[#FFFFFF] w-full px-4 py-4 flex items-center justify-between shadow-lg rounded-t-[30px]">
              <div className="flex items-center gap-3">
                <div className="relative size-[48px] shrink-0">
                  <img 
                    alt="AI Chat" 
                    className="absolute inset-0 object-contain size-[70%] m-auto" 
                    src={imgEye12}
                  />
                </div>
                <div>
                  <h1 className="font-['Pretendard:Bold',sans-serif] text-[#2e2e2e] text-[18px]">
                    AI펫 최양갱
                  </h1>
                  <p className="font-['Pretendard:Regular',sans-serif] text-gray-500 text-[12px]">
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

            {/* Messages Area */}
            <div 
              className="flex-1 overflow-y-auto overflow-x-hidden w-full px-4 py-4 space-y-4 bg-[#F8FBFF]"
              onClick={() => setShowKeyboard(false)}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex gap-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {message.sender === 'user' && (
                      <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#5a54fa]">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {message.sender === 'user' ? (
                      <div className="rounded-2xl px-4 py-3 bg-[#5a54fa] text-white">
                        <p className="font-['Pretendard:Regular',sans-serif] text-[14px] leading-[1.5] whitespace-pre-wrap break-words">
                          {message.text}
                        </p>
                        <p className="font-['Pretendard:Regular',sans-serif] text-[10px] mt-1 text-white/70">
                          {message.timestamp.toLocaleTimeString('ko-KR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-[16px] leading-[20px] whitespace-pre-wrap break-words text-[#2e2e2e] text-left">
                          {message.text}
                        </p>
                        <p className="font-['Pretendard:Regular',sans-serif] text-[10px] mt-1 text-gray-400">
                          {message.timestamp.toLocaleTimeString('ko-KR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* Suggestions Area - AI 메시지 아래 */}
              {showSuggestions && (
                <div className="w-full pt-2">
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_KEYWORDS.map((keyword) => (
                      <button
                        key={keyword}
                        onClick={() => handleSuggestionClick(keyword)}
                        className="px-3 py-2 rounded-full bg-white text-[#942C22] border border-[#942C22] hover:bg-[#942C22] hover:text-white transition-all active:scale-95 font-['Pretendard:Medium',sans-serif] text-[12px] shadow-sm"
                      >
                        {keyword}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - 키보드가 있을 때는 키보드 위에 표시 */}
            {!showKeyboard && (
              <div className="w-[375px] px-4 pb-4 bg-neutral-50 -mt-20 relative z-10">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 outline-none font-['Pretendard:Regular',sans-serif] text-[14px] bg-transparent"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={inputText.trim() === ''}
                    className={`p-2 rounded-full transition-all ${
                      inputText.trim() === ''
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
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

        {/* 키보드 */}
        {showKeyboard && (
          <div className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center">
            <div className="w-[375px]">
              {/* Input Area - 키보드 위에 */}
              <div className="w-full px-4 py-3 bg-neutral-50">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 outline-none font-['Pretendard:Regular',sans-serif] text-[14px] bg-transparent"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={inputText.trim() === ''}
                    className={`p-2 rounded-full transition-all ${
                      inputText.trim() === ''
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#5a54fa] text-white hover:bg-[#4a44ea] active:scale-95'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* 키보드 패드 */}
              <div className="bg-[#D1D5DB] pb-[34px]">
                <div className="px-2 py-3">
                  {keyboardMode === 'korean' ? (
                    <>
                      {/* 첫 번째 줄 - 자음/모음 */}
                      <div className="flex gap-1 mb-2 justify-center">
                        {['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'].map((key) => (
                          <button
                            key={key}
                            onClick={() => handleKeyboardKey(key)}
                            className="flex-1 bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[18px] active:bg-gray-200 shadow-sm flex items-center justify-center"
                          >
                            {key}
                          </button>
                        ))}
                      </div>
                      {/* 두 번째 줄 - 자음/모음 */}
                      <div className="flex gap-1 mb-2 justify-center px-4">
                        {['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'].map((key) => (
                          <button
                            key={key}
                            onClick={() => handleKeyboardKey(key)}
                            className="flex-1 bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[18px] active:bg-gray-200 shadow-sm flex items-center justify-center"
                          >
                            {key}
                          </button>
                        ))}
                      </div>
                      {/* 세 번째 줄 - 자음/모음 */}
                      <div className="flex gap-1 mb-2 justify-center">
                        <button
                          onClick={() => {/* 쉬프트 기능 */}}
                          className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 active:bg-gray-400 shadow-sm flex items-center justify-center font-['Pretendard:Medium',sans-serif] text-[14px] text-white"
                        >
                          ⇧
                        </button>
                        {['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'].map((key) => (
                          <button
                            key={key}
                            onClick={() => handleKeyboardKey(key)}
                            className="flex-1 bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[18px] active:bg-gray-200 shadow-sm flex items-center justify-center"
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
                      {/* 네 번째 줄 - 기능키 */}
                      <div className="flex gap-1 justify-center">
                        <button
                          onClick={() => handleKeyboardModeChange('special')}
                          className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[12px] text-white active:bg-gray-400 shadow-sm flex items-center justify-center"
                        >
                          !#1
                        </button>
                        <button
                          onClick={() => {/* 이모티콘 */}}
                          className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[14px] text-white active:bg-gray-400 shadow-sm flex items-center justify-center"
                        >
                          😊
                        </button>
                        <button
                          onClick={() => handleKeyboardKey('space')}
                          className="flex-[4] bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[14px] active:bg-gray-200 shadow-sm flex items-center justify-center"
                        >
                          스페이스
                        </button>
                        <button
                          onClick={() => {
                            handleSend();
                            setShowKeyboard(false);
                          }}
                          className="flex-[2] bg-[#5a54fa] rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[14px] text-white active:bg-[#4a44ea] shadow-sm flex items-center justify-center"
                        >
                          엔터
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* 특수문자 키보드 */}
                      {/* 첫 번째 줄 */}
                      <div className="flex gap-1 mb-2 justify-center">
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((key) => (
                          <button
                            key={key}
                            onClick={() => handleKeyboardKey(key)}
                            className="flex-1 bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[18px] active:bg-gray-200 shadow-sm flex items-center justify-center"
                          >
                            {key}
                          </button>
                        ))}
                      </div>
                      {/* 두 번째 줄 */}
                      <div className="flex gap-1 mb-2 justify-center px-4">
                        {['@', '#', '$', '%', '&', '*', '(', ')', '-'].map((key) => (
                          <button
                            key={key}
                            onClick={() => handleKeyboardKey(key)}
                            className="flex-1 bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[18px] active:bg-gray-200 shadow-sm flex items-center justify-center"
                          >
                            {key}
                          </button>
                        ))}
                      </div>
                      {/* 세 번째 줄 */}
                      <div className="flex gap-1 mb-2 justify-center">
                        <button
                          onClick={() => {/* 쉬프트 기능 */}}
                          className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 active:bg-gray-400 shadow-sm flex items-center justify-center font-['Pretendard:Medium',sans-serif] text-[14px] text-white"
                        >
                          ⇧
                        </button>
                        {['!', '?', '+', '=', '/', '.', ','].map((key) => (
                          <button
                            key={key}
                            onClick={() => handleKeyboardKey(key)}
                            className="flex-1 bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[18px] active:bg-gray-200 shadow-sm flex items-center justify-center"
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
                      {/* 네 번째 줄 - 기능키 */}
                      <div className="flex gap-1 justify-center">
                        <button
                          onClick={() => {/* 다른 특수문자로 전환 */}}
                          className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[12px] text-white active:bg-gray-400 shadow-sm flex items-center justify-center"
                        >
                          ~\|
                        </button>
                        <button
                          onClick={() => handleKeyboardModeChange('korean')}
                          className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[12px] text-white active:bg-gray-400 shadow-sm flex items-center justify-center"
                        >
                          한글
                        </button>
                        <button
                          onClick={() => {/* 이모티콘 */}}
                          className="flex-[1.5] bg-[#ADB1B8] rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[14px] text-white active:bg-gray-400 shadow-sm flex items-center justify-center"
                        >
                          😊
                        </button>
                        <button
                          onClick={() => handleKeyboardKey('space')}
                          className="flex-[3] bg-white rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[14px] active:bg-gray-200 shadow-sm flex items-center justify-center"
                        >
                          스페이스
                        </button>
                        <button
                          onClick={() => {
                            handleSend();
                            setShowKeyboard(false);
                          }}
                          className="flex-[2] bg-[#5a54fa] rounded-md py-3 font-['Pretendard:Medium',sans-serif] text-[14px] text-white active:bg-[#4a44ea] shadow-sm flex items-center justify-center"
                        >
                          엔터
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}