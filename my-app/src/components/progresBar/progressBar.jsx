import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {StyledProgressInput} from './progresBar.style.js'

export  function ProgressBar({timeProgress, buttonRef}) {
  const [duration, setDuration] = useState(null);
  const progressRef = useRef(null)
  
  useEffect(() =>{

    setTimeout(() => {
      setDuration(buttonRef.current.duration)
    }, 1000);
  }, [setDuration, buttonRef])

  const changeTiming =()=> {
    buttonRef.current.currentTime = progressRef.current.value
 }

  return (
    
    <StyledProgressInput
    ref={progressRef}
      type="range"
      min={0}
      max={duration}
      value={timeProgress}
      step={0.01}
      onChange={changeTiming}
      $color="#ff0000"
    />
  );
}