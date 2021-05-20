import React, { useState, useEffect } from "react";

/**
 * External Imports
 */
import { useKeepAwake } from "expo-keep-awake";

/**
 * Imports Native Components
 */
import { View, Text } from "react-native";

/**
 * Imports material design components
 */
import { ProgressBar } from "react-native-paper";

/**
 * Imports Components
 */
import RoundedButton from "../RoundedButton";
import Countdown from "../Countdown";
import Timing from "../Timing";

/**
 * Imports the theme
 */
import { theme } from "../../themes/theme";

/**
 * Imports the component styles
 */
import { styles } from "./Timer.styles";

/**
 * Defines the props interface
 */
export interface TimerProps {
  focusSubject: string;
  onTimerEnd: () => void;
  clearSubject: () => void;
}

/**
 * Defines the default time
 */
const DEFAULT_TIME = 0.1;

/**
 * Displays the component
 */
const Timer: React.FC<TimerProps> = (props) => {
  const { focusSubject, onTimerEnd, clearSubject } = props;

  /**
   * Keep the app awake while Timer is mounted
   */
  useKeepAwake();

  /**
   * Initializes the minutes
   */
  const [minutes, setMinutes] = useState(DEFAULT_TIME);

  /**
   * Initializes the is started flag
   */
  const [isStarted, setIsStarted] = useState(false);

  /**
   * Initializes the progress
   */
  const [progress, setProgress] = useState(1);

  /**
   * Initializes the ready flag
   */
  const [ready, setReady] = useState(false);

  /**
   * Handles updating the progress
   */
  const onProgress = (progress: number) => setProgress(progress);

  /**
   * Handles updating the states when the timer is done
   */
  const handleTimerEnd = () => {
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    setReady(true);
  };

  /**
   * Handles updating the time
   */
  const changeTime = (min: number) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  /**
   * Handles toggling the timer pause / start
   */
  const toggleTimer = () => setIsStarted(!isStarted);

  useEffect(() => {
    if (ready) {
      setReady(false);
      onTimerEnd();
    }
  }, [ready]);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={handleTimerEnd}
        />
      </View>
      <View style={styles.focusContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar progress={progress} style={styles.progressBar} />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? "Pause" : "Start"}
          onPress={toggleTimer}
          fontSize={theme.fontSizes.xl}
        />
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton title="-" size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};

export default Timer;
