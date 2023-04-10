import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BatteryStatus = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Magnetometer</Text>
      </View>
      <View>
        <Text>Ultrasonic</Text>
      </View>
    </View>
  );
};

export default BatteryStatus;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "pink",
  },
});
