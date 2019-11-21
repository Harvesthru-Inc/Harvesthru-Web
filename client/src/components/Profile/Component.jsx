import React from 'react';
import styled from 'styled-components';
import right_arrow from '../../assets/images/right_arrow.png';

const NAV_HEIGHT = 100;
const DASHBOARD_WIDTH = 247;
const TEXT_COLOR = '#4A4A4A';
const BORDER_COLOR = '#BFB8B8';

class Profile extends React.Component {
  render() {
    return (
      <FullPageLayer>
        <DashboardContainer>
          <DashboardTitleBox>
            <DashboardTitle>My Dashboard</DashboardTitle>
          </DashboardTitleBox>
          <DashboardItem>
            <DashboardText>My Profile</DashboardText>
            <RightArrow src={right_arrow} />
          </DashboardItem>
        </DashboardContainer>
        <ProfileMainContainer></ProfileMainContainer>
      </FullPageLayer>
    );
  }
}

const RightArrow = styled.img`
  width: 27px;
  height: 27px;
`;

const DashboardTitle = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  /* identical to box height */

  color: ${TEXT_COLOR};
`;

const DashboardText = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  color: #000000;
`;

const DashboardItem = styled.div`
  padding: 20px 10px 20px 32px;
  width: ${DASHBOARD_WIDTH}px;
  border-bottom: 1px solid ${BORDER_COLOR};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DashboardTitleBox = styled.div`
  padding: 20px 35px 20px 32px;
  width: ${DASHBOARD_WIDTH}px;
  border-bottom: 1px solid ${BORDER_COLOR};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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

const DashboardContainer = styled.div`
  position: absolute;
  width: ${DASHBOARD_WIDTH}px;
  left: 0px;
  top: ${NAV_HEIGHT}px;
  bottom: 0px;

  background: #ffffff;
  border: 1px solid ${BORDER_COLOR};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export default Profile;
