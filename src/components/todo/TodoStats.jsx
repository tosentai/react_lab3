import React from "react";

const TodoStats = ({ stats, onClearCompleted }) => {
    if (stats.total === 0) return null;

    const completionPercentage = Math.round(
        (stats.completed / stats.total) * 100
    );

    return (
        <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-gray-600">
                    <span className="font-semibold">Прогрес:</span>{" "}
                    {stats.completed} з {stats.total} завдань виконано
                </div>
                <div className="text-sm font-bold text-blue-600">
                    {completionPercentage}%
                </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${completionPercentage}%` }}
                ></div>
            </div>

            <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                    {stats.active > 0
                        ? `Залишилось: ${stats.active}`
                        : "🎉 Усі завдання виконано!"}
                </div>

                {stats.completed > 0 && (
                    <button
                        onClick={onClearCompleted}
                        className="text-xs text-red-600 hover:text-red-800 hover:bg-red-50 px-2 py-1 rounded transition-colors cursor-pointer"
                    >
                        🗑️ Очистити виконані
                    </button>
                )}
            </div>
        </div>
    );
};

export default TodoStats;
