import React, { Component } from "react";
import "./KanbanBoard.css";
import TaskItems from "./TaskItems";

export default class Board extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("taskItems")) {
      const localStorageList = localStorage.getItem("taskItems");
      const parsedList = JSON.parse(localStorageList);
      this.state = { taskItems: parsedList };
      console.log("LS..", this.state.taskItems[0]);
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
    //Function to update taskItems in localStorage
    function updateTaskItems(updatedTaskItems) {
      const taskItems = JSON.parse(localStorage.getItem("taskItems"));
      Object.keys(updatedTaskItems).forEach((key) => {
        taskItems[key] = updatedTaskItems[key];
        console.log(key);
      });
    }
    updateTaskItems(this.state.taskItems);
    localStorage.setItem("taskItems", JSON.stringify(this.state.taskItems));
  }

  //Adding new taskcards to the taskItems List
  addTaskCard(taskTitle, taskDescription, listNumber) {
    const localStorageList = localStorage.getItem("taskItems");
    const parsedList = JSON.parse(localStorageList);

    const newTaskCard = {
      taskTitle,
      taskDescription,
      listNumber,
      timeId: new Date().valueOf(),
    };
    parsedList[listNumber].cards.push(newTaskCard);

    this.setState({
      taskItems: parsedList,
    });
    localStorage.setItem("taskItems", JSON.stringify(parsedList));
  }

  // Getting a listNumber of OnDraging a Taskcard
  onDragStart = (e, fromList) => {
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList,
    };
    localStorage.setItem("dragInfo", JSON.stringify(dragInfo));
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e, listNum) => {
    const droppedTask = localStorage.getItem("dragInfo");
    const localStorageList = localStorage.getItem("taskItems");
    const parsedList = JSON.parse(localStorageList);
    const parsedDragInfo = JSON.parse(droppedTask);

    const cardsArray = parsedList[parsedDragInfo.fromList].cards;
    const taskCard = cardsArray.find(
      (card) => card.timeId == parsedDragInfo.taskId
    );
    const indexOfCard = cardsArray.findIndex(
      (card) => card.timeId == parsedDragInfo.taskId
    );
    parsedList[parsedDragInfo.fromList].cards.splice(indexOfCard, 1);
    parsedList[listNum].cards.push({
      ...taskCard,
      listNumber: parseInt(listNum),
    });

    //sync the state and localStorage
    this.setState({
      taskItems: parsedList,
    });
    localStorage.setItem("taskItems", JSON.stringify(parsedList));
  };

  render() {
    const taskItems = this.state.taskItems.map((taskItem, index) => (
      <li className="list-wrapper" key={index}>
        <TaskItems
          {...taskItem}
          onAdd={(taskTitle, taskDescription, listNumber) =>
            this.addTaskCard(taskTitle, taskDescription, listNumber)
          }
          onDragStart={(e, fromList) => this.onDragStart(e, `${taskItem.id}`)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e, listNum) => {
            this.onDrop(e, `${taskItem.id}`);
          }}
        />
      </li>
    ));
    return (
      <div className="board">
        <ul className="lists">{taskItems}</ul>
      </div>
    );
  }
}
