import React, { Component } from "react";
import TaskCard from "./TaskCard";
import AddNewTaskForm from "./AddNewTaskForm.js";
import "./TaskItems.css";

export default class TaskItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <li key={index}>
          <TaskCard {...card} onDragStart={this.props.onDragStart} />
        </li>
      );
    });

    return (
      <div>
        <h2 className={`title-header titleHeader-${this.props.id}`}>
          {this.props.title}
        </h2>
        <ul
          className="taskCards"
          onDragOver={this.props.onDragOver}
          onDrop={this.props.onDrop}
        >
          {cards}
          <li>
            <AddNewTaskForm formNum={this.props.id} onAdd={this.props.onAdd} />
          </li>
        </ul>
      </div>
    );
  }
}
