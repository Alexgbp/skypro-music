import React, { useEffect, useState } from 'react';
import NavMenu from '../../components/navmenu/navMenu.jsx';
import SearchBlock from '../../components/searchblock/searchBlock.jsx';
import SideBar from '../../components/sidebar/sideBar.jsx';
import AudioPlayer from '../../components/audioplayer/AudioPlayer.jsx';
import Filter from '../../components/filter/filter.jsx';
import TrackList from '../../components/tracklist/trackList.jsx';
import { GlobalStyle } from '../../Global.styled.js';
import * as S1 from '../../components/otherstyles/main-center-block.js';
import * as S2 from '../../components/otherstyles/center-block-h2.js';
import * as S3 from '../../components/otherstyles/footer.js';
import * as S4 from '../../components/otherstyles/wrapper.js';
import * as S5 from '../../components/otherstyles/container.js';
import * as S6 from '../../components/otherstyles/main.js';
import * as S7 from '../../pages/main-page/mainPage'
import { getAllTracks } from "../../api/api.jsx";

 export function MainPage({onClick, user}) {

  const [loader, setLoader] = useState(false);
  const [data, setDataArray] = useState([]);
  const [newError, setNewError] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
      getAllTracks()
      .then((data) => {
        setLoader(true);
        setDataArray(data);
      })
      .catch((error) =>{
        setNewError(error.message)
        setLoader(true);
      })
  }, []);

  return (
    <>
      <GlobalStyle />
      <S4.Wrapper>
        <S5.Container>
          <S6.Main>
            <NavMenu user={user}  onClick={onClick} />
            <S1.MainCenterBlock>
              <SearchBlock />
              <S2.CenterBlockH2>Треки</S2.CenterBlockH2>
              <Filter dataArray={data} />
              {newError ? <S7.ErrorMessage>{newError}</S7.ErrorMessage> : <TrackList setCurrentTrack={setCurrentTrack} loader={loader}  array={data}/>}
            </S1.MainCenterBlock>
            <SideBar loader={loader}  onClick={onClick} />
          </S6.Main>
            {currentTrack ? <AudioPlayer currentTrack={currentTrack}  loader={loader} /> : null}
          <S3.FooterBlock />
        </S5.Container>
      </S4.Wrapper>
    </>
  );
}

