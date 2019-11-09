import {
    email,
    required,
  } from 'redux-form-validators';

// Email validation
const emailFormat = email({ message: 'Wrong Email Format' });
const emailRequired = required({ message: 'Email is required' });

// Util Validation
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export {
    composeValidators,
    emailFormat,
    emailRequired
}
