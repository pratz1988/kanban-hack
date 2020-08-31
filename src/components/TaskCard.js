import React, { Component } from "react";
import "./TaskItems.css";
export default function TaskCard(props) {
  return (
    <div className="task-card">
      <p className="taskCardTitle">{props.taskTitle}:</p>
      <p> {props.taskDescription} </p>
    </div>
  );
}
