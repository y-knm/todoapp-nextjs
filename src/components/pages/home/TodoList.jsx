export const TodoList = ({ todos }) => {
  return (
    <div className="mb-8">
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center p-4 px-5 rounded-xl transition-all duration-300 hover:translate-x-1 hover:shadow-lg animate-slide-in bg-gray-50"
          >
            <span className="flex-1 text-base break-words text-gray-800">
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
