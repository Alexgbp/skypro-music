import React from 'react';
import './css/filter.css';
import {DataArray} from "../dataArray"
import  {useState}  from 'react';

import styled from 'styled-components';

const CenterBlockFilter = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
`
const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`
const MenuBlock =  styled.div`
position: relative;
`
// const FilterButton = styled.div`
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 24px;
// border: 1px solid #ffffff;
// border-radius: 60px;
// padding: 6px 20px;

// &:not(:last-child) {
//   margin-right: 10px;
// }  

const CountBlock = styled.div`
position: absolute;
visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
color: #ad61ff;
right: -5px;
bottom: 35px;
width: 36px;
height: 36px;
background: #ad61ff;
border-radius: 50px;
color: white;
text-align: center;
padding: 5px;
`
const Menu = styled.div`
z-index: 2;
visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
background: rgb(110, 110, 110);
position: absolute;
background: #313131;
padding: 10px 20px;
border-radius: 30px;
top: 51px;
width: 200px;
left: -26px;

`
const List = styled.ul`
overflow: auto;
display: flex;
flex-direction: column;
gap: 20px;
align-items: flex-start;
height: 200px;
padding: 10px;

&::-webkit-scrollbar {
  width: 5px;
  background-color: #f9f9fd;
}
&::-webkit-scrollbar-thumb {
  background-color: #535353;
}
`
const ListElement = styled.li`
font-size: 18px;
&:hover{
  color: #ad61ff;
  transition: .3s all;
  cursor: pointer;
  text-decoration: underline;
}
`
const Link = styled.a`
  color: #ffffff;
  &:hover{
    color: #ad61ff;
  }
`
 export default function Filter() {

  const filterForAuthor = DataArray.map((element) => element.trackAuthor);
  const filterForYear = DataArray.map((element) => element.year);
  const filterForGenre = DataArray.map((element) => element.genre);

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
    <CenterBlockFilter>
      <FilterTitle>Искать по:</FilterTitle>
      <MenuBlock>
      <div onClick={toggleMenuAuthor} className={`${"filter__button"} ${menuAuthor ? `${"btn-text-active"}` : `${"_btn-text"}`} `}>исполнителю</div>
      <CountBlock $visible={menuAuthor}>{filterForAuthor.length}</CountBlock>
      <Menu $visible={menuAuthor}>
          <List>{filterForAuthor.map((element) => <ListElement key={element.id}><Link href="#">{element}</Link></ListElement>)}</List>
        </Menu>
      </MenuBlock>

    <MenuBlock>
    <div onClick={toggleMenuYear} className={`${"filter__button"} ${menuYear ? `${"btn-text-active"}` : `${"_btn-text"}`}`}>году выпуска</div>
    <CountBlock $visible={menuYear}>{filterForYear.length}</CountBlock>
    <Menu $visible={menuYear}>
    <List>{filterForYear.map((element) => <ListElement key={element.id}><Link href="#">{element}</Link></ListElement>)}</List>
    </Menu>
    </MenuBlock>
      

      <MenuBlock>
      <div onClick={toggleMenuGenre} className={`${"filter__button"} ${menuGenre ? `${"btn-text-active"}` : `${"_btn-text"}`}`}>жанру</div>
      <CountBlock $visible={menuGenre}>{filterForGenre.length}</CountBlock>
      <Menu $visible={menuGenre}>
        <List>{filterForGenre.map((element) => <ListElement key={element.id}><Link href="#">{element}</Link></ListElement>)}</List>
      </Menu>
      </MenuBlock>
    </CenterBlockFilter>
  );
}

