import React, { useState } from "react";
import "./Time.css";

const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <h1>Digital Clock</h1>
      <div className="clock-box">{currentTime}</div>
    </>
  );
};

export default Time;
