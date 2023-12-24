import React from 'react';
import * as S4 from '../../components/otherstyles/wrapper.js';
import * as S5 from '../../components/otherstyles/container.js';
import * as S6 from '../../components/otherstyles/main.js';
import { GlobalStyle } from "../../Global.styled.js";
import { useParams } from 'react-router-dom';


export function Category() {
  const params  = useParams();

  console.log(params.id);
  return (
    <>
    <GlobalStyle />
     <S4.Wrapper>
        <S5.Container>
        <S6.Main>
          <h1>Playlist</h1>
        </S6.Main>
        </S5.Container>
    </S4.Wrapper>
    </>
  );
}
