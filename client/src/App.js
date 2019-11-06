import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/";
import Login from "./components/authentication/Login.js";

class App extends React.Component {
  state = {
    isLoginOpen: false
  };

  openLoginPanel = () => {
    this.setState({ isLoginOpen: true });
  };

  closeLoginPanel = () => {
    this.setState({ isLoginOpen: false });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar openLoginPanel={this.openLoginPanel} />
            {this.state.isLoginOpen ? (
              <Login closeLoginPanel={this.closeLoginPanel} />
            ) : null}
            <Switch>
              <Route
                path="/"
                component={() => {
                  return <div></div>;
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
