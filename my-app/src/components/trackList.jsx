import React from 'react';
import * as S from './css/trackList'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types';


function TrackList({loader}) {
  TrackList.propTypes = {
    loader: PropTypes.bool.isRequired
  };
  return (
    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.PlayListtitleCol><S.Col01 />Трек</S.PlayListtitleCol>
        <S.PlayListtitleCol><S.Col02/>ИСПОЛНИТЕЛЬ</S.PlayListtitleCol>
        <S.PlayListtitleCol><S.Col03/>АЛЬБОМ</S.PlayListtitleCol>
        <S.PlayListtitleCol><S.Col04/>
          <S.PlayListTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlayListTitleSvg>
        </S.PlayListtitleCol>
      </S.ContentTitle>
      <S.ContentPlaylist>
        <S.PlayListItem>
        <SkeletonTheme baseColor='grey'> 
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
                
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ?  <S.TrackTitleLink href="http://">
                  Guilt
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton  width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                Nero
              </S.TrackAuthorLink> : <Skeleton  width={320}/>}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Welcome Reality
              </S.TrackAlbumLink> : <Skeleton  width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>4:44</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
          </SkeletonTheme>
        </S.PlayListItem>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
            <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Elektro
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton  width={380}/>}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                Dynoro, Outwork, Mr. Gee
              </S.TrackAuthorLink> : <Skeleton  width={320}/>}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Elektro
              </S.TrackAlbumLink> : <Skeleton  width={317}/>}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>2:22</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
               {loader ?  <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  I’m Fire
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                Ali Bakgor
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
             {loader ?  <S.TrackAlbumLink href="http://">
                I’m Fire
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>2:22</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

       <SkeletonTheme baseColor='grey'>
       <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Non Stop
                  <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                Стоункат, Psychopath
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Non Stop
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>4:12</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
       </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
               {loader ?  <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
               {loader ?  <S.TrackTitleLink href="http://">
                  Run Run
                  <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan>
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                Jaded, Will Clarke, AR/CO
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Run Run
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>2:54</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Eyes on Fire
                  <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                Blue Foundation, Zeds Dead
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Eyes on Fire
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>5:20</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Mucho Bien
                  <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
             {loader ?  <S.TrackAlbumLink href="http://">
                Mucho Bien
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>3:41</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                minthaze
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Captivating
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                minthaze
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Captivating
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                minthaze
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Captivating
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                minthaze
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Captivating
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                minthaze
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Captivating
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                minthaze
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Captivating
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                minthaze
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Captivating
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>
      

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
               {loader ?  <S.TrackTitleLink href="http://">
                  How Deep Is Your Love
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
              {loader ? <S.TrackAuthorLink href="http://">
                Calvin Harris, Disciples
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                How Deep Is Your Love
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>3:32</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>

        <SkeletonTheme baseColor='grey'>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.TrackTitle>
              <S.TrackTitleImg>
                {loader ? <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg> : <Skeleton width={50} height={55} />}
              </S.TrackTitleImg>
              <div className="track__title-text">
                {loader ? <S.TrackTitleLink href="http://">
                  Morena
                  <S.TrackTitleSpan />
                </S.TrackTitleLink> : <Skeleton width={380} />}
              </div>
            </S.TrackTitle>
            <S.TrackAuthor>
             {loader ?  <S.TrackAuthorLink href="http://">
                Tom Boxer
              </S.TrackAuthorLink> : <Skeleton width={320} />}
            </S.TrackAuthor>
            <S.TrackAlbum>
              {loader ? <S.TrackAlbumLink href="http://">
                Soundz Made in Romania
              </S.TrackAlbumLink> : <Skeleton width={317} />}
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>3:36</S.TrackTimeText>
            </div>
          </S.PlayListTrack>
        </S.PlayListItem>
        </SkeletonTheme>
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default TrackList;
