import React, { useContext} from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from "./sideBar"
import {Context} from "../../routes"


 export default function SideBar({ onClick}) {
  
  const {user, loader} = useContext(Context)
  return (
    <S.MainSideBar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{user.username}</S.SideBarPersonalName>
        <S.SideBarIcon onClick={onClick}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
        <SkeletonTheme baseColor='grey' >
          <S.SideBarItem>
            {loader ? <S.SideBarLink to="/category/1">
              <S.SideBarImg src="img/playlist01.png" alt="day's playlist"/>
            </S.SideBarLink> : <Skeleton height={150}  />}
          </S.SideBarItem>
          <S.SideBarItem>
            {loader ? <S.SideBarLink to="/category/2">
              <S.SideBarImg
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </S.SideBarLink> : <Skeleton height={150} />}
          </S.SideBarItem>
          <S.SideBarItem>
            {loader ?  <S.SideBarLink to="/category/3">
              <S.SideBarImg
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </S.SideBarLink> : <Skeleton height={150} />}
          </S.SideBarItem>
          </SkeletonTheme> 
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  );
}

