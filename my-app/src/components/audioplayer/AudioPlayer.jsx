import React, {useContext, useEffect, useRef, useState } from 'react';
import * as S from './AudioPlayer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ProgressBar } from '../progresBar/progressBar';
import { VolumeComponent } from '../volumeComponents/volumeComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setNextTrack, setPlaying, setPrevTrack, shuffleTrack } from '../store/CurrentTrackSlice';
import { Context } from '../../routes';



function AudioPlayer() {
  const {loader} = useContext(Context)
 const buttonRef = useRef(false)
 const currentTrack = useSelector(state => state.tracks.currentTrack)
 const isPlaying = useSelector(state => state.tracks.isPlay)
 const isShufle = useSelector(state => state.tracks.isMix)
  const [isLoop, setIsLoop] = useState(false)
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch()
  const toggleLoop = () => {
    buttonRef.current.loop
    setIsLoop(!isLoop)
  }

  const togglePlay = () => {
    buttonRef.current.play()
    dispatch(setPlaying())
  }

  const toggleStop = () => {
    buttonRef.current.pause()
    dispatch(setPlaying())
  }


  useEffect(() => {
    buttonRef.current.duration ? setDuration(buttonRef.current.duration) : setDuration(0);
  });

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
    <S.AudioComponent onTimeUpdate={() => setTimeProgress(buttonRef.current.currentTime)} loop={isLoop} autoPlay src={currentTrack.track_file} controls ref={buttonRef} volume={0}></S.AudioComponent>
    <S.TimeComponent>{formatTime(timeProgress)} / {formatTime(duration)}</S.TimeComponent>
    <S.Bar $visible={currentTrack}>
      <S.BarContent>
      <ProgressBar timeProgress={timeProgress} buttonRef={buttonRef} duration={duration}></ProgressBar>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControl>
                <S.PlayerBtnPrev onClick={() => dispatch(setPrevTrack())}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={isPlaying ? toggleStop : togglePlay}>
                  {isPlaying ?  <S.StopBtnPlaySvg alt="stop"> <use xlinkHref="img/icon/sprite.svg#icon-pause" ></use></S.StopBtnPlaySvg> : <S.PlayBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </S.PlayBtnPlaySvg>}
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={() => dispatch(setNextTrack())}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={toggleLoop}>
                  <S.PlayerBtnRepeatSvg $click={isLoop} alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle onClick={() => dispatch(shuffleTrack())}>
                  <S.PlayerBtnShuffleSvg $visible={isShufle} alt="shuffle">
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
                      {currentTrack.name}
                    </S.TrackPlayAuthorLink> : <Skeleton width={50} />}
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    {loader ? <S.TrackPlayAlbumLink href="http://">
                    {currentTrack.author}
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
            <VolumeComponent  buttonRef={buttonRef}/>
          </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
    
    </>
  );
}


export default AudioPlayer;