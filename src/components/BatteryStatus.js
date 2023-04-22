import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const BatteryStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusButton}>
        <FontAwesome name="battery" size={24} color="black" />
        <Text>Magnetometer</Text>
      </View>
      <View style={styles.statusButton}>
        <FontAwesome name="battery" size={24} color="black" />
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
  },
  statusButton: {
    width: 150,
    height: 50,
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  },
});
