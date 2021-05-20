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
  container: {
    flex: 0.3,
  },
  innerContainer: {
    flex: 1,
    padding: theme.spacing.md,
    justifyContent: "center",
  },
  title: {
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: theme.fontSizes.xl,
  },
  inputContainer: {
    paddingTop: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: theme.spacing.md,
    color: theme.colors.darkBlue,
    backgroundColor: theme.colors.white,
    padding: 15,
    borderRadius: 6,
    fontSize: theme.fontSizes.lg,
  },
});
