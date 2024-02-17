import React, { useEffect, useState } from 'react';
import NavMenu from '../../components/navmenu/navMenu.jsx';
import SearchBlock from '../../components/searchblock/searchBlock.jsx';
import SideBar from '../../components/sidebar/sideBar.jsx';
import AudioPlayer from '../../components/audioplayer/AudioPlayer.jsx';
import Filter from '../../components/filter/filter.jsx';
import TrackList from '../../components/tracklist/trackList.jsx';
import { GlobalStyle } from '../../Global.styled.js';
import * as S from '../../components/otherstyles/variousStyle.style.js';
import { getAllTracks } from "../../api/api.jsx";
import {useDispatch, useSelector} from 'react-redux'
import { setTrack } from '../../components/store/CurrentTrackSlice.js';

 export function MainPage({onClick}) {
  const currentTrack = useSelector(state => state.tracks.currentTrack)
  const [loader, setLoader] = useState(false);
  const [newError, setNewError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
      getAllTracks()
      .then((data) => {
        setLoader(true);
        dispatch(setTrack(data))
      })
      .catch((error) =>{
        setNewError(error.message)
        setLoader(true);
      })
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu  onClick={onClick} />
            <S.MainCenterBlock>
              <SearchBlock />
              <S.CenterBlockH2>Треки</S.CenterBlockH2> 
              <Filter />
              {newError  ? <S.ErrorMessage>{newError}</S.ErrorMessage> : <TrackList currentTrack={currentTrack}  loader={loader}/>}
            </S.MainCenterBlock>
            <SideBar  loader={loader}onClick={onClick}/>
          </S.Main>
            {currentTrack ? <AudioPlayer currentTrack={currentTrack}  loader={loader} /> : null}
          <S.FooterBlock />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

