import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { NewTask } from "./components/NewTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      thingToDo: "",
      todoList: []
    };
  }

  tempItem = "";
  handleItem(e) {
    this.setState({ thingToDo: e.target.value });
    this.tempItem = e.target.value;
  }
  // addItem() {
  //   let thing = this.state.thingToDo
  //   this.setState({todoList: [...this.state.todoList, thing]})
  // }

  render() {
    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <input
          className="inputItem"
          type="text"
          onChange={e => this.handleItem(e)}
        />
        <button onClick={() => {NewTask}}>Add</button>
        <Todo todoArr={this.state.todoList} />
      </div>
    );
  }
}

export default App;
