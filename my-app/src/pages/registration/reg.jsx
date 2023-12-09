import React from 'react';
import * as S from './registration'

function Registration() {
  return (
    <S.Wrapper>
      <S.SignUpContainer>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.Link href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </S.Link>
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
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.BtnEnter>
              <S.Link href="../index.html">Зарегистрироваться</S.Link>
            </S.BtnEnter>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.SignUpContainer>
    </S.Wrapper>
  );
}
export default Registration;
