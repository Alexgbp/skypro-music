import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./registration";
import { useEffect, useState } from "react";
import { logUser, regUser, tokenUser } from "../../api/api";

export default function Registration({isLoginMode}) {

  const navigate = useNavigate();
  
  const[isDisabled, setDisabled] = useState(false)
  const [error, setError] = useState(null);
  const[userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const handleRegister = async ({email, userName, password}) => {
    try {
      setDisabled(true)
        await regUser(email, userName, password)
       navigate("/login" , {replace: true})
    } catch (error) {
      console.log(error);
    } finally{
      setDisabled(false)
    }
  };

  const handleLogin = async ({email, password}) => {
    try {
      setDisabled(true)
      const token = await tokenUser(email, password)
      console.log(token);
       const response = await logUser(email, password)
       localStorage.setItem("user", JSON.stringify(response))
       navigate("/" , {replace: true})
    } catch (error) {
      console.log(error);
    } finally{
      setDisabled(false)
    }
  };

  

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage  src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isDisabled} onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
            <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="email"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isDisabled} onClick={() => handleRegister({email, password, userName})}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}