import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "住宅コーティングBOSS 家族相談ページ作成",
  description: "Zoom文字起こしから、確認済みの家族相談用ページを作成します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
