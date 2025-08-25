import { Header } from "@/components/pages/home/Header";

export default function Home() {
  // 表示内容定義
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="max-w-4xl min-h-96 mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* ヘッダー部分 */}
        <Header />
      </div>
    </div>
  );
}
