import { Inter } from "next/font/google";
import "./globals.css";

// フォントの設定
const inter = Inter({ subsets: ["latin"] });

// ページのメタデータ（タイトルや説明文など）
export const metadata = {
  title: "ToDoアプリ",
  description: "ToDoアプリ",
  author: "Engineer Guild Ambassadors",
};

// 全てのページに共通するレイアウト
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        {/* ビューポートの設定（モバイル対応） */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {/* ここに各ページのコンテンツが表示される */}
        {children}
      </body>
    </html>
  );
}
