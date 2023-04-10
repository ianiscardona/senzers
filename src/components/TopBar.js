import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TopBar = () => {
  return <View style={styles.container}></View>;
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: 100,
    backgroundColor: "lightgreen",
  },
});
