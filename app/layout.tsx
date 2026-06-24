import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "住宅コーティングBOSS Zoom商談用LP",
  description: "コーティングBOSSのサービス概要、考え方、強み、施工できる箇所をZoom商談で説明するための1ページLPです。",
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
