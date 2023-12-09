import React from 'react';
const { useState } = React;
import * as S from './burgerMenu';
import { Link } from 'react-router-dom';

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
            <Link to="/">
              <S.MenuLink>Главное</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/favorites">
              <S.MenuLink>Мой плейлист</S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/login">
              <S.MenuLink>Войти</S.MenuLink>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </nav>
  );
}
export default BurgerMenu;
