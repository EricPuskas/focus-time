import React, { useRef, useState, useEffect } from "react";

/**
 * Imports Native Components
 */
import { Text } from "react-native";

/**
 * Imports the component styles
 */
import { styles } from "./Countdown.styles";

/**
 * Defines the props interface
 */
export interface CountdownProps {
  minutes: number;
  isPaused: boolean;
  onProgress: (progress: number) => void;
  onEnd: () => void;
}

/**
 * Displays the component
 */
const Countdown: React.FC<CountdownProps> = (props) => {
  const { minutes = 0.09, isPaused, onProgress, onEnd } = props;

  /**
   * Initializes the interval
   */
  const interval = useRef<any>();

  /**
   * Initializes the milliseconds
   */
  const [millis, setMillis] = useState(0);

  const [timerStarted, setTimerStarted] = useState(false);

  /**
   * Handles converting minutes to milliseconds
   */
  const minutesToMillis = (min: number) => min * 1000 * 60;

  /**
   * Handles formatting the time
   */
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  /**
   * Updates the milliseconds state
   */
  useEffect(() => {
    setMillis(minutesToMillis(minutes));
    setTimerStarted(true);
  }, [minutes]);

  /**
   * Handles updating the progress bar
   */
  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  /**
   * Handles the paused state
   */
  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(() => {
      setMillis((time) => time - 1000);
    }, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  /**
   * Defines the minutes based on milliseconds
   */
  const minute = Math.floor(millis / 1000 / 60) % 60;

  /**
   * Defines the seconds based on milliseconds
   */
  const seconds = Math.floor(millis / 1000) % 60;

  useEffect(() => {
    if (millis === 0 && timerStarted) {
      clearInterval(interval.current);
      onEnd();
    }
  }, [millis, timerStarted]);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

export default Countdown;
