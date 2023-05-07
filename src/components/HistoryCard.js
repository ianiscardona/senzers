import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../utilities/Colors";

const HistoryCard = ({ index, dateSeen, timeSeen }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card} key={index}>
        <View style={styles.circle}>
          <FontAwesome5 name="font-awesome-flag" size={30} color="black" />
        </View>
        <View>
          <Text style={styles.historyText}>
            Vehicle Illegally Parked was Reported
          </Text>
          <Text style={styles.historyDate}>{dateSeen}</Text>
          <Text style={styles.historyTime}>{timeSeen}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

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
  line: {
    borderBottomColor: Colors.STATUS_GRAY,
    borderBottomWidth: 1,
    marginTop: 2,
    width: "100%",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.PRIMARY_YELLOW,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

export default HistoryCard;
