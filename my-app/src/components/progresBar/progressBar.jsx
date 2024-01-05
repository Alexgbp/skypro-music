import React from "react";
import { useState } from "react";
import {StyledProgressInput} from './progresBar.style.js'

export  function ProgressBar() {
  const [currentTime, setCurrentTime] = useState(null);
  const duration = 230;

  return (
    <StyledProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => setCurrentTime(event.target.value)}
      $color="#ff0000"
    />
  );
}