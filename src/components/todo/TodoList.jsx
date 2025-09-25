import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import TodoStats from "./TodoStats";
import { TODO_FILTERS } from "../../utils/constants";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState(TODO_FILTERS.ALL);
    const [todoStatuses, setTodoStatuses] = useState({});

    const handleAddTodo = (text) => {
        const newTodo = {
            id: Date.now() + Math.random(),
            text: text,
            createdAt: new Date().toISOString(),
        };
        setTodos([...todos, newTodo]);
        setTodoStatuses((prev) => ({
            ...prev,
            [newTodo.id]: false,
        }));
    };

    const handleRemoveTodo = (todoId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
        setTodoStatuses((prev) => {
            const newStatuses = { ...prev };
            delete newStatuses[todoId];
            return newStatuses;
        });
    };

    const handleToggleStatus = (todoId, isCompleted) => {
        setTodoStatuses((prev) => ({
            ...prev,
            [todoId]: isCompleted,
        }));
    };

    const handleClearCompleted = () => {
        const completedTodoIds = Object.entries(todoStatuses)
            .filter(([, isCompleted]) => isCompleted)
            .map(([id]) => parseFloat(id));

        setTodos((prevTodos) =>
            prevTodos.filter((todo) => !completedTodoIds.includes(todo.id))
        );

        setTodoStatuses((prev) => {
            const newStatuses = { ...prev };
            completedTodoIds.forEach((id) => delete newStatuses[id]);
            return newStatuses;
        });
    };

    const getFilteredTodos = () => {
        switch (filter) {
            case TODO_FILTERS.ACTIVE:
                return todos.filter((todo) => !todoStatuses[todo.id]);
            case TODO_FILTERS.COMPLETED:
                return todos.filter((todo) => todoStatuses[todo.id]);
            default:
                return todos;
        }
    };

    const stats = {
        total: todos.length,
        active: todos.filter((todo) => !todoStatuses[todo.id]).length,
        completed: todos.filter((todo) => todoStatuses[todo.id]).length,
    };

    const filteredTodos = getFilteredTodos();

    return (
        <div className="w-full">
            <AddTodo onAddTodo={handleAddTodo} />

            {todos.length > 0 && (
                <TodoFilter
                    currentFilter={filter}
                    onFilterChange={setFilter}
                    stats={stats}
                />
            )}

            {filteredTodos.length === 0 ? (
                <div className="text-center text-gray-500 py-8 bg-white rounded-lg border border-gray-200">
                    <div className="mb-2 text-4xl">
                        {todos.length === 0 ? "📝" : "🔍"}
                    </div>
                    <div className="text-lg font-medium mb-1">
                        {todos.length === 0
                            ? "Нема завдань"
                            : "Немає завдань за вибраним фільтром"}
                    </div>
                    <div className="text-sm text-gray-400">
                        {todos.length === 0
                            ? "Так додай"
                            : "Спробуй інший фільтр"}
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    {filteredTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onRemove={handleRemoveTodo}
                            onToggleStatus={handleToggleStatus}
                        />
                    ))}
                </div>
            )}

            <TodoStats stats={stats} onClearCompleted={handleClearCompleted} />
        </div>
    );
};

export default TodoList;
