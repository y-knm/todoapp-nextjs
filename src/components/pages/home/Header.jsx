import { CheckSquare } from "lucide-react";

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 text-center">
      <div className="text-4xl font-light mb-2 flex items-center justify-center gap-4">
        <CheckSquare className="text-yellow-400" size={40} />
        ToDoアプリ
      </div>
      <div className="text-lg opacity-90 font-light">
        タスクを管理して、生産性を向上させましょう
      </div>
    </div>
  );
};
