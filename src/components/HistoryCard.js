import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const HistoryCard = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="road"
        size={30}
        color="black"
        style={{ marginRight: 15 }}
      />
      <View>
        <Text style={styles.historyText}>
          Vehicle Illegaly Parked was Reported
        </Text>
        <Text style={styles.historyHour}>2h ago</Text>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  historyText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  historyHour: {
    color: "lightgrey",
    fontWeight: "bold",
  },
});
