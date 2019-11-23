import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from '../../../lib/Grid';
import Button from '../../../lib/Button';
import TextField from '../../../lib/TextField';
import FieldError from '../../../lib/Feedback/FieldError';
import { Margin } from '../../../Styles/utils';
import { Logo, Brand } from '../../../Styles/bases/Identity';
import { PATH_FORGOT_PASSWORD, FB_APP_ID, FB_REDIRECT_URL } from '../../../static/constants/appPath';
import { Form, Field } from 'react-final-form';
import {
  dividerStyle,
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

import { Divider } from 'semantic-ui-react';

class Login extends Component {
  state = {
    login: true,
    emailAddress: '',
    password: ''
  };

  onSubmit = (val) => {
    return;
  };

  handleFBAuth = () => {
    console.log(FB_APP_ID);
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
            <LoginTitleWrapper>
              <Logo />
              <Brand>Harvesthru</Brand>
            </LoginTitleWrapper>
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Margin top={32} bottom={32}>
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
                  <Margin top={32} bottom={32}>
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
                        <FormHelperLink>
                          <Link to={PATH_FORGOT_PASSWORD}>Forgot your password?</Link>
                        </FormHelperLink>
                      </Col>
                      <Row justify="center">
                        <Col xs={11.2} lg={11.2}>
                          <Button
                            id="loginButton"
                            testid="loginButton"
                            type="submit"
                            colorType="green"
                            block
                            disabled={false}
                          >
                            Log In
                          </Button>
                        </Col>
                        <Col xs={11.2} lg={11.2}>
                          <Divider horizontal style={dividerStyle}>
                            or
                          </Divider>
                        </Col>
                        <Col xs={11.2} lg={11.2}>
                          <Button
                            id="loginButtonFacebook"
                            onClick={this.handleFBAuth}
                            testid="loginButtonFacebook"
                            type="submit"
                            colorType="facebook"
                            block
                            disabled={false}
                          >
                            Sign In with Facebook
                          </Button>
                        </Col>
                        <Col xs={11.2} lg={11.2}>
                          <Button
                            id="loginButtonGoogle"
                            testid="loginButtonGoogle"
                            type="submit"
                            colorType="google"
                            block
                            disabled={false}
                          >
                            Sign in with Google
                          </Button>
                        </Col>
                      </Row>
                      <Row justify="center">
                        <FormHelperLink
                          onClick={() => {
                            this.props.closeLoginPanel();
                            this.props.openSignupPanel();
                          }}
                        >
                          <a>Don't have an account?</a>
                        </FormHelperLink>
                      </Row>
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

// To Do(Dennis): to add prop types
