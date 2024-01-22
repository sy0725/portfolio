import type { Metadata } from "next";
import "@/style/globals.css";

export const metadata: Metadata = {
  title: "SunYong Portfolio",
  description: "커뮤니케이션으로 성장을 즐기는 프론트엔드 개발자 전선용입니다.",
  icons : {
    icon : '/public/favicon/favicon.ico'
  },
  keywords : '전선용 포트폴리오'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
