import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navigation';
import Login from './components/General/Login';
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
  render() {
    return (
      <div className="App">
        <NormalizeStyle />
        <BrowserRouter>
          <div>
            <Navbar openLoginPanel={this.openLoginPanel} />
            {this.state.isLoginOpen ? <Login closeLoginPanel={this.closeLoginPanel} /> : null}
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
