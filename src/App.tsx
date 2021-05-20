import React, { useState, useEffect } from "react";

/**
 * External Imports
 */
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Imports Native Components
 */
import {
  View,
  Vibration,
  StyleSheet,
  Platform,
  SafeAreaView,
} from "react-native";

/**
 * Imports Components
 */
import Focus from "./components/Focus";
import FocusHistory, { FocusHistoryItem } from "./components/FocusHistory";
import Timer from "./components/Timer";

/**
 * Imports the theme
 */
import { theme } from "./themes/theme";

/**
 * Defines the timer statuses
 */
const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

/**
 * Creates the styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkBlue,
  },
  focusContainer: { flex: 1 },
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});

/**
 * Displays the component
 */
const App: React.FC = () => {
  /**
   * Initializes the focus subject
   */
  const [focusSubject, setFocusSubject] = useState("");

  /**
   * Initializes the focus history
   */
  const [focusHistory, setFocusHistory] = useState<FocusHistoryItem[]>([]);

  /**
   * Initializes the vibrate flag
   */
  const [vibrate, setVibrate] = useState(false);

  /**
   * Handles adding the subject to the history
   */
  const addFocusHistorySubjectWithStatus = (
    subject: string,
    status: number
  ) => {
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ]);
  };

  /**
   * Handles clearing the history
   */
  const onClear = () => setFocusHistory([]);

  /**
   * Handles saving the history
   */
  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Handles loading the history
   */
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");

      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Handles the end of the timer
   */
  const handleTimerEnd = () => {
    addFocusHistorySubjectWithStatus(focusSubject, STATUSES.COMPLETE);
    setFocusSubject("");
    setVibrate(true);
  };

  /**
   * Handles clearing the subject
   */
  const clearSubject = () => {
    addFocusHistorySubjectWithStatus(focusSubject, STATUSES.CANCELLED);
    setFocusSubject("");
  };

  /**
   * Handles rendering the view
   */
  const renderView = () => {
    if (focusSubject) {
      return (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={handleTimerEnd}
          clearSubject={clearSubject}
        />
      );
    }

    return (
      <View style={styles.focusContainer}>
        <Focus addSubject={setFocusSubject} />
        <FocusHistory focusHistory={focusHistory} onClear={onClear} />
      </View>
    );
  };

  useEffect(() => {
    if (vibrate) {
      setVibrate(false);
      Vibration.vibrate(10000);
    }
  }, [vibrate]);

  /**
   * Load the history upon first mount
   */
  useEffect(() => {
    loadFocusHistory();
  }, []);

  /**
   * Keep the history up-to-date with the local state
   */
  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>{renderView()}</View>
    </SafeAreaView>
  );
};

export default App;
