import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TermsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Terms of Use</Text>
    </View>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
});
