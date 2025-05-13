import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ContactFrom from "./components/ContactForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/todos"
          element={
            <Todo
              todos={todos}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          }
        />
        <Route path="/contact" element={<ContactFrom />} />
      </Routes>
    </>
  );
}
export default App;
