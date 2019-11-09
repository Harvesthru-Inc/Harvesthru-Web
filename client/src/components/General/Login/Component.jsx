import React, {Component} from 'react';

// import {Col, Row} from '../../../lib/Grid';
import TextField from '../../../lib/TextField';
import { Margin } from '../../../lib/Styles/utils';

import { Form, Field } from 'react-final-form';
import { FullPageFilter, FullPageLayer, LoginContainer, Logo } from './styled';
import { emailFormat, emailRequired } from '../../../utils/validationRules';
import {composeValidators} from '../../../utils/validationRules'

class Login extends Component {
  state = {
    login: true,
    emailAddress: '',
    password: ''
  };

  onSubmit = val => {
    return;
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      value
    });
  };

  render() {
    return (
      <FullPageLayer>
        <FullPageFilter
          onClick={() => {
            this.props.closeLoginPanel();
          }}
        />
        {this.state.login ? (
          <LoginContainer>
            <Logo />
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <h5>Complete Your Investment</h5>
                  <Margin top={40}>
                    <h6>Investment Amount</h6>
                  </Margin>
                  <Margin top={10} bottom={32}>
                    <Margin top={5}>
                      <small>Minimum 10 Dai</small>
                    </Margin>
                  </Margin>
                  <Margin top={32} bottom={32}>
                    <Field
                      name="Email Address"
                      validate={composeValidators(emailFormat, emailRequired)}
                      render={({ input, meta }) => (
                        <div>
                          <TextField
                            label="Email"
                            placeholder="Email Address"
                            autoFocus={true}
                            {...input}
                            {...meta}
                          />
                          {meta.touched && meta.error}
                        </div>
                      )}
                    />
                  </Margin>
                </form>
              )}
            />
          </LoginContainer>
        ) : null}
      </FullPageLayer>
    );
  }
}

export default Login;
