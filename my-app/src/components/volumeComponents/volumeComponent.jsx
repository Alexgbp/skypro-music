import React, { useRef, useState } from "react";
import * as S from "./volume.style.js"
import VolumeProgressLine from "../VolumeProgressLine/VolumeProgressLine.jsx";

export function VolumeComponent(){
  const refVolume = useRef(null)
  const [volume, setVolume] = useState(0.69)
  // const [duration, setDuration] = useState(0)
  // const [currenTime, setCurrenTime] = useState(0)

  const changeVolume = (e) => {
   refVolume.current.volume = e.target.value
   setVolume(e.target.value)
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
                  <VolumeProgressLine ref={refVolume}  duration={1} currentTime={volume}  onChange={changeVolume} />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
    )
}