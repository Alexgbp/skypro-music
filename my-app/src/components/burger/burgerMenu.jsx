import React from 'react';
const { useState } = React;
import * as S from "./burgerMenu"

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
            <S.MenuLink href="#">
              Главное
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="#">
              Мой плейлист
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="../signin.html">
              Войти
            </S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </nav>
  );
}
export default BurgerMenu;
