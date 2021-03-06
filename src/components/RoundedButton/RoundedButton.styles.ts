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
      borderColor: theme.palette.secondary.dark,
      borderWidth: 2,
      backgroundColor: theme.palette.secondary.main,
    },
    text: {
      color: theme.palette.common.white,
      fontSize: fontSize || theme.fontSizes.md,
    },
  });
};
