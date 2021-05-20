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
  status?: number;
}

/**
 * Creates the styles
 */
export const styles = (props?: StylesProps) => {
  const { status } = props || {};

  return StyleSheet.create({
    historyItem: {
      color: status && status > 1 ? "red" : "green",
      fontSize: theme.fontSizes.md,
    },
    title: {
      color: "white",
      fontSize: theme.fontSizes.lg,
    },
    clearContainer: {
      alignItems: "center",
      padding: theme.spacing.md,
    },
    flatList: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
    },
    safeAreaView: {
      flex: 0.5,
      alignItems: "center",
    },
  });
};
