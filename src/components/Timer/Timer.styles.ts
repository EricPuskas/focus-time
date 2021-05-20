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
    flex: 1,
  },
  title: {
    color: theme.colors.white,
    textAlign: "center",
  },
  task: {
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25,
  },
  focusContainer: {
    paddingTop: theme.spacing.xxl,
  },
  progressBarContainer: {
    paddingTop: theme.spacing.sm,
  },
  progressBar: {
    height: 10,
    color: theme.colors.blue,
  },
});
