import styled from 'styled-components';
import React from 'react';
import { Brand, Logo, LogoAndBrand } from '../../Styles/bases/Identity';
import './hover.css';
import avatarPlaceholder from '../../assets/images/avatar_placeholder.png';
import downTriangle from '../../assets/images/down_triangle.png';

class Navbar extends React.Component {
  state = {
    menuOpen: false,
    navCollapsed: false
  };

  collapseNavbar = () => {
    console.log('fuck');
    this.setState({ navCollapsed: window.innerWidth < 900 });
  };

  componentDidMount() {
    window.addEventListener('resize', this.collapseNavbar);
  }
  render() {
    return (
      <NavbarContainer>
        <LogoAndBrand>
          <Logo />
          <Brand>Harvesthru</Brand>
        </LogoAndBrand>
        <CollapseContainer
          onMouseEnter={() => {
            this.setState({ menuOpen: true });
          }}
          onMouseLeave={() => {
            this.setState({ menuOpen: false });
          }}
        >
          {!this.state.navCollapsed && <NavItem className="link-hover">Sell</NavItem>}
          {!this.state.navCollapsed && <NavItem className="link-hover">Messages</NavItem>}
          <NavItem
            className="link-hover"
            onClick={() => {
              this.props.openLoginPanel();
            }}
          >
            Login
          </NavItem>
          <Avatar src={avatarPlaceholder} />
          <DownIcon src={downTriangle} />
        </CollapseContainer>
        {this.state.menuOpen && (
          <CollapseMenuContainer>
            <CollapseMenuItemContainer>Dummy</CollapseMenuItemContainer>
            <CollapseMenuItemContainer>Dummy</CollapseMenuItemContainer>
            <CollapseMenuItemContainer>Dummy</CollapseMenuItemContainer>
            <CollapseMenuItemContainer>Dummy</CollapseMenuItemContainer>
          </CollapseMenuContainer>
        )}
      </NavbarContainer>
    );
  }
}

export default Navbar;

const CollapseMenuContainer = styled.div`
  border-top: 1px solid #bfb8b8;
  position: absolute;
  width: 163px;
  top: 100px;
  right: 0px;
`;

const CollapseMenuItemContainer = styled.div`
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  border-left: 1px solid #bfb8b8;
  border-bottom: 1px solid #bfb8b8;
  border-right: 1px solid #bfb8b8;
  background: #ffffff;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  padding: 23px 38px;

  color: #000000;
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

const DownIcon = styled.img`
  width: 16px;
  height: 11.2px;
  margin-left: 11px;
`;
const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19);
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 36px;
  min-width: 580px;
`;

const CollapseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
`;

const NavItem = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-right: 24px;
  line-height: 29px;
  cursor: pointer;
  color: #000000;
  border-bottom: 2px solid rgba(146, 208, 90, 0);
  transition: all 0.3s linear;
`;
