import React from 'react';
import './css/sideBar.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types'; //Для чего это .ЧТо бы проветялся свйоство булиан или нет ?


 export default function SideBar({loader}) {
  SideBar.propTypes = {
    loader: PropTypes.bool.isRequired // Для чего это .ЧТо бы проветялся свйоство булиан или нет ?
  }; 
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
        <SkeletonTheme baseColor='grey' >
          <div className="sidebar__item">
            {loader ? <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </a> : <Skeleton height={150}  />}
          </div>
          <div className="sidebar__item">
            {loader ?   <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </a>: <Skeleton height={150} />}
          </div>
          <div className="sidebar__item">
            {loader ?  <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </a> : <Skeleton height={150} />}
          </div>
          </SkeletonTheme> 
        </div>
      </div>
    </div>
  );
}

