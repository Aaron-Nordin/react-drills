import React, { Component } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton"

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
    }
  }

  handleUser(e) {
    this.setState({username: e.target.value})
  }
  handlePass(e) {
    this.setState({password: e.target.value})
  }
  alert = () => {
    let user = this.state.username
    let pass = this.state.password
    alert(`Username: ${user} Password: ${pass}`)

  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.handlePass(e)}/>
        <input type="text" onChange={e => this.handleUser(e)}/>
        <LoginButton alert={this.alert}/>
      </div>
    );
  }
}

export default App;
