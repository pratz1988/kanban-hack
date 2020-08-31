import React, { Component } from "react";
import "./AddNewTaskForm.css";
export default class AddNewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const newCard = this.textInput.value.trim();
    const newCardArray = newCard.split(",");
    const taskTitle = newCardArray[0];
    const taskDescription = newCardArray[1];
    const listNumber = this.props.formNum;
    if (taskDescription && this.props.onAdd) {
      this.props.onAdd(taskTitle, taskDescription, listNumber);
    }
    this.textInput.value = "";
  }

  setEditing(editing) {
    this.setState({
      editing,
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div className="open-add-button" onClick={() => this.setEditing(true)}>
          <div className="addNewCard">+</div>
        </div>
      );
    }
    return (
      <form className="card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          className="task-input"
          ref={(input) => (this.textInput = input)}
          aria-label="Add a task"
          placeholder="add task title, description"
        />
        <div>
          <button className="button add-button">Add Task</button>
          <button
            className="button cancel-button"
            onClick={() => this.setEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
