import React, { useState } from "react";
import * as S from "./volume.style.js"
import VolumeProgressLine from "../VolumeProgressLine/VolumeProgressLine.jsx";

export function VolumeComponent({buttonRef}){
  const [volume, setVolume] = useState(null)

  const changeVolume = (e) => {
   buttonRef.current.volume = e.target.value
   setVolume(buttonRef.current.volume)
  }
    return(
        <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImg>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImg>
                <S.VolumeProgress>
                  <VolumeProgressLine  duration={1} volume={volume}  onChange={changeVolume} />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
    )
}