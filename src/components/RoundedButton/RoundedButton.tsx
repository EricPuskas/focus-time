import React from "react";

/**
 * Imports Native Components
 */
import { TouchableOpacity, Text } from "react-native";

/**
 * Imports the component styles
 */
import { styles, StylesProps } from "./RoundedButton.styles";

/**
 * Defines the Style type
 */
export type Style = { [key: string]: string };

/**
 * Defines the props interface
 */
export interface RoundedButtonProps {
  style?: Style;
  textStyle?: Style;
  title: string;
  size?: number;
  onPress: () => void;
  fontSize?: number;
}

/**
 * Defines the default props
 */
const defaultProps: RoundedButtonProps = {
  style: {},
  textStyle: {},
  title: "+",
  size: 125,
  onPress: () => {},
  fontSize: 0,
};

/**
 * Displays the component
 */
const RoundedButton: React.FC<RoundedButtonProps> = (props) => {
  const { style, textStyle, title, size = 125, onPress, fontSize } = props;

  /**
   * Defines the styles props
   */
  const stylesProps: StylesProps = { size, fontSize };

  /**
   * Handles getting the button styling
   */
  const getButtonStyling = () => [styles(stylesProps).radius, style];

  /**
   * Handles getting the text styling
   */
  const getTextStyling = () => [styles(stylesProps).text, textStyle];

  return (
    <TouchableOpacity style={getButtonStyling()} onPress={onPress}>
      <Text style={getTextStyling()}>{title}</Text>
    </TouchableOpacity>
  );
};

RoundedButton.defaultProps = defaultProps;
export default RoundedButton;
