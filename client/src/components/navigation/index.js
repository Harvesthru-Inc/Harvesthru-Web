import styled from 'styled-components';
import React from 'react';
import { Brand, Logo, LogoAndBrand } from '../../Styles/bases/Identity';
import './hover.css';

class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer>
        <LogoAndBrand>
          <Logo />
          <Brand>Harvesthru</Brand>
        </LogoAndBrand>
        <ItemsContainer>
          <NavItem className="link-hover">Map</NavItem>
          <NavItem className="link-hover">Marketplace</NavItem>
          <NavItem
            className="link-hover"
            onClick={() => {
              this.props.openLoginPanel();
            }}
          >
            Login
          </NavItem>
        </ItemsContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;

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

const NavItem = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
  color: #000000;
  border-bottom: 2px solid rgba(146, 208, 90, 0);
  transition: all 0.3s linear;
`;
