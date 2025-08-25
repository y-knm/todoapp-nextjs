"use client";

import { useState } from "react";

import { Header } from "@/components/pages/home/Header";
import { TodoInput } from "@/components/pages/home/TodoInput";
import { TodoList } from "@/components/pages/home/TodoList";

export default function TodoApp() {
  // 状態（データ）の管理
  const [todos, setTodos] = useState([]); // タスクの一覧

  // 新しいタスクを追加する関数
  const addTodo = (text) => {
    // 新しいタスクオブジェクトを作成
    const newTodo = {
      id: Date.now(), // 現在時刻をIDとして使用
      text: text, // 入力されたテキスト
      completed: false, // 最初は未完了
    };

    // 既存のtodosに新しいタスクを追加
    setTodos([...todos, newTodo]);
  };

  // 表示内容定義
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* ヘッダー部分 */}
        <Header />

        {/* メインコンテンツ */}
        <div className="p-8">
          {/* 入力セクション */}
          <div className="mb-8">
            {/* 入力欄と追加ボタン */}
            <TodoInput addTodo={addTodo} />
          </div>

          {/* タスクリスト */}
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}
