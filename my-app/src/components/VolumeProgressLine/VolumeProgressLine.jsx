import React from "react";
import * as S from "../volumeComponents/volume.style"


export default  function VolumeProgressLine({duration, volume, onChange, }){
    return(
        <S.VolumeProgressLine
                    type="range"
                    name="range"
                    min={0}
                    max={duration}
                    step={0.01}
                    onChange={onChange}
                    value={volume}
                  />
    )
}