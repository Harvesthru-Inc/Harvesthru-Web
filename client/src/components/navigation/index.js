import styled from "styled-components";
import React from "react";

class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <LogoAndBrand />
      </NavbarContainer>
    );
  }
}

const NavbarContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 36px;
  padding-right: 36px;
`;

const LogoAndBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #c4c4c4;
`;

const Brand = styled.div`
  width: 132px;
  height: 30px;

  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */

  color: #92d05a;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;
