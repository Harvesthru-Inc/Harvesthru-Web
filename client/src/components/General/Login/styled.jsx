import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FullPageLayer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeInAnimation = keyframes`${fadeIn}`;
const FullPageFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: 0.8s ${fadeInAnimation};
`;

const fadeInDownAnimation = keyframes`${fadeIn}`;
const LoginContainer = styled.div`
  width: 450px;
  height: 600px;
  position: absolute;
  padding: 50px 20px;
  text-align: center;
  border-radius: 8px;
  opacity: 0.95;
  background: white;
  animation: 0.8s ${fadeInDownAnimation};
`;

const LoginWrapper = styled.div`
  display: flex;
  align: center;
  justify: center;
`;

export {
  FullPageLayer,
  fadeInAnimation,
  FullPageFilter,
  fadeInDownAnimation,
  LoginContainer,
  LoginWrapper
};
