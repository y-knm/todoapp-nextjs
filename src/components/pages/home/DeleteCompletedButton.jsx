import { Trash } from "lucide-react";

export const DeleteCompletedButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-3 rounded-full text-sm transition-all duration-300 hover:bg-yellow-600 hover:-translate-y-1 hover:shadow-lg"
    >
      <Trash size={16} />
      完了済みを削除
    </button>
  );
};
