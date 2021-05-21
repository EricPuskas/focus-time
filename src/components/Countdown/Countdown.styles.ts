/**
 * Imports Native Components
 */
import { StyleSheet } from "react-native";

/**
 * Imports the theme
 */
import { theme } from "../../themes/theme";

/**
 * Creates the styles
 */
export const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.xxxl,
    fontWeight: "bold",
    color: theme.palette.common.white,
    padding: theme.spacing.lg,
    borderRadius: 6,
    backgroundColor: theme.palette.secondary.main,
  },
});
