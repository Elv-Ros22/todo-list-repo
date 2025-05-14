import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <div className="todo-form">
        <input
          type="text"
          value={newTask}
          style={{ padding: "5px" }}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />

        <button
          style={{
            backgroundColor: "lightgreen",
            color: "white",
            padding: "5px 10px",
            marginLeft: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <div className="todo-list">
        <h2 style={{ textAlign: "center" }}>Todos</h2>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}

              <button
                style={{
                  backgroundColor: task.completed ? "green" : "orange",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                onClick={() => toggleComplete(index)}
              >
                Done
              </button>
              <button
                style={{
                  backgroundColor: task.completed ? "red" : "red",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
