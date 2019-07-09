import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image img={"http://calvinandhobbes.freehostia.com/oldsite/images/fakecomic.gif"}/>
      </div>
    );
  }
}

export default App;
