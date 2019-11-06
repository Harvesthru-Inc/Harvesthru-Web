import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={<div>adsfasd</div>} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
