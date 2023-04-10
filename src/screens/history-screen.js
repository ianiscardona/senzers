import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HistoryNavigator from "../navigations/HistoryNavigator";

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <HistoryNavigator />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});
