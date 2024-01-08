import React, { useRef, useState } from "react";
import * as S from "./volume.style.js"

export function VolumeComponent(){
  const refVolume = useRef(null)
  const [volume, setVolume] = useState(null)

  const changeVolume = () => {
   setVolume(refVolume.current.volume)
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
                  <S.VolumeProgressLine
                    ref={refVolume}
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange ={changeVolume}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
    )
}