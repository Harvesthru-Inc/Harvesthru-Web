import React, { Component } from 'react';

import { Col, Row } from '../../../lib/Grid';
import TextField from '../../../lib/TextField';
import { Margin } from '../../../Styles/utils';
import { Logo, Brand } from '../../../Styles/bases/Identity';

import { Form, Field } from 'react-final-form';
import { FullPageFilter, FullPageLayer, LoginContainer, LoginWrapper } from './styled';
import {
  composeValidators,
  emailFormat,
  emailRequired,
  passwordFormat,
  passwordLength,
  passwordRequired
} from '../../../utils/validationRules';

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
            <Brand>Harvesthru</Brand>
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Margin top={32} bottom={32}>
                    <Row justify="center">
                      <Col xs={9} lg={10}>
                        <Field
                          name="email"
                          validate={composeValidators(emailFormat, emailRequired)}
                          render={({ input, meta }) => (
                            <div>
                              <TextField
                                label="Email Address"
                                placeholder="You email address"
                                autoFocus={true}
                                {...input}
                                {...meta}
                              />
                              {meta.touched && meta.error}
                            </div>
                          )}
                        />
                      </Col>
                    </Row>
                  </Margin>
                  <Margin top={32} bottom={32}>
                    <Row justify="center">
                      <Col xs={9} lg={10}>
                        <Field
                          name="password"
                          // Note: the order of validators matter
                          validate={composeValidators(
                            passwordRequired,
                            passwordLength,
                            passwordFormat
                          )}
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField
                                label="Password"
                                placeholder="You password"
                                autoFocus={true}
                                {...input}
                                {...meta}
                              />
                              {meta.touched && meta.error}
                            </React.Fragment>
                          )}
                        />
                      </Col>
                    </Row>
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
