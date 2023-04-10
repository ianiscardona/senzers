import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RippleEffect from "../components/RippleEffect";
import BatteryStatus from "../components/BatteryStatus";
import TopBar from "../components/TopBar";

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
    paddingTop: 80,
    paddingBottom: 20,
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default DashboardScreen;
