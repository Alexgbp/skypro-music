import React from 'react';
const { useState } = React;
import * as S from './burgerMenu';
import { NavLink } from 'react-router-dom';

function BurgerMenu() {
  const [visible, setVisible] = useState(false);
  const toglleState = () => setVisible(!visible);

  return (
    <nav>
      <S.BurgerNav onClick={toglleState}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.BurgerNav>
      <S.NavMenu $visible={visible}>
        <S.MenuList>
          <S.MenuItem>
            <NavLink to="/">
              <S.MenuLink>Главное</S.MenuLink>
            </NavLink>
          </S.MenuItem>
          <S.MenuItem>
            <NavLink to="/favorites">
              <S.MenuLink>Мой плейлист</S.MenuLink>
            </NavLink>
          </S.MenuItem>
          <S.MenuItem>
            <NavLink  to="/login">
              <S.MenuLink>Войти</S.MenuLink>
            </NavLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </nav>
  );
}
export default BurgerMenu;
