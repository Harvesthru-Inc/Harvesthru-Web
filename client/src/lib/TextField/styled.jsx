import styled, { css } from "styled-components";

const InputWrapper = styled.input`
  padding: 16px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #e7ebf2;
  min-height: 38px;
  font-size: 14px;
  width: 100%;
  transition: all ease-in-out 0.4s;
  &:focus,
  &:active {
    border: 1px solid #76bbe3;
  }
  ${props =>
    props.error &&
    (props.touched &&
      css`
        border: 1px solid #b72814;
      `)}
`;

const InputLabel = styled.label`
  color: #000000;
  display: block;
  text-align: left;
  line-height: 22px
  margin-left: 4px;
  margin-bottom: 16px;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export { InputWrapper, InputLabel };
