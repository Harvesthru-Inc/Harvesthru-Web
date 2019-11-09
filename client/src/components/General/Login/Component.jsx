import React from "react";
import {
  FullPageFilter,
  FullPageLayer,
  LoginContainer
} from './styled';

class Login extends React.Component {
  state = {
    login: true
  };
  render() {
    return (
      <FullPageLayer>
        <FullPageFilter
          onClick={() => {
            this.props.closeLoginPanel();
          }}
        />
        {this.state.login ? <LoginContainer></LoginContainer> : null}
      </FullPageLayer>
    );
  }
}

export default Login;


