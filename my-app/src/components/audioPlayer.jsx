import React from 'react';
import * as S from './css/AudioPlayer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';

function AudioPlayer({loader}) {
  AudioPlayer.propTypes = {
    loader: PropTypes.bool.isRequired
  };
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControl>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay>
                {/* was class _btn */}
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.BarPlayerControl>

              <S.PlayerTrackPlay>
                <S.TrackPlayConatin>
                 <SkeletonTheme baseColor='grey'>
                 <S.TrackPlayImage>
                   {loader ?  <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.TrackPlaySvg>: <Skeleton width={50} height={60} />}
                  </S.TrackPlayImage>
                 </SkeletonTheme>
                  <S.TrackPlayAuthor>
                    {loader ? <S.TrackPlayAuthorLink href="http://">
                      Ты та..
                    </S.TrackPlayAuthorLink> : <Skeleton width={50} />}
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    {loader ? <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink> : <Skeleton width={50} />}
                  </S.TrackPlayAlbum>
                </S.TrackPlayConatin>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDisLike>
                    <S.TrackPlayLikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayDisLike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImg>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImg>
                <S.VolumeProgress>
                  {/* _btn */}
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarPlayerProgress>
      </S.BarContent>
    </S.Bar>
  );
}

export default AudioPlayer;