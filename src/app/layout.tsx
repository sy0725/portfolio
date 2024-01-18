import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SunYong Portfolio",
  description: "커뮤니케이션으로 성장을 즐기는 프론트엔드 개발자 전선용입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
