import React, { Fragment } from "react";

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
    const { item } = props;
    const { status, subject } = item;

    /**
     * Defines the styles props
     */
    const stylesProps: StylesProps = { status };

    /**
     * Defines the component styles
     */
    const styles = getStyles(stylesProps);

    return <Text style={styles.historyItem}>{subject}</Text>;
  };

  /**
   * Handles rendering the focus history
   */
  const renderFocusHistory = () => {
    if (focusHistory.length < 1) return null;

    return (
      <Fragment>
        <Text style={styles.title}>Things we've focused on</Text>
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.contentContainer}
          data={focusHistory}
          renderItem={renderItem}
        />
        <View style={styles.clearContainer}>
          <RoundedButton size={75} title="Clear" onPress={clearHistory} />
        </View>
      </Fragment>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {renderFocusHistory()}
    </SafeAreaView>
  );
};

export default FocusHistory;
