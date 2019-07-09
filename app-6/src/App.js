import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  constructor() {
    super()
    this.state = {
      thingToDo: "",
      todoList: []
    }
  }
  
  handleItem(e) {
    this.setState({thingToDo: e.target.value})
  }
  addItem() {
    let thing = this.state.thingToDo
    this.setState({todoList: [...this.state.todoList, thing]})
  }

  render() {
    return (
      <div className="App">
          <h1>My to-do List:</h1>
          <input className="inputItem" type="text" onChange={e => this.handleItem(e)}/>
          <button onClick={() => this.addItem()}>Add</button>
          <Todo todoArr={this.state.todoList}></Todo>

      </div>
    );
  }
}

export default App;
