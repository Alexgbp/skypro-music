import React from 'react';
import BurgerMenu from '../burger/burgerMenu.jsx';
import * as S from "./navMenu"

function NavMenu({onClick}) {
  return (
    <S.MenuNav>
      <S.LogoNav>
      <S.ImageNav src="img/logo.png" alt="logo" />
      </S.LogoNav>
      <BurgerMenu  onClick={onClick} />
    </S.MenuNav>
  );
}
export default NavMenu;
