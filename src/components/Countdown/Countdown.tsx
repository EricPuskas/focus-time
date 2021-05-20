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
  const { minutes = 0.1, isPaused, onProgress, onEnd } = props;

  /**
   * Initializes the interval
   */
  const interval = useRef<any>();

  /**
   * Initializes the milliseconds
   */
  const [millis, setMillis] = useState(0);

  /**
   * Handles converting minutes to milliseconds
   */
  const minutesToMillis = (min: number) => min * 1000 * 60;

  /**
   * Handles formatting the time
   */
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  /**
   * Handles counting down
   */
  const countDown = () => {
    if (millis <= 0) {
      clearInterval(interval.current);
      onEnd();
      return setMillis(millis);
    } else {
      const timeLeft = millis - 1000;
      setMillis(timeLeft);
    }
  };

  /**
   * Updates the milliseconds state
   */
  useEffect(() => {
    setMillis(minutesToMillis(minutes));
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
      setMillis((time) => {
        if (time === 0) {
          clearInterval(interval.current);
          onEnd();
          return time;
        }
        const timeLeft = time - 1000;
        return timeLeft;
      });
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

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

export default Countdown;
