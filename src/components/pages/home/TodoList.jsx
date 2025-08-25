"use client";

import clsx from "clsx";
import { Trash, ClipboardList } from "lucide-react";
import { useState } from "react";

export const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  emptyStateMessage,
}) => {
  return (
    <div className="mb-8">
      {/* タスクがない場合の表示 */}
      {todos.length === 0 ? (
        <div className="text-center py-16">
          <ClipboardList className="mx-auto text-gray-300 mb-5" size={80} />
          <p className="text-gray-500 text-lg">{emptyStateMessage}</p>
        </div>
      ) : (
        // タスクがある場合のリスト表示
        <div className="space-y-3">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Todo = ({ todo, toggleTodo, deleteTodo: realDeleteTodo }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const deleteTodo = (id) => {
    if (confirm("このタスクを削除しますか？")) {
      setIsRemoving(true);
      setTimeout(() => {
        realDeleteTodo(id);
      }, 300); // アニメーションの時間に合わせて遅延
    }
  };

  return (
    <div
      key={todo.id}
      className={clsx(
        "flex items-center p-4 px-5 rounded-xl transition-all duration-300 hover:translate-x-1 hover:shadow-lg animate-slide-in",
        todo.completed ? "bg-green-50 opacity-70" : "bg-gray-50",
        isRemoving && "animate-fade-out"
      )}
    >
      {/* チェックボックス */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-5 h-5 mr-4 cursor-pointer accent-indigo-500"
      />
      {/* タスクのテキスト */}
      <span
        className={clsx(
          "flex-1 text-base break-words",
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        )}
      >
        {todo.text}
      </span>
      {/* 削除ボタン */}
      <div className="flex gap-2">
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300 hover:scale-110"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};
