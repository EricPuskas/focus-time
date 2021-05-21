/**
 * Imports Native Components
 */
import { StyleSheet, Dimensions } from "react-native";

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
      padding: 15,
      marginLeft: 5,
      marginRight: 5,
      borderWidth: 2,
      borderColor: theme.palette.secondary.dark,
      borderBottomWidth: 0,
      borderRadius: 0,
      width: Dimensions.get("window").width - 30,
      backgroundColor: theme.palette.primary.light,
      flexDirection: "row",
      alignItems: "center",
    },
    firstHistoryItem: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    lastHistoryItem: {
      borderBottomWidth: 0,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    historyItemText: {
      color: theme.palette.common.white,
      fontSize: theme.fontSizes.lg,
      marginLeft: 15,
      width: Dimensions.get("window").width / 2 + 50,
      textAlign: "center",
    },
    title: {
      color: "white",
      fontSize: theme.fontSizes.lg,
    },
    clearContainer: {
      padding: theme.spacing.md,
      alignItems: "center",
    },
    contentContainer: {
      flexGrow: 1,
      alignItems: "center",
      // borderWidth: 2,
      // borderColor: theme.palette.secondary.dark,
      // backgroundColor: theme.palette.secondary.light,
      // borderRadius: 6,
      marginTop: theme.spacing.md,
      paddingVertical: 30,
    },
    safeAreaView: {
      flex: 0.35,
      alignItems: "center",
    },
  });
};
