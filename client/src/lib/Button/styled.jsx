import styled, { css } from "styled-components";
import Color from '../../Styles/bases/Color';

const ButtonWrapper = styled.button`
  border-radius: 10px;
  display: inline-block;
  padding: 8px 16px;
  min-width: 100px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  color: white;
  width: 100%;
  line-height: 22px;
  transition: all ease-in-out 0.2s;
  color: black;
  border: 1px solid #e7ebf2;
  background-color: white;
  &:hover {
    background-color: #e7ebf2;
  }

  ${props =>
    props.colorType === "google" &&
    css`
      a {
        color: white;
      }
      background-color: ${Color.white};
      border: 1px solid ${Color.black};
      box-shadow: 0 2px 0 ${Color.white}, 1px 3px 6px ${Color.white};
      color: ${Color.black};
      &:hover {
        background-color: ${Color.green};
      }
    `}
  ${props =>
    props.colorType === "facebook" &&
    css`
      a {
        color: white;
      }
      background-color: ${Color.darkBlue};
      border: 2px solid ${Color.darkBlue};
      color: ${Color.white};
      &:hover {
        background-color: ${Color.darkBlue};
      }
    `}

  ${props =>
    props.colorType === "green" &&
    css`
      a {
        color: white;
      }
      background-color: ${Color.green};
      color: ${Color.white};
      &:hover {
        border: 2px solid ${Color.green};
      }
    `}
`;

export { ButtonWrapper };

