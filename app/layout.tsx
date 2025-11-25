import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* 기존 App.tsx에 있던 레이아웃을 여기에 옮김 */}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-[375px] h-[812px] bg-white shadow-2xl rounded-[40px] relative overflow-hidden">
            {/* children 부분에 각 페이지 내용이 들어옴 */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}