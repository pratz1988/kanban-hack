import React, { Component } from "react";
import "./Board.css";
import TaskItems from "./TaskItems";

export default class Board extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("taskItems")) {
      const rawList = localStorage.getItem("taskItems");
      const parsedList = JSON.parse(rawList);
      this.state = { taskItems: parsedList };
      console.log("LS.." + this.state.taskItems[0]);
    } else {
      this.state = {
        taskItems: [
          {
            title: "Todo",
            id: 0,
            cards: [
              {
                taskTitle: "title",
                taskDescription: "task card 1 description",
                listNumber: 0,
                timeId: 1,
              },
              {
                taskTitle: "title",
                taskDescription: "task card 2 description",
                listNumber: 0,
                timeId: 1,
              },
            ],
          },
          {
            title: "In Progress",
            id: 1,
            cards: [
              {
                taskTitle: "title",
                taskDescription: "task card 3 description",
                listNumber: 1,
                timeId: 3,
              },
              {
                taskTitle: "title",
                taskDescription: "task card 4 description",
                listNumber: 1,
                timeId: 4,
              },
            ],
          },
          {
            title: "Done",
            id: 2,
            cards: [
              {
                taskTitle: "title",
                taskDescription: "task card 5 description",
                listNumber: 2,
                timeId: 5,
              },
              {
                taskTitle: "title",
                taskDescription: "task card 6 description",
                listNumber: 2,
                timeId: 6,
              },
            ],
          },
        ],
      };
    }

    localStorage.setItem("taskItems", JSON.stringify(this.state.taskItems));
  }

  render() {
    const taskItems = this.state.taskItems.map((taskItem, index) => (
      <li className="list-wrapper" key={index}>
        <TaskItems {...taskItem} />
      </li>
    ));
    return (
      <div className="board">
        <ul className="lists">{taskItems}</ul>
      </div>
    );
  }
}
