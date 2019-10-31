import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
