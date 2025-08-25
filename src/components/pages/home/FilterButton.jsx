import clsx from "clsx";

export const FilterButton = ({ label, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-5 py-2 rounded-full text-sm transition-all duration-300 border-2 border-transparent",
        isSelected
          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-indigo-500"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
      )}
    >
      {label}
    </button>
  );
};
