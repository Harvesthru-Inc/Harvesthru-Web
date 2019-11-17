import styled from 'styled-components';

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

// To Do (Dennis): Use static image
const Logo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #c4c4c4;
`;

const LogoAndBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 36px;
  width: 183px;
`;

export {Brand, Logo, LogoAndBrand};
