import React from "react";
import {StyledProgressInput} from './progresBar.style.js'

export  function ProgressBar({timeProgress, buttonRef, duration}) {
  
  
 

  const changeTiming =(e)=> {
    buttonRef.current.currentTime = e.target.value
 }

  return (
    <>
      <StyledProgressInput
      type="range"
      min={0}
      max={duration}
      value={timeProgress}
      step={0.01}
      onChange={changeTiming}
      $color="#ff0000"
    />
    </>
  );
}