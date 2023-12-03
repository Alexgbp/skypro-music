import React from 'react';
import './css/navMenu.css';
import BurgerMenu from './burgerMenu';
import styled from 'styled-components';

const MenuNav = styled.nav`
width: 244px;
background-color: #181818;
padding: 20px 0 20px 36px;
`
const LogoNav = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

const ImageNav = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;

function NavMenu() {
  return (
    <MenuNav>
      <LogoNav>
      <ImageNav src="img/logo.png" alt="logo" />
      </LogoNav>
      <BurgerMenu />
    </MenuNav>
  );
}
export default NavMenu;
