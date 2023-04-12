import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RippleEffect from "../components/RippleEffect";
import BatteryStatus from "../components/BatteryStatus";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <RippleEffect />
      <BatteryStatus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default DashboardScreen;
