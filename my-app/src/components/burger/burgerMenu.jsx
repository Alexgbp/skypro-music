import React from 'react';
const { useState } = React;
import * as S from './burgerMenu';

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
            <S.Link to="/">
              Главное
            </S.Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.Link to="/favorites">
               Мой плейлист
            </S.Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.Link onClick={onClick}>
             {user ? "Выйти" : "Войти"}
            </S.Link>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </nav>
  );
}
export default BurgerMenu;
