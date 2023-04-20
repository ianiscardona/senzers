import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import Colors from "../utilities/Colors";

const TimeCounter = ({ parkedTime }) => {
  const duration = moment.duration(parkedTime);
  const hours = duration.hours().toString().padStart(2, "0");
  const minutes = duration.minutes().toString().padStart(2, "0");
  const seconds = duration.seconds().toString().padStart(2, "0");
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.timeContainer,
          {
            marginBottom: 10,
          },
        ]}
      >
        <Text style={styles.timeHeaderText}>The vehicle is parked for:</Text>
      </View>
      <View style={styles.timeDigitsContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeDigitsStyle}>{hours[0]}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeDigitsStyle}>{hours[1]}</Text>
        </View>
        <Text style={styles.timeDigitsStyle}>:</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeDigitsStyle}>{minutes[0]}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeDigitsStyle}>{minutes[1]}</Text>
        </View>
        <Text style={styles.timeDigitsStyle}>:</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeDigitsStyle}>{seconds[0]}</Text>
        </View>
        <View style={[styles.timeContainer, { marginRight: 0 }]}>
          <Text style={styles.timeDigitsStyle}>{seconds[1]}</Text>
        </View>
      </View>
    </View>
  );
};

export default TimeCounter;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
  },
  timeContainer: {
    backgroundColor: Colors.STATUS_GRAY,
    padding: 10,
    borderRadius: 15,
    marginRight: 5,
  },
  timeHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeDigitsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeDigitsStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
