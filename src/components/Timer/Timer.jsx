import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 31) + 30);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(interval);
          const randomRestart = Math.floor(Math.random() * 31) + 30;
          return randomRestart;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Timer-Container">
      <p>Time Left:{seconds} seconds</p>
      <h1>Claim your Free Trial Class</h1>
    </div>
  );
};

export default Timer;
