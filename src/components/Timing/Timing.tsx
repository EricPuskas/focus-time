import React, { Fragment } from "react";

/**
 * Imports Native Components
 */
import { View } from "react-native";

/**
 * Imports Components
 */
import RoundedButton from "../RoundedButton";

/**
 * Imports the component styles
 */
import { styles } from "./Timing.styles";

/**
 * Defines the props interface
 */
export interface TimingProps {
  onChangeTime: (min: number) => void;
}

/**
 * Displays the component
 */
const Timing: React.FC<TimingProps> = (props) => {
  const { onChangeTime } = props;

  /**
   * Defines the timing buttons
   */
  const timingButtons = [
    { key: 0, title: "10", value: 10 },
    { key: 1, title: "15", value: 15 },
    { key: 2, title: "20", value: 20 },
  ];

  /**
   * Handles rendering the timing buttons
   */
  const renderTimingButtons = () =>
    timingButtons.map((button) => {
      const handlePress = () => onChangeTime(button.value);
      return (
        <View key={button.key} style={styles.timingButton}>
          <RoundedButton size={75} title={button.title} onPress={handlePress} />
        </View>
      );
    });

  return <Fragment>{renderTimingButtons()}</Fragment>;
};

export default Timing;
