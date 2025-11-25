import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'HeAi',
  description: '나와 함께 성장하는 AI 루틴 파트너',
  keywords: ['헤이', 'HeAi', '헬스', '운동', 'AI', '건강관리', '피트니스', '다이어트'],
  authors: [{ name: 'Maximus' }],
  openGraph: {
    title: 'HeAi',
    description: '나와 함께 성장하는 AI 루틴 파트너',
    images: ['/public/favicon.png'],
  },
  icons: {
    icon: '/public/favicon.png',           // 파비콘
    apple: '/public/apple-icon.png',    // iOS 아이콘
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="m-0 p-0 overflow-hidden">
      <body className="m-0 p-0 overflow-hidden">
        {/* 기존 App.tsx에 있던 레이아웃을 여기에 옮김 */}
        <div className="h-svh flex justify-center bg-gray-100 m-0 p-0 overflow-hidden">
          <div className="w-full h-svh bg-white shadow-2xl relative overflow-hidden">
            {/* children 부분에 각 페이지 내용이 들어옴 */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
