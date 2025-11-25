import './globals.css';

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
          <div className="w-full max-w-[375px] h-svh bg-white shadow-2xl relative overflow-hidden">
            {/* children 부분에 각 페이지 내용이 들어옴 */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
