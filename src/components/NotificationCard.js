import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const NotificationCard = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="road"
        size={30}
        color="black"
        style={{ marginRight: 15 }}
      />
      <View>
        <Text style={styles.notificationText}>Parking Detected</Text>
        <Text style={styles.notificationHour}>12:30 PM|July 31, 2023</Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationHour: {
    color: "lightgrey",
    fontWeight: "bold",
  },
});
