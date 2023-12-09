import React from 'react';
import * as S from './loginPage'
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <S.ModalBtnEnterLink href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </S.ModalBtnEnterLink>
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              <S.ModalBtnEnterLink href="../index.html">Войти</S.ModalBtnEnterLink>
            </S.ModalBtnEnter>
            <S.ModalBtnSignUp>
              <Link to='/registration'>
              <S.ModalBtnEnterLink href="signup.html">Зарегистрироваться</S.ModalBtnEnterLink>
              </Link>
            </S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
  );
}
export default LoginPage;
