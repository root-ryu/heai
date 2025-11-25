import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 1. Supabase 클라이언트 생성 (이 부분이 빠져 있었음!)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// 2. Gemini 설정
const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  try {
    // 3. 프론트에서 보낸 메시지 받기
    const body = await req.json();
    const { message, user_id } = body; // user_id도 같이 받아야 함

    if (!apiKey) {
      return NextResponse.json({ error: "API 키가 설정되지 않았습니다." }, { status: 500 });
    }

    // [추가됨] 4. 사용자 메시지 DB 저장
    const { error: userError } = await supabase.from('messages').insert({
      sender_id: user_id || 'anonymous',
      content: message,
      type: 'user',
      created_at: new Date().toISOString(),
    });

    if (userError) {
      console.error("🔥 사용자 메시지 저장 실패:", userError);
      // 저장 실패해도 일단 채팅은 진행되도록 return은 안 함
    } else {
      console.log("✅ 사용자 메시지 저장 완료");
    }

    // 5. Gemini 모델 설정 
    // (429 에러 방지를 위해 가장 안정적인 1.5-flash 사용 추천)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-lite-preview-02-05",
      systemInstruction: `
        당신은 'AI 펫 최양갱'이자 '루틴 전문가'입니다.
        다음 규칙을 지켜 답변하세요:
        1. 말투: 끝을 '~다냥', '~냥'으로 끝내세요.
        2. 내용: 운동, 식단 등 건강 정보를 전문적으로 알려주세요.
        3. 태도: 귀엽고 친절하게 응원해주세요.
      `
    });

    // 6. AI에게 질문 던지기
    const result = await model.generateContent(message);
    const response = await result.response;
    const aiText = response.text();

    // [추가됨] 7. AI 응답 DB 저장
    const { data: aiData, error: aiError } = await supabase
      .from('messages')
      .insert({
        sender_id: 'ai_bot',
        content: aiText,
        type: 'ai',
        created_at: new Date().toISOString(),
      })
      .select()
      .single(); // 저장된 데이터 반환받기

    if (aiError) {
      console.error("🔥 AI 메시지 저장 실패:", aiError);
    } else {
      console.log("✅ AI 메시지 저장 완료");
    }

    // 8. 결과 반환 (DB에 저장된 AI 데이터로 반환)
    return NextResponse.json({ 
      status: "success",
      data: aiData || { // 만약 DB 저장이 실패했다면 임시 데이터라도 반환
        id: Date.now().toString(),
        content: aiText,
        created_at: new Date().toISOString(),
      }
    });

  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ error: "AI 응답 중 오류가 발생했습니다." }, { status: 500 });
  }
}