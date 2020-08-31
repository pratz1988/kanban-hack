import React from "react";
import Board from "./components/KanbanBoard";
import "./App.css";

function App() {
  return (
    <div className="App mainBoard">
      <h1> Kanban Board</h1>
      <Board />
    </div>
  );
}

export default App;
