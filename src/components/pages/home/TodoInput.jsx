"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export const TodoInput = ({ addTodo: realAddTodo }) => {
  const [todoInput, setTodoInput] = useState(""); // 入力欄の値
  const addTodo = () => {
    const text = todoInput.trim(); // 前後の空白を削除
    if (!text) return; // 空の場合は何もしない
    realAddTodo(text); // 親コンポーネントの関数を呼び出す
    setTodoInput(""); // 入力欄を空にする
  };

  return (
    <div className="flex mb-5 rounded-full overflow-hidden shadow-lg">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        placeholder="新しいタスクを入力してください..."
        maxLength={100}
        spellCheck={false}
        className="flex-1 p-4 px-6 text-base bg-gray-50 border-none outline-none focus:bg-white transition-colors"
      />
      <button
        onClick={addTodo}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-indigo-500/40"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};
