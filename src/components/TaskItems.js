import React, { Component } from "react";
import TaskCard from "./TaskCard";
import "./TaskItems.css";

export default class TaskItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <li key={index}>
          <TaskCard {...card} />
        </li>
      );
    });

    return (
      <div>
        <h2 className={`title-header titleHeader-${this.props.id}`}>
          {this.props.title}
        </h2>
        <ul className="taskCards">{cards}</ul>
      </div>
    );
  }
}
