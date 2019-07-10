// import React, { Component } from "react";

// export default class NewTask extends Component {
//     addTask = () => {
        
//     }
    
//     render() {
//         return (
//             <button onClick={() => this.addTask()}>Add</button>
//         )
//     }
// }
// // let arr = []
// // const NewTask = () => {
// //   let thing = this.tempItem;
// //   arr = [...arr, thing];
// // };

import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;