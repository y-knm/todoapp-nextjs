import { Trash2 } from "lucide-react";

export const DeleteAllButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-full text-sm transition-all duration-300 hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg"
    >
      <Trash2 size={16} />
      すべて削除
    </button>
  );
};
