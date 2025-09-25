import React from "react";
import { TODO_FILTERS, FILTER_LABELS } from "../../utils/constants";

const TodoFilter = ({ currentFilter, onFilterChange, stats }) => {
    return (
        <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex gap-2 flex-wrap">
                {Object.values(TODO_FILTERS).map((filter) => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 cursor-pointer ${
                            currentFilter === filter
                                ? "bg-blue-500 text-white shadow-md transform scale-105"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm"
                        }`}
                    >
                        {FILTER_LABELS[filter]}
                        {filter === TODO_FILTERS.ACTIVE && stats.active > 0 && (
                            <span className="ml-1 text-xs opacity-75">
                                ({stats.active})
                            </span>
                        )}
                        {filter === TODO_FILTERS.COMPLETED &&
                            stats.completed > 0 && (
                                <span className="ml-1 text-xs opacity-75">
                                    ({stats.completed})
                                </span>
                            )}
                    </button>
                ))}
            </div>

            <div className="text-sm text-gray-600 font-medium">
                📋 {stats.active} з {stats.total}
            </div>
        </div>
    );
};

export default TodoFilter;
