import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types'; 
import * as S from "./css/sideBar"

 export default function SideBar({loader}) {
  SideBar.propTypes = {
    loader: PropTypes.bool.isRequired 
  }; 
  return (
    <S.MainSideBar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Sergey.Ivanov</S.SideBarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
        <SkeletonTheme baseColor='grey' >
          <S.SideBarItem>
            {loader ? <S.SideBarLink href="#">
              <S.SideBarImg
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </S.SideBarLink> : <Skeleton height={150}  />}
          </S.SideBarItem>
          <S.SideBarItem>
            {loader ?   <S.SideBarLink href="#">
              <S.SideBarImg
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </S.SideBarLink>: <Skeleton height={150} />}
          </S.SideBarItem>
          <S.SideBarItem>
            {loader ?  <S.SideBarLink href="#">
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

