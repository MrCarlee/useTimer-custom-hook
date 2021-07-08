import { useState, useRef, useEffect, useCallback } from "react";

const useTimer = (totalDuration) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalDuration);
  let timerRef = useRef(null);

  const start = useCallback(() => {
    timerRef.current = setInterval(() => {
      setSeconds((state) => state - 1);
    }, 1000);
    setIsRunning(true);
  }, [setIsRunning, setSeconds]);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSeconds(totalDuration);
  }, [setIsRunning, setSeconds, totalDuration]);

  useEffect(() => {
    if (seconds < 1) {
      stop();
    }
  }, [seconds, stop]);

  //cleanup
  useEffect(() => {
    return () => timerRef && clearInterval(timerRef.current);
  }, []);

  return {
    isRunning,
    start,
    stop,
    seconds,
  };
};

export default useTimer;
