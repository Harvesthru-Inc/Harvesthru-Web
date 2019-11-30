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

  @media (max-width: 900px) {
    margin-top: 0;
    margin-right: 45px;
  }

  @media (max-width: 550px) {
    margin-top: 0;
    margin-right: 20px;
    height: 100px;
    width: 100px;
  }
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
  margin-right: 7%;
  margin-top: 40px;

  @media (max-width: 900px) {
    margin-right: 0;
    width: 100%;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-top: 40px;
  margin-left: 7%;
  margin-right: 7%;
  width: 28%;
  height: 100%;
  border-right: 0.5px solid #cccccc;

  @media (max-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    flex-direction: row;
    justify-content: center;
  }
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
  overflow-y: hidden;

  @media (max-width: 900px) {
    overflow-y: auto;
  }
`;

const GridItemContainer = styled.div`
  width: 45%;
  height: 200px;
  background: #c4c4c4;
  border-radius: 8px;
  margin-bottom: 50px;
`;

const GridContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  grid-row-gap: 50px;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 500px;

  @media (max-width: 900px) {
    margin-left: 20px;
    margin-right: 20px;
    overflow-y: visible;
  }
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
  min-width: 350px;

  @media (max-width: 900px) {
    margin: auto;
    width: 80%;
  }
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
  min-width: 127px;
  max-width: 127px;
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
  padding-right: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    display: none;
  }
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

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
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

const SmallerWindowWrapper = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const EditButton2 = styled.div`
  display: none;
  border: 1px solid ${THEME_GREEN_COLOR};
  box-sizing: border-box;
  border-radius: 24px;
  min-width: 127px;
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
  @media (max-width: 900px) {
    display: block;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

const GridNavContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 30px;
  padding-bottom: 7px;

  @media (max-width: 900px) {
    align-items: center;
  }
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
  NameText,
  SmallerWindowWrapper,
  EditButton2,
  GridNavContainer
};
