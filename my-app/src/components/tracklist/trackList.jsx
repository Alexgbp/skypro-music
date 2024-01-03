import React from 'react';
import * as S from './trackList';
import 'react-loading-skeleton/dist/skeleton.css';
import { CustomSkeleton } from '../skeleton/CustomSkeleton';

function TrackList({ loader, array, setCurrentTrack}) {
  return (
    <S.CenterBlockContent>
      <S.ContentTitle>
        <S.PlayListtitleCol>
          <S.Col01 />
          Трек
        </S.PlayListtitleCol>
        <S.PlayListtitleCol>
          <S.Col02 />
          ИСПОЛНИТЕЛЬ
        </S.PlayListtitleCol>
        <S.PlayListtitleCol>
          <S.Col03 />
          АЛЬБОМ
        </S.PlayListtitleCol>
        <S.PlayListtitleCol>
          <S.Col04 />
          <S.PlayListTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlayListTitleSvg>
        </S.PlayListtitleCol>
      </S.ContentTitle>
      <S.ContentPlaylist>
      {!loader  && <CustomSkeleton />} 
      {/* Если слева от амперсанда истина (true) мы показывем то что справа от && то есть скелетон или ничего не показываем.Но значения перемннной loader мы не меняем оно меняется стейтом , мы типа меняем его для условия */}
        {array.map((element) => {
          return (
            <S.PlayListItem onClick={() => setCurrentTrack(element)} key={element.id}>
              
                <S.PlayListTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImg>
                      
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note" />
                        </S.TrackTitleSvg>
                     
                    </S.TrackTitleImg>
                    
                      <S.TrackTitleLink>
                        {element.name}
                        <S.TrackTitleSpan />
                      </S.TrackTitleLink>
                    
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    
                      <S.TrackAuthorLink>
                        {element.author}
                      </S.TrackAuthorLink>
                    
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    
                      <S.TrackAlbumLink>
                        {element.album}
                      </S.TrackAlbumLink>
                   
                  </S.TrackAlbum>

                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackTimeSvg>
                  <S.TrackTimeText>
                    {element.duration_in_seconds}
                  </S.TrackTimeText>
                </S.PlayListTrack>
            </S.PlayListItem>
          );
        })}
        
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default TrackList;
