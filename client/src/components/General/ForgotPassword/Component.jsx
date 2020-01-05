import React, { Component } from 'react';
import { Col, Row } from '../../../lib/Grid';
import Button from '../../../lib/Button';
import TextField from '../../../lib/TextField';
import FieldError from '../../../lib/Feedback/FieldError';
import { Margin } from '../../../Styles/utils';
import { Logo, Brand } from '../../../Styles/bases/Identity';
import { Form, Field } from 'react-final-form';
import {
  FullPageFilter,
  FullPageLayer,
  LoginContainer,
  LoginTitleWrapper
} from './styled';

import {
  composeValidators,
  emailFormat,
  emailRequired,
} from '../../../utils/validationRules';

import { withRouter } from 'react-router-dom';

class ForgotPassword extends Component {
  state = {
    emailAddress: '',
  };

  onSubmit = ({ email }) => {
    this.setState({ emailAddress: email });
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
            this.props.closeForgotPasswordPanel();
          }}
        />

        <LoginContainer>
          <LoginTitleWrapper>
            <Logo />
            <Brand>Harvesthru</Brand>
          </LoginTitleWrapper>

          <Margin top={32} bottom={32}>
            <p>We will send you a link to reset your password!</p>
          </Margin>

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
                      <Button
                        id="loginButton"
                        testid="loginButton"
                        type="submit"
                        colorType="green"
                        block
                      >
                        Reset Password
                      </Button>
                    </Col>
                  </Row>
                </Margin>
              </form>
            )}
          />
        </LoginContainer>
      </FullPageLayer>
    );
  }
}

export default withRouter(ForgotPassword);
