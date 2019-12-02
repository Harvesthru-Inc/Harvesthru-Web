import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navigation';
import Login from './components/General/Login';
import Signup from './components/General/Signup';
import Profile from './components/Profile'; // only for testing purpose
import NormalizeStyle from './Styles/bases/Normalize';
import 'semantic-ui-css/semantic.min.css';
import ForgotPassword from './components/General/ForgotPassword';

class App extends React.Component {
  state = {
    isLoginOpen: false,
    isForgotPasswordOpen: false
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

  openForgotPasswordPanel = () => {
    this.setState({
      isForgotPasswordOpen: true,
      isLoginOpen: false
    });
  };

  closeForgotPasswordPanel = () => {
    this.setState({ isForgotPasswordOpen: false });
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
                openForgotPasswordPanel={this.openForgotPasswordPanel}
              />
            ) : null}

            {this.state.isSignupOpen ? (
              <Signup
                closeSignupPanel={this.closeSignupPanel}
                openLoginPanel={this.openLoginPanel}
              />
            ) : null}

            {this.state.isForgotPasswordOpen ? (
              <ForgotPassword
                closeForgotPasswordPanel={this.closeForgotPasswordPanel}
                openForgotPasswordPanel={this.openForgotPasswordPanel}
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
