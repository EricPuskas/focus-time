import React from "react";

/**
 * Imports Native Components
 */
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  ListRenderItem,
} from "react-native";
import { Icon } from "react-native-elements";

/**
 * Imports Components
 */
import RoundedButton from "../RoundedButton";

/**
 * Imports the component styles
 */
import { styles as getStyles, StylesProps } from "./FocusHistory.styles";

/**
 * Defines the focus history item type
 */
export type FocusHistoryItem = { status: number; subject: string; key: string };

/**
 * Defines the props interface
 */
export interface FocusHistoryProps {
  focusHistory: FocusHistoryItem[];
  onClear: () => void;
}

/**
 * Displays the component
 */
const FocusHistory: React.FC<FocusHistoryProps> = (props) => {
  const { focusHistory, onClear } = props;

  /**
   * Defines the component styles
   */
  const styles = getStyles();

  /**
   * Handles clearing the history
   */
  const clearHistory = () => onClear();

  /**
   * Defines the History Item component
   */
  const renderItem: ListRenderItem<FocusHistoryItem> = (props) => {
    const { item, index } = props;
    const { status, subject } = item;

    /**
     * Defines the styles props
     */
    const stylesProps: StylesProps = { status };

    /**
     * Defines the component styles
     */
    const styles = getStyles(stylesProps);

    const viewStyles: any[] = [styles.historyItem];

    if (index === 0) viewStyles.push(styles.firstHistoryItem);
    if (index === focusHistory.length - 1)
      viewStyles.push(styles.lastHistoryItem);

    return (
      <View style={viewStyles}>
        <Icon
          name={status && status > 1 ? "cancel" : "check-circle"}
          color={status && status > 1 ? "#ff6363" : "#51e18e"}
          size={35}
        />
        <Text style={styles.historyItemText}>{subject}</Text>
      </View>
    );
  };

  /**
   * Handles rendering the focus history
   */
  const renderFocusHistory = () => {
    if (focusHistory.length < 1) return null;

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>History:</Text>
        <View style={{ height: 300 }}>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={focusHistory}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.clearContainer}>
          <RoundedButton
            size={85}
            fontSize={20}
            title="Clear"
            onPress={clearHistory}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {renderFocusHistory()}
    </SafeAreaView>
  );
};

export default FocusHistory;
