import styled from 'styled-components';

const NAV_HEIGHT = 100;
const DASHBOARD_WIDTH = 0;
const TEXT_COLOR = '#4A4A4A';
const BORDER_COLOR = '#BFB8B8';
const THEME_GREEN_COLOR = '#9acd00';
const SECTION_HEIGHT = 225;

const InfoListContainer = styled.div`
  width: 200px;
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
  color: ${TEXT_COLOR};
`;

const SectionsContainer = styled.div`
  width: 65%;
  padding: 0px 40px 0px 40px;
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
  align-items: start;
  padding: 0px 40px 0px 40px;
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

const GridItemContainer = styled.div`
  width: 360px;
  height: 200px;
  background: #c4c4c4;
  border-radius: 8px;
`;

const GridContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-row-gap: 50px;
  grid-template-columns: auto auto;
  overflow-y: scroll;
  height: 800px;
`;

const SeeAll = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${THEME_GREEN_COLOR};
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
  color: ${TEXT_COLOR};
  cursor: pointer;
`;

const EditIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

const EditButton = styled.div`
  border: 1px solid ${THEME_GREEN_COLOR};
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
  color: ${THEME_GREEN_COLOR};
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
  color: ${TEXT_COLOR};
`;

const FollowsNumber = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: inline-block;
  color: ${TEXT_COLOR};
`;

const Description = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  width: 228px;
  color: ${TEXT_COLOR};
  margin: 18px 0px 16px 0px;
`;

const NameText = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  /* identical to box height */

  color: ${TEXT_COLOR};
`;

export {
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
  NameText
};
