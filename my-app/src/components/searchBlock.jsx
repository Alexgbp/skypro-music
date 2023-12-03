import React from 'react';
import * as S from "./css/searchBlock"

function SearchBlock() {
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterBlockSearch>
  );
}
export default SearchBlock;
