import React, { useState } from "react";

/**
 * Imports Native Components
 */
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInput,
} from "react-native";

/**
 * Imports Components
 */
import RoundedButton from "../RoundedButton";

/**
 * Imports the theme
 */
import { theme } from "../../themes/theme";

/**
 * Imports the component styles
 */
import { styles } from "./Focus.styles";

/**
 * Defines the props interface
 */
export interface FocusProps {
  addSubject: (subject: string) => void;
}

/**
 * Displays the component
 */
const Focus: React.FC<FocusProps> = (props) => {
  const { addSubject } = props;

  /**
   * Initializes the subject
   */
  const [subject, setSubject] = useState("");

  /**
   * Handles the input change
   */
  const handleInputChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSubject(event.nativeEvent.text);
  };

  /**
   * Handles the button press
   */
  const handleButtonPress = () => addSubject(subject);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> Focus Time </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChange={handleInputChange}
            selectionColor={theme.palette.primary.light}
            underlineColorAndroid="transparent"
            autoCorrect={false}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            size={85}
            fontSize={20}
            title="Start"
            onPress={handleButtonPress}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;
