import React from 'react';
import './css/filter.css';
import {DataArray} from "../dataArray"
import  {useState}  from 'react';

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="menu_block">
      <div onClick={toggleMenuAuthor} className={`${"filter__button"} ${menuAuthor ? `${"btn-text-active"}` : `${"_btn-text"}`} `}>исполнителю</div>
      <div className={menuAuthor ? `${"count_block"}` : `${"count_block_hidden"}`}>{filterForAuthor.length}</div>
      <div className={menuAuthor ? `${"menu"}` : `${"menu_hidden"}`}>
          <ul className="list">{filterForAuthor.map((element) => <li className='list_element' key={element}><a className='link' href="#">{element}</a></li>)}</ul>
        </div>
      </div>

    <div className='menu_block'>
    <div onClick={toggleMenuYear} className={`${"filter__button"} ${menuYear ? `${"btn-text-active"}` : `${"_btn-text"}`}`}>году выпуска</div>
    <div className={menuYear ? `${"count_block"}` : `${"count_block_hidden"}`}>{filterForYear.length}</div>
    <div className={menuYear ? `${"menu"}` : `${"menu_hidden"}`}>
    <ul className="list">
      {filterForYear.map((element) => <li className='list_element' key={element}><a className='link' href="#">{element}</a></li>)}
      </ul>
    </div>
    </div>
      

      <div className="menu_block">
      <div onClick={toggleMenuGenre} className={`${"filter__button"} ${menuGenre ? `${"btn-text-active"}` : `${"_btn-text"}`}`}>жанру</div>
      <div className={menuGenre ? `${"count_block"}` : `${"count_block_hidden"}`}>{filterForGenre.length}</div>
      <div className={menuGenre ? `${"menu"}` : `${"menu_hidden"}`}>
        <ul className='list'>
            {filterForGenre.map((element) => <li className='list_element' key={element}><a className='link' href="#">{element}</a></li>)}
        </ul>
      </div>
      </div>
    </div>
  );
}

