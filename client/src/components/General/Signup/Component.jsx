import React, { Component } from 'react';
import { Col, Row } from '../../../lib/Grid';
import Button from '../../../lib/Button';
import TextField from '../../../lib/TextField';
import FieldError from '../../../lib/Feedback/FieldError';
import { Margin } from '../../../Styles/utils';
import { Logo, Brand } from '../../../Styles/bases/Identity';
import { Form, Field } from 'react-final-form';
import {
  FormHelperLink,
  FullPageFilter,
  FullPageLayer,
  LoginContainer,
  LoginTitleWrapper
} from './styled';

import {
  composeValidators,
  emailFormat,
  emailRequired,
  passwordFormat,
  passwordLength,
  passwordRequired
} from '../../../utils/validationRules';

class Signup extends Component {
  state = {
    signup: true,
    emailAddress: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit = (val) => {
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
            this.props.closeSignupPanel();
          }}
        />
        {this.state.signup ? (
          <LoginContainer>
            <LoginTitleWrapper>
              <Logo />
              <Brand>Harvesthru</Brand>
            </LoginTitleWrapper>
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Margin top={30} bottom={15}>
                    <Row justify="center">
                      <Col xs={12} lg={12}>
                        <Field
                          name="email"
                          type="text"
                          validate={composeValidators(emailFormat, emailRequired)}
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField
                                label="Email Address"
                                placeholder="You email address"
                                autoFocus={false}
                                {...input}
                                {...meta}
                              />
                              {meta.touched && <FieldError>{meta.error}</FieldError>}
                            </React.Fragment>
                          )}
                        />
                      </Col>
                    </Row>
                  </Margin>
                  <Margin top={15} bottom={15}>
                    <Row justify="center">
                      <Col xs={12} lg={12}>
                        <Field
                          name="password"
                          type="password"
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
                                autoFocus={false}
                                {...input}
                                {...meta}
                              />
                              {meta.touched && <FieldError>{meta.error}</FieldError>}
                            </React.Fragment>
                          )}
                        />
                      </Col>
                    </Row>
                  </Margin>
                  <Margin top={25} bottom={15}>
                    <Row justify="center">
                      <Col xs={12} lg={12}>
                        <Field
                          name="password"
                          type="password"
                          // Note: the order of validators matter
                          validate={composeValidators(
                            passwordRequired,
                            passwordLength,
                            passwordFormat
                          )}
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField
                                label="Confirm Password"
                                placeholder="Your password"
                                autoFocus={false}
                                {...input}
                                {...meta}
                              />
                              {meta.touched && <FieldError>{meta.error}</FieldError>}
                            </React.Fragment>
                          )}
                        />
                      </Col>
                      <Col xs={12} lg={12}>
                        <Margin top={30}>
                          <Button
                            id="loginButton"
                            testid="loginButton"
                            type="submit"
                            colorType="green"
                            block
                            disabled={false}
                          >
                            Sign Up
                          </Button>
                        </Margin>
                      </Col>

                      <Col xs={11.2} lg={11.2}>
                        <Margin top={15}>
                          <Row justify="center">
                            <FormHelperLink
                              onClick={() => {
                                this.props.closeSignupPanel();
                                this.props.openLoginPanel();
                              }}
                            >
                              <a>Already known us?</a>
                            </FormHelperLink>
                          </Row>
                        </Margin>
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

export default Signup;

// To Do(Dennis): to add prop types
