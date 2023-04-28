import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../utilities/Colors";

const NotificationCard = ({ index, dateSeen, timeSeen }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card} key={index}>
        <FontAwesome5
          name="road"
          size={30}
          color="black"
          style={{ marginRight: 15 }}
        />
        <View>
          <Text style={styles.notificationText}>Parking Detected</Text>
          <Text style={styles.notificationHour}>
            {timeSeen} | {dateSeen}
          </Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationHour: {
    color: "lightgrey",
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: Colors.STATUS_GRAY,
    borderBottomWidth: 1,
    marginTop: 2,
    width: "100%",
  },
});
