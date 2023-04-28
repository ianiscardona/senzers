import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { firebase } from "../../firebase";
import { FontAwesome5 } from "@expo/vector-icons";

const HistoryCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <View style={styles.iconSquare}></View>
        </View>
      </View>
      <View>
        <Text style={styles.historyText}>
          Vehicle Illegally Parked was Reported
        </Text>
        <Text style={styles.historyDate}>{data.dateSeen}</Text>
        <Text style={styles.historyTime}>{data.timeSeen} ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginRight: 20,
  },
  iconCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSquare: {
    height: 20,
    width: 4,
    backgroundColor: "white",
  },
  historyText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  historyDate: {
    color: "grey",
    marginBottom: 3,
  },
  historyTime: {
    color: "lightgrey",
  },
});

export default HistoryCard;