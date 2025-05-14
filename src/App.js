import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ContactFrom from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/contact" element={<ContactFrom />} />
      </Routes>
    </div>
  );
}
export default App;
