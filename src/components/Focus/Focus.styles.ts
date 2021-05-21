/**
 * Imports Native Components
 */
import { StyleSheet, Dimensions } from "react-native";

/**
 * Imports the theme
 */
import { theme } from "../../themes/theme";

/**
 * Creates the styles
 */
export const styles = StyleSheet.create({
  container: {
    flex: 0.35,
  },
  innerContainer: {
    flex: 1,
    padding: theme.spacing.md,
    justifyContent: "center",
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: theme.fontSizes.xl,
    textAlign: "center",
    margin: theme.spacing.md,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
  },
  buttonContainer: {
    marginTop: theme.spacing.md,
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.common.white,
    padding: 15,
    borderRadius: 6,
    fontSize: theme.fontSizes.lg,
  },
});
