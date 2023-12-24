import React from 'react';
import { dataArray } from '../../dataArray';
import { useState } from 'react';
import * as S from './filter'

export default function Filter() {
  const filterForAuthor = dataArray.map((element) => element.author);
  const filterForYear = dataArray.map((element) => element.release_date);
  const filterForGenre = dataArray.map((element) => element.genre);

  const [menuAuthor, setMenuAuthor] = useState(false);
  const [menuYear, setMenuYear] = useState(false);
  const [menuGenre, setMenuGenre] = useState(false);

  const toggleMenuAuthor = () => {
    setMenuAuthor(!menuAuthor);
    setMenuYear(false);
    setMenuGenre(false);
  };
  const toggleMenuYear = () => {
    setMenuYear(!menuYear);
    setMenuAuthor(false);
    setMenuGenre(false);
  };
  const toggleMenuGenre = () => {
    setMenuGenre(!menuGenre);
    setMenuYear(false);
    setMenuAuthor(false);
  };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.MenuBlock>

        <S.FilterButton onClick={toggleMenuAuthor}>
          исполнителю
        </S.FilterButton>
        <S.CountBlock $visible={menuAuthor}>{filterForAuthor.length}</S.CountBlock>
        <S.Menu $visible={menuAuthor}>
          <S.List>
            {filterForAuthor.map((element, index) => (
              <S.ListElement key={index}>
                <S.Link href="#">{element}</S.Link>
              </S.ListElement>
            ))}
          </S.List>
        </S.Menu>
      </S.MenuBlock>

      <S.MenuBlock>
        <S.FilterButton onClick={toggleMenuYear}>
          году выпуска
        </S.FilterButton>
        <S.CountBlock $visible={menuYear}>{filterForYear.length}</S.CountBlock>
        <S.Menu $visible={menuYear}>
          <S.List>
            {filterForYear.map((element, index) => (
              <S.ListElement key={index}>
                <S.Link href="#">{element}</S.Link>
              </S.ListElement>
            ))}
          </S.List>
        </S.Menu>
      </S.MenuBlock>

      <S.MenuBlock>
        <S.FilterButton  onClick={toggleMenuGenre}>
          жанру
        </S.FilterButton>
        <S.CountBlock $visible={menuGenre}>{filterForGenre.length}</S.CountBlock>
        <S.Menu $visible={menuGenre}>
          <S.List>
            {filterForGenre.map((element, index) => (
              <S.ListElement key={index}>
                <S.Link href="#">{element}</S.Link>
              </S.ListElement>
            ))}
          </S.List>
        </S.Menu>
      </S.MenuBlock>
    </S.CenterBlockFilter>
  );
}
