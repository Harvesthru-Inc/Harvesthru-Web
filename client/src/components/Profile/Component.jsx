import React from 'react';
import avatar_placeholder from '../../assets/images/avatar_placeholder.png';
import email_icon from '../../assets/images/email_icon.png';
import home_icon from '../../assets/images/home_icon.png';
import star_icon from '../../assets/images/star_icon.png';
import verified_icon from '../../assets/images/verified_icon.png';
import edit_icon from '../../assets/images/edit_icon.png';
import './scroll.css';

import {
  InfoListContainer,
  InfoListItemIcon,
  InfoListItemContainer,
  InfoListItemText,
  Avatar,
  AvatarText,
  SectionsContainer,
  MainContainer,
  PersonalInfoContainer,
  ProfileMainContainer,
  FullPageLayer,
  GridItemContainer,
  GridContainer,
  SeeAll,
  GridNav,
  GridNavItem,
  EditIcon,
  EditButton,
  EditButtonRow,
  FollowsContainer,
  Followers,
  Following,
  FollowsLabel,
  FollowsNumber,
  Description,
  NameText,
  SmallerWindowWrapper,
  EditButton2,
  GridNavContainer
} from './styled.jsx';

class Profile extends React.Component {
  renderGridNavLinks = links => {
    // link: {text: string, callback: function}
    return links.map(link => {
      return (
        <GridNavItem
          key={(Math.random())}
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
              <div>
                <SmallerWindowWrapper>
                  <EditButton className="edit-button">
                    <EditIcon src={edit_icon} />
                    Edit Profile
                  </EditButton>
                </SmallerWindowWrapper>
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
                  Hi, my name is Sun. I am a master at helping grow crops! Come try some of my
                  produce sometimes.
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
              </div>
              <EditButton2 className="edit-button">
                <EditIcon src={edit_icon} />
                Edit Profile
              </EditButton2>
            </PersonalInfoContainer>
            <SectionsContainer>
              <GridNavContainer>
                <GridNav>{this.renderGridNavLinks(links)}</GridNav>
              </GridNavContainer>

              <SeeAll>See All ></SeeAll>
              <GridContainer className="scroll">
                {[1, 3, 42, 4, 2, 4, 2, 4, 2, 3].map(i => {
                  return <GridItemContainer key={(Math.random())}></GridItemContainer>;
                })}
              </GridContainer>
            </SectionsContainer>
          </MainContainer>
        </ProfileMainContainer>
      </FullPageLayer>
    );
  }
}

export default Profile;
