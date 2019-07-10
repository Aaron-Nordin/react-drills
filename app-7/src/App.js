// import React, { Component } from "react";
// import "./App.css";
// import Todo from "./components/Todo";
// import NewTask from "./components/NewTask";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       thingToDo: "",
//       todoList: []
//     };
//   }

//   tempItem = "";
//   handleItem(e) {
//     this.setState({ thingToDo: e.target.value });
//     this.tempItem = e.target.value;
//   }
//   // addItem() {
//   //   let thing = this.state.thingToDo
//   //   this.setState({todoList: [...this.state.todoList, thing]})
//   // }

//   render() {
//     return (
//       <div className="App">
//         <h1>My to-do List:</h1>
//         <input
//           className="inputItem"
//           type="text"
//           onChange={e => this.handleItem(e)}
//         />
//         <button onClick={() => {NewTask}}>Add</button>
//         <Todo todoArr={this.state.todoList} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import List from "./components/List";
import ToDo from "./components/Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;