import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navigation';
import Login from './components/General/Login';
import Signup from './components/General/Signup';
import Profile from './components/Profile'; // only for testing purpose
import NormalizeStyle from './Styles/bases/Normalize';
import 'semantic-ui-css/semantic.min.css';

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

  openSignupPanel = () => {
    this.setState({ isSignupOpen: true });
  };

  closeSignupPanel = () => {
    this.setState({ isSignupOpen: false });
  };
  render() {
    return (
      <div className="App">
        <NormalizeStyle />
        <BrowserRouter>
          <div>
            <Navbar openLoginPanel={this.openLoginPanel} />
            {this.state.isLoginOpen ? (
              <Login
                closeLoginPanel={this.closeLoginPanel}
                openSignupPanel={this.openSignupPanel}
              />
            ) : null}
            {this.state.isSignupOpen ? (
              <Signup
                closeSignupPanel={this.closeSignupPanel}
                openLoginPanel={this.openLoginPanel}
              />
            ) : null}
            <Switch>
              <Route
                exact
                path="/"
                component={() => {
                  return <div></div>;
                }}
              />
              <Route
                exact
                path="/profile"
                component={() => {
                  return <Profile />;
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
