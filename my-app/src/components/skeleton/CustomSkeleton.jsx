import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import * as S from '../tracklist/trackList';
import 'react-loading-skeleton/dist/skeleton.css';

export function CustomSkeleton() {
  return (
    <S.PlayListItem>
      <SkeletonTheme baseColor="gray">
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
              <Skeleton count={10} width={50} height={45} />
            </S.TrackTitleImg>

            <Skeleton count={10} width={320} height={45} />
          </S.TrackTitle>
          <S.TrackAuthor>
            <Skeleton count={10} width={300} height={45} />
          </S.TrackAuthor>
          <S.TrackAlbum>
            <Skeleton count={10} width={300} height={45} />
          </S.TrackAlbum>

          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          <S.TrackTimeText></S.TrackTimeText>
        </S.PlayListTrack>
      </SkeletonTheme>
    </S.PlayListItem>
  );
}
