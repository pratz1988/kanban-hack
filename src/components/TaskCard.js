import React, { Component } from "react";
import "./TaskItems.css";
export default function TaskCard(props) {
  return (
    <div
      className="task-card"
      draggable="true"
      id={[props.timeId]}
      onDragStart={props.onDragStart}
    >
      <span className="deleteButton">
        {" "}
        <i class="fas fa-pencil-alt"></i> ✖️{" "}
      </span>
      <p className="taskCardTitle">
        {props.taskTitle}:{/* <span>🕚</span>  */}
      </p>
      <p> {props.taskDescription} </p>
    </div>
  );
}
