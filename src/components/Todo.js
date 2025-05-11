import React from "react";

function Todo() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "darkblue" }}>My To-Do List</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Add a new task"
          style={{
            padding: "5px",
          }}
        />
        <button
          style={{
            padding: "5px 10px",
            marginLeft: "5px",
            backgroundColor: "darkblue",
            color: "white",
            border: "none",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
    </div>
  );
}

export default Todo;
