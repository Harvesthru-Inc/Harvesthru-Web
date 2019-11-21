import React from 'react';
import styled from 'styled-components';
import right_arrow from '../../assets/images/right_arrow.png';
import avatar_placeholder from '../../assets/images/avatar_placeholder.png';

const NAV_HEIGHT = 100;
const DASHBOARD_WIDTH = 247;
const TEXT_COLOR = '#4A4A4A';
const BORDER_COLOR = '#BFB8B8';
const THEME_GREEN_COLOR = '#9acd00';
const PERSONAL_INFO_WIDTH = 300;

class Profile extends React.Component {
  renderDashboardLinks = links => {
    // link: {text: string, callback: function}
    return links.map(link => {
      return (
        <DashboardItem
          onClick={() => {
            link.callback(link.text);
          }}
        >
          <DashboardText>{link.text}</DashboardText>
          <RightArrow src={right_arrow} />
        </DashboardItem>
      );
    });
  };
  render() {
    const dummyFunction = text => {
      console.log(`jump to ${text}`);
    };
    const links = [
      { text: 'My Profile', callback: dummyFunction },
      { text: 'My Listing', callback: dummyFunction },
      { text: 'Billing', callback: dummyFunction },
      { text: 'Settings', callback: dummyFunction },
      { text: 'Log Out', callback: dummyFunction }
    ];

    return (
      <FullPageLayer>
        <DashboardContainer>
          <DashboardTitleBox>
            <DashboardTitle>My Dashboard</DashboardTitle>
          </DashboardTitleBox>
          {this.renderDashboardLinks(links)}
        </DashboardContainer>
        <ProfileMainContainer>
          <TopBar>
            <WelcomeMessage>{`Welcome, Sun!`}</WelcomeMessage>
            <ViewAndEditProfile>
              <GreenText>View Public Profile</GreenText>
              <Divider />
              <GreenText>Edit Profile</GreenText>
            </ViewAndEditProfile>
          </TopBar>
          <MainContainer>
            <PersonalInfoContainer>personal info</PersonalInfoContainer>
            <SectionsContainer>the sections we want</SectionsContainer>
          </MainContainer>
        </ProfileMainContainer>
      </FullPageLayer>
    );
  }
}

const SectionsContainer = styled.div`
  width: 60%;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const PersonalInfoContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Divider = styled.div`
  width: 25px;
  height: 0px;
  border: 1px solid #999988;
  transform: translateY(8px) rotate(90deg);
`;

const ViewAndEditProfile = styled.div`
  height: 20px;
  display: flex;
`;

const GreenText = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  color: ${THEME_GREEN_COLOR};
`;

const WelcomeMessage = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
`;

const TopBar = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

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
  padding: 40px 60px;
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
