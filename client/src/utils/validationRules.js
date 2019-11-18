import { email, format, length, required } from 'redux-form-validators';

// Email validation
const emailFormat = email({ message: 'Wrong Email Format' });
const emailRequired = required({ message: 'Email is required' });

// Util Validation
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

// Password validation
const passwordFormat = format({
  with: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
  message: 'Must contain at least one uppercase letter, lowercase letter and digits'
});
const passwordLength = length({
  min: 8,
  message: {
    tooShort: 'Password is too short'
  }
});
const passwordRequired = required({ message: 'Password is required' });

export {
  composeValidators,
  emailFormat,
  emailRequired,
  passwordFormat,
  passwordLength,
  passwordRequired
};
