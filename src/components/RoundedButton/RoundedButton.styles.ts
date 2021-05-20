/**
 * Imports Native Components
 */
import { StyleSheet } from "react-native";

/**
 * Imports the theme
 */
import { theme } from "../../themes/theme";

/**
 * Defines the styles props interface
 */
export interface StylesProps {
  size: number;
  fontSize?: number;
}

/**
 * Creates the styles
 */
export const styles = (props: StylesProps) => {
  const { size, fontSize } = props;

  return StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: theme.colors.white,
      borderWidth: 2,
    },
    text: {
      color: theme.colors.white,
      fontSize: fontSize || theme.fontSizes.md,
    },
  });
};
