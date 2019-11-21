import React from 'react';
import styled from 'styled-components';

const NAV_HEIGHT = 100;
const DASHBOARD_WIDTH = 247;

class Profile extends React.Component {
  render() {
    return (
      <FullPageLayer>
        <DashBoardContainer>DashBoard</DashBoardContainer>
        <ProfileMainContainer></ProfileMainContainer>
      </FullPageLayer>
    );
  }
}

const ProfileMainContainer = styled.div`
  position: absolute;
  left: ${DASHBOARD_WIDTH}px;
  right: 0;
  bottom: 0;
  top: ${NAV_HEIGHT}px;
`;

const FullPageLayer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: ${NAV_HEIGHT}px;
`;

const DashBoardContainer = styled.div`
  position: absolute;
  width: ${DASHBOARD_WIDTH}px;
  left: 0px;
  top: ${NAV_HEIGHT}px;
  bottom: 0px;

  background: #ffffff;
  border: 1px solid #bfb8b8;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export default Profile;
