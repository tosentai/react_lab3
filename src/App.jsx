import React from "react";
import Layout from "./components/layout/Layout";
import TodoList from "./components/todo/TodoList";

const App = () => {
    return (
        <Layout title="To-Do List">
            <TodoList />
        </Layout>
    );
};

export default App;
