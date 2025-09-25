import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        if (inputValue.trim()) {
            onAddTodo(inputValue.trim());
            setInputValue("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="mb-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Додати завдання"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors cursor-pointer"
                >
                    Додати
                </button>
            </div>
        </div>
    );
};

export default AddTodo;
