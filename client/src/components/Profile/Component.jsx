import React from 'react';
import styled from 'styled-components';
import right_arrow from '../../assets/images/right_arrow.png';
import avatar_placeholder from '../../assets/images/avatar_placeholder.png';
import email_icon from '../../assets/images/email_icon.png';
import home_icon from '../../assets/images/home_icon.png';
import star_icon from '../../assets/images/star_icon.png';
import verified_icon from '../../assets/images/verified_icon.png';

import './scroll.css';

const NAV_HEIGHT = 100;
const DASHBOARD_WIDTH = 247;
const TEXT_COLOR = '#4A4A4A';
const BORDER_COLOR = '#BFB8B8';
const THEME_GREEN_COLOR = '#9acd00';
const SECTION_HEIGHT = 225;

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
            <PersonalInfoContainer>
              <Avatar src={avatar_placeholder}></Avatar>
              <AvatarText>Memeber since .....</AvatarText>
              <StatsContainer>
                <SingleStatContainer>
                  <StatNumber>--</StatNumber>
                  <StatLabel>listings</StatLabel>
                </SingleStatContainer>
                <SingleStatContainer>
                  <StatNumber>--</StatNumber>
                  <StatLabel>followers</StatLabel>
                </SingleStatContainer>
                <SingleStatContainer>
                  <StatNumber>--</StatNumber>
                  <StatLabel>following</StatLabel>
                </SingleStatContainer>
              </StatsContainer>
              <InfoListContainer>
                <InfoListItemContainer>
                  <InfoListItemIcon src={home_icon} />
                  <InfoListItemText>the location field</InfoListItemText>
                </InfoListItemContainer>
                <InfoListItemContainer>
                  <InfoListItemIcon src={email_icon} />
                  <InfoListItemText>the email field</InfoListItemText>
                </InfoListItemContainer>
                <InfoListItemContainer>
                  <InfoListItemIcon src={verified_icon} />
                  <InfoListItemText>verified/not verified</InfoListItemText>
                </InfoListItemContainer>
                <InfoListItemContainer>
                  <InfoListItemIcon src={star_icon} />
                  <InfoListItemText>--- Reviews</InfoListItemText>
                </InfoListItemContainer>
              </InfoListContainer>
            </PersonalInfoContainer>
            <SectionsContainer>
              <SectionContainer>
                <SectionTitle>About Me</SectionTitle>
                <SectionContent className="scroll">
                  Hi, my name is Sun. I am a master at helping grow crops! Come try some of my
                  produce sometimes. I especially love to grow strawberries and oranges.
                </SectionContent>
              </SectionContainer>
              <SectionContainer>
                <SectionTitle>Reviews</SectionTitle>
                <SectionContent className="scroll">
                  {[21, 32, 34, 242, 4, 2, 4, 2, 4, 2, 23].map(i => {
                    return (
                      <DummyReview>
                        Hi, my name is Sun. I am a master at helping grow crops! Come try some of my
                        produce sometimes. I especially love to grow strawberries and oranges.
                      </DummyReview>
                    );
                  })}
                </SectionContent>
              </SectionContainer>
            </SectionsContainer>
          </MainContainer>
        </ProfileMainContainer>
      </FullPageLayer>
    );
  }
}
const DummyReview = styled.div`
  margin-bottom: 15px;
`;

const SectionContainer = styled.div`
  display: block;
`;

const SectionTitle = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */

  color: ${TEXT_COLOR};
`;

const SectionContent = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  padding: 16px 24px 16px 24px;
  color: ${TEXT_COLOR};
  height: ${SECTION_HEIGHT}px;
  overflow-y: scroll;
`;

const InfoListContainer = styled.div`
  width: 200px;
  margin-top: 40px;
`;

const InfoListItemIcon = styled.img`
  width: 18px;
  height: 18px;
  display: inline-block;
`;

const InfoListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const InfoListItemText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: {TEXT_COLOR};
  margin-left: 19px;
  display: inline-block;
`;

const StatsContainer = styled.div`
  width: 290px;
  height: 50px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SingleStatContainer = styled.div`
  text-align: center;
`;

const StatLabel = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: ${TEXT_COLOR};
`;

const StatNumber = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */

  color: ${TEXT_COLOR};
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 40px;
  margin-bottom: 15px;
  border-radius: 50%;
`;

const AvatarText = styled.div`
  width: 196px;
  height: 19px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${TEXT_COLOR};
`;

const SectionsContainer = styled.div`
  width: 65%;
  padding: 40px 40px 0px 40px;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const PersonalInfoContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 40px 0px 40px;
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
  position: fixed;
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
