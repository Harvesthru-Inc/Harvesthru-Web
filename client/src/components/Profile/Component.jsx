import React from 'react';
import right_arrow from '../../assets/images/right_arrow.png';
import avatar_placeholder from '../../assets/images/avatar_placeholder.png';
import email_icon from '../../assets/images/email_icon.png';
import home_icon from '../../assets/images/home_icon.png';
import star_icon from '../../assets/images/star_icon.png';
import verified_icon from '../../assets/images/verified_icon.png';

import './scroll.css';

import {
  DummyReview,
  SectionContainer,
  SectionTitle,
  SectionContent,
  InfoListContainer,
  InfoListItemIcon,
  InfoListItemContainer,
  InfoListItemText,
  StatsContainer,
  SingleStatContainer,
  StatLabel,
  StatNumber,
  Avatar,
  AvatarText,
  SectionsContainer,
  MainContainer,
  PersonalInfoContainer,
  Divider,
  ViewAndEditProfile,
  GreenText,
  WelcomeMessage,
  TopBar,
  RightArrow,
  DashboardTitle,
  DashboardText,
  DashboardItem,
  DashboardTitleBox,
  ProfileMainContainer,
  FullPageLayer,
  DashboardContainer
} from './styled.jsx';

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
export default Profile;
