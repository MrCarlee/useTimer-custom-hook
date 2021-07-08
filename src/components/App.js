import React, { useEffect } from "react";
import useTimer from "../hooks/useTimer";

const App = () => {
  const { isRunning, start, stop, seconds } = useTimer(5);

  useEffect(() => {
    start();
  }, [start]);

  return (
    <div>
      <h1>Custom useTimer Hook</h1>
      <h2>{isRunning ? seconds : "No timer running"}</h2>
      <button onClick={start} disabled={isRunning}>
        Start timer
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop timer
      </button>
    </div>
  );
};

export default App;
