export const Stats = ({ totalTasks, completedTasks, activeTasks }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-xl mb-5 grid grid-cols-3 gap-5">
      <div className="text-center">
        <span className="block text-sm text-gray-600 mb-1">総タスク数:</span>
        <span className="block text-2xl font-bold text-indigo-600">
          {totalTasks}
        </span>
      </div>
      <div className="text-center">
        <span className="block text-sm text-gray-600 mb-1">完了済み:</span>
        <span className="block text-2xl font-bold text-indigo-600">
          {completedTasks}
        </span>
      </div>
      <div className="text-center">
        <span className="block text-sm text-gray-600 mb-1">未完了:</span>
        <span className="block text-2xl font-bold text-indigo-600">
          {activeTasks}
        </span>
      </div>
    </div>
  );
};
