import React, { useEffect, useState } from 'react';
import NavMenu from './components/navMenu';
import SearchBlock from './components/searchBlock';
import SideBar from './components/sideBar';
import AudioPlayer from './components/audioplayer/AudioPlayer.jsx';
import Filter from './components/filter';
import TrackList from './components/trackList';
import { GlobalStyle } from './Global.styled.js';
import * as S1 from './components/css/main-center-block.js';
import * as S2 from './components/css/center-block-h2.js';
import * as S3 from './components/css/footer.js';
import * as S4 from './components/css/wrapper.js';
import * as S5 from './components/css/container.js';
import * as S6 from './components/css/main.js';

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(!loader);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <S4.Wrapper>
        <S5.Container>
          <S6.Main>
            <NavMenu />
            <S1.MainCenterBlock>
              <SearchBlock />
              <S2.CenterBlockH2>Треки</S2.CenterBlockH2>
              <Filter />
              <TrackList loader={loader} />
            </S1.MainCenterBlock>
            <SideBar loader={loader} />
          </S6.Main>
          <AudioPlayer loader={loader} />
          <S3.FooterBlock />
        </S5.Container>
      </S4.Wrapper>
    </>
  );
}

export default App;
