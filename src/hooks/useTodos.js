import { useState } from "react";
import { TODO_FILTERS } from "../utils/constants";

export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState(TODO_FILTERS.ALL);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now() + Math.random(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };

    const toggleTodo = (todoId) => {
        setTodos(
            todos.map((todo) =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const getFilteredTodos = () => {
        switch (filter) {
            case TODO_FILTERS.ACTIVE:
                return todos.filter((todo) => !todo.completed);
            case TODO_FILTERS.COMPLETED:
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const todoCount = {
        total: todos.length,
        active: todos.filter((todo) => !todo.completed).length,
        completed: todos.filter((todo) => todo.completed).length,
    };

    return {
        todos,
        filteredTodos: getFilteredTodos(),
        filter,
        todoCount,
        addTodo,
        removeTodo,
        toggleTodo,
        clearCompleted,
        setFilter,
    };
};
