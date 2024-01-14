import React, { useEffect} from "react";
import { useState } from "react";
import {StyledProgressInput} from './progresBar.style.js'

export  function ProgressBar({timeProgress, buttonRef}) {
  const [duration, setDuration] = useState(null);
  
  useEffect(() =>{

    setTimeout(() => {
      setDuration(buttonRef.current.duration)
    }, 1000);
  }, [setDuration, buttonRef])

  const changeTiming =(e)=> {
    buttonRef.current.currentTime = e.target.value
 }

  return (
    
    <StyledProgressInput
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