import React from 'react';
import * as S from './trackList';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function TrackList({ loader, array}) {
  
  
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
        {array.map((element) => {
          return (
            <S.PlayListItem key={element.id}>
              <SkeletonTheme baseColor="grey">
                <S.PlayListTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImg>
                      {loader ? (
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note" />
                        </S.TrackTitleSvg>
                      ) : (
                        <Skeleton width={50} height={55} />
                      )}
                    </S.TrackTitleImg>
                    {loader ? (
                      <S.TrackTitleLink>
                        {element.name}
                        <S.TrackTitleSpan />
                      </S.TrackTitleLink>
                    ) : (
                      <Skeleton width={375} />
                    )}
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    {loader ? (
                      <S.TrackAuthorLink>
                        {element.author}
                      </S.TrackAuthorLink>
                    ) : (
                      <Skeleton width={318} />
                    )}
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    {loader ? (
                      <S.TrackAlbumLink>
                        {element.album}
                      </S.TrackAlbumLink>
                    ) : (
                      <Skeleton width={321} />
                    )}
                  </S.TrackAlbum>

                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackTimeSvg>
                  <S.TrackTimeText>
                    {element.duration_in_seconds}
                  </S.TrackTimeText>
                </S.PlayListTrack>
                </SkeletonTheme>
            </S.PlayListItem>
          );
        })}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default TrackList;
