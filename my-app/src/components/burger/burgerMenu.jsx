import React from 'react';
const { useState } = React;
import * as S from './burgerMenu';
import { NavLink } from 'react-router-dom';

function BurgerMenu({user, onClick}) {
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
            <NavLink>
              <S.MenuLink onClick={onClick}>{user ? "Выйти" : "Войти"}</S.MenuLink>
            </NavLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </nav>
  );
}
export default BurgerMenu;
