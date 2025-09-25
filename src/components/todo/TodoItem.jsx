import React, { useState } from "react";

const TodoItem = ({ todo, onRemove, onToggleStatus }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleToggleComplete = () => {
        const newStatus = !isCompleted;
        setIsCompleted(newStatus);
        onToggleStatus(todo.id, newStatus);
    };

    return (
        <div
            className={`flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 ${
                isCompleted
                    ? "opacity-75 bg-gray-50 border-gray-300"
                    : "hover:shadow-md"
            }`}
        >
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleToggleComplete}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span
                className={`flex-1 transition-all duration-200 ${
                    isCompleted ? "line-through text-gray-500" : "text-gray-900"
                }`}
            >
                {todo.text}
            </span>
            {isCompleted && <span className="text-green-500 text-sm">✓</span>}
            <button
                onClick={() => onRemove(todo.id)}
                className="px-3 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors cursor-pointer"
            >
                🗑️
            </button>
        </div>
    );
};

export default TodoItem;
