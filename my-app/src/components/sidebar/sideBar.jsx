import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from "./sideBar"
import { Link } from 'react-router-dom';

 export default function SideBar({loader, onClick}) {
  return (
    <S.MainSideBar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Sergey.Ivanov</S.SideBarPersonalName>
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
            {loader ? <Link to="/category/1"><S.SideBarLink>
              <S.SideBarImg
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </S.SideBarLink></Link> : <Skeleton height={150}  />}
          </S.SideBarItem>
          <S.SideBarItem>
            {loader ?   <Link to="/category/2"><S.SideBarLink>
              <S.SideBarImg
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </S.SideBarLink></Link>: <Skeleton height={150} />}
          </S.SideBarItem>
          <S.SideBarItem>
            {loader ?  <Link to="/category/3"><S.SideBarLink>
              <S.SideBarImg
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </S.SideBarLink></Link> : <Skeleton height={150} />}
          </S.SideBarItem>
          </SkeletonTheme> 
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  );
}

