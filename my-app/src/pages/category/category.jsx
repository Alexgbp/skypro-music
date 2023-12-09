import React from 'react';
import {Text} from './categoryPage.js'
import * as S4 from '../../components/otherstyles/wrapper.js';
import * as S5 from '../../components/otherstyles/container.js';
import * as S6 from '../../components/otherstyles/main.js';


export function Catergory() {
  return (
     <S4.Wrapper>
        <S5.Container>
        <S6.Main>
        <Text>Подборка</Text>
        </S6.Main>
        </S5.Container>
    </S4.Wrapper>
  );
}
