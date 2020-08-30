import React, { Component } from "react";

export default class TaskItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul className="list">
          {this.props.cards.map((card, index) => {
            return (
              <li key={index}>
                {" "}
                {console.log("cards...", card.taskTitle)}
                <p>{card.taskTitle}</p>
                <p>{card.taskDescription}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
