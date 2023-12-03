import React from 'react';
import BurgerMenu from './burgerMenu';
import * as S from "./css/navMenu"

function NavMenu() {
  return (
    <S.MenuNav>
      <S.LogoNav>
      <S.ImageNav src="img/logo.png" alt="logo" />
      </S.LogoNav>
      <BurgerMenu />
    </S.MenuNav>
  );
}
export default NavMenu;
