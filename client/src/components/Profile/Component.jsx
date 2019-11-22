import React from 'react';
import right_arrow from '../../assets/images/right_arrow.png';
import avatar_placeholder from '../../assets/images/avatar_placeholder.png';
import email_icon from '../../assets/images/email_icon.png';
import home_icon from '../../assets/images/home_icon.png';
import star_icon from '../../assets/images/star_icon.png';
import verified_icon from '../../assets/images/verified_icon.png';
import edit_icon from '../../assets/images/edit_icon.png';
import styled from 'styled-components';
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
  renderGridNavLinks = links => {
    // link: {text: string, callback: function}
    return links.map(link => {
      return (
        <GridNavItem
          onClick={() => {
            link.callback(link.text);
          }}
        >
          {link.text}
        </GridNavItem>
      );
    });
  };
  render() {
    const dummyFunction = text => {
      console.log(`jump to ${text}`);
    };
    const links = [
      { text: 'Listing', callback: dummyFunction },
      { text: 'Reviews', callback: dummyFunction },
      { text: 'Posts', callback: dummyFunction },
      { text: 'Tagged', callback: dummyFunction }
    ];

    return (
      <FullPageLayer>
        <ProfileMainContainer>
          <MainContainer>
            <PersonalInfoContainer>
              <EditButtonRow>
                <EditButton className="edit-button">
                  <EditIcon src={edit_icon} />
                  Edit Profile
                </EditButton>
              </EditButtonRow>
              <Avatar src={avatar_placeholder}></Avatar>
              <NameText>Mister Sun</NameText>
              <AvatarText>Memeber since .....</AvatarText>
              <FollowsContainer>
                <Followers>
                  <FollowsNumber>--</FollowsNumber>
                  <FollowsLabel>Followers</FollowsLabel>
                </Followers>
                <Following>
                  <FollowsNumber>--</FollowsNumber>
                  <FollowsLabel>Following</FollowsLabel>
                </Following>
              </FollowsContainer>
              <Description>
                Hi, my name is Sun. I am a master at helping grow crops! Come try some of my produce
                sometimes.
              </Description>
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
              <GridNav>{this.renderGridNavLinks(links)}</GridNav>
              <SeeAll>See All ></SeeAll>
              <GridContainer className="scroll">
                {[1, 3, 42, 4, 2, 4, 2, 4, 2, 3].map(i => {
                  return <GridItemContainer></GridItemContainer>;
                })}
              </GridContainer>
            </SectionsContainer>
          </MainContainer>
        </ProfileMainContainer>
      </FullPageLayer>
    );
  }
}

const GridScroller = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const GridItemContainer = styled.div`
  width: 360px;
  height: 200px;
  background: #c4c4c4;
  border-radius: 8px;
`;

const GridContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-auto-flow: column;
  grid-row-gap: 50px;
  overflow-y: scroll;
  height: 800px;
`;

const SeeAll = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #9acd00;
  width: 100%;
  text-align: right;
`;

const GridNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const GridNavItem = styled.div`
  display: inline-block;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: #4a4a4a;
  cursor: pointer;
`;

const EditIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

const EditButton = styled.div`
  border: 1px solid #9acd00;
  box-sizing: border-box;
  border-radius: 24px;
  width: 127px;
  height: 32px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding-top: 5px;
  padding-left: 12px;
  cursor: pointer;
  color: #9acd00;
`;

const EditButtonRow = styled.div`
  width: 285px;
  display: flex;
  justify-content: flex-end;
`;

const FollowsContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Followers = styled.div`
  display: inline-block;
`;

const Following = styled.div`
  display: inline-block;
`;

const FollowsLabel = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: inline-block;
  color: #4a4a4a;
`;

const FollowsNumber = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: inline-block;
  color: #4a4a4a;
`;

const Description = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  width: 228px;
  color: #4a4a4a;
  margin: 18px 0px 16px 0px;
`;

const NameText = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  /* identical to box height */

  color: #4a4a4a;
`;

export default Profile;
