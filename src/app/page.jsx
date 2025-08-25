"use client";

import { useEffect, useState } from "react";

import {
  DeleteAllButton,
  DeleteCompletedButton,
  FilterButton,
  Header,
  Stats,
  TodoInput,
  TodoList,
} from "@/components/pages/home";

export default function TodoApp() {
  // 状態（データ）の管理
  const [todos, setTodos] = useState([]); // タスクの一覧
  const [currentFilter, setCurrentFilter] = useState("all"); // 表示フィルター

  // コンポーネントが最初に表示されたときに実行される処理
  useEffect(() => {
    // LocalStorageからデータを読み込む
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []); // 空の配列 [] は「最初の1回だけ実行」という意味

  // todosが変更されたときに実行される処理
  useEffect(() => {
    // ブラウザのLocalStorageにデータを保存
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // [todos] →「todosが変更されたときに実行」という意味

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

  // タスクの完了状態を切り替える関数
  const toggleTodo = (id) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id
            ? { ...todo, completed: !todo.completed } // 該当するタスクの完了状態を反転
            : todo // それ以外はそのまま
      )
    );
  };

  // タスクを削除する関数
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 完了済みタスクをすべて削除する関数
  const clearCompleted = () => {
    if (confirm("完了済みのタスクをすべて削除しますか？")) {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  // すべてのタスクを削除する関数
  const clearAll = () => {
    if (confirm("すべてのタスクを削除しますか？この操作は元に戻せません。")) {
      setTodos([]);
    }
  };

  // フィルターに基づいて表示するタスクを決定
  const filteredTodos =
    currentFilter === "completed"
      ? todos.filter((todo) => todo.completed) // 完了済みのみ
      : currentFilter === "active"
        ? todos.filter((todo) => !todo.completed) // 未完了のみ
        : todos; // すべて

  // 統計情報を計算
  const totalTasks = todos.length; // 総タスク数
  const completedTasks = todos.filter((todo) => todo.completed).length; // 完了済み数
  const activeTasks = totalTasks - completedTasks; // 未完了数

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

            {/* フィルターボタン */}
            <div className="flex justify-center gap-3">
              <FilterButton
                label="すべて"
                onClick={() => setCurrentFilter("all")}
                isSelected={currentFilter === "all"}
              />
              <FilterButton
                label="未完了"
                onClick={() => setCurrentFilter("active")}
                isSelected={currentFilter === "active"}
              />
              <FilterButton
                label="完了"
                onClick={() => setCurrentFilter("completed")}
                isSelected={currentFilter === "completed"}
              />
            </div>
          </div>

          {/* タスクリスト */}
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            emptyStateMessage={
              {
                active:
                  "未完了のタスクがありません。新しいタスクを追加してください。",
                completed: "完了済みのタスクがありません。",
                all: "タスクがありません。新しいタスクを追加してください。",
              }[currentFilter]
            }
          />

          {/* 統計情報 */}
          <Stats
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            activeTasks={activeTasks}
          />

          {/* アクションボタン */}
          <div className="flex gap-4 justify-center">
            <DeleteCompletedButton onClick={clearCompleted} />
            <DeleteAllButton onClick={clearAll} />
          </div>
        </div>
      </div>
    </div>
  );
}
