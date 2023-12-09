import React from 'react';
const { useState } = React;
import * as S from "./burgerMenu"
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function BurgerMenu({user, clickAuthButton}) {
  BurgerMenu.propTypes = {
    user: PropTypes.bool.isRequired,
    clickAuthButton: PropTypes.bool.isRequired,
  };
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
            <Link to='/'>
            <S.MenuLink href="#">
              Главное
            </S.MenuLink>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
           <Link to='/favorites'>
           <S.MenuLink href="#">
              Мой плейлист
            </S.MenuLink>
           </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to='/login'>
            <S.MenuLink onClick={clickAuthButton} href="../signin.html">
              {user ? "Выйти" : "Войти"}
            </S.MenuLink>
            </Link>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </nav>
  );
}
export default BurgerMenu;
