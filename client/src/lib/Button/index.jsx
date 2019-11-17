/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styled';

const propTypes = {
  id: PropTypes.string,
  testid: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  colorType: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object
};

const defaultProps = {
  id: '',
  testid: '',
  children: '',
  type: '',
  colorType: '',
  block: false,
  outline: false,
  disabled: false,
  onClick: null,
  className: null,
  loading: false,
  size: null,
  style: null
};

const Button = ({
  id,
  testid,
  children,
  type,
  block,
  colorType,
  outline,
  disabled,
  onClick,
  className,
  style,
  size
}) => (
  <ButtonWrapper
    id={id}
    data-testid={testid}
    type={type}
    colorType={colorType}
    block={block}
    outline={outline}
    disabled={disabled}
    onClick={onClick}
    className={className}
    style={style}
    size={size}
  >
    {children}
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
