import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { firebase } from "../../firebase";
import { QuerySnapshot } from "firebase/firestore";

const NotificationCard = ({ index, dateSeen, timeSeen }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const unsubscribe = db
        .collection("detected")
        .where("UserID", "==", currentUser.uid)
        .orderBy("dateSeen", "desc")
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
              dateSeen: data.dateSeen,
              timeSeen: data.timeSeen,
            });
          });
          // Sort items in descending order based on dateSeen field
          items.sort((a, b) => b.dateSeen.localeCompare(a.dateSeen));
          setData(items);
        });
      return () => unsubscribe();
    }
  }, []);

  return (
    <View style={styles.cardContainer}>
      {data.map((item, index) => (
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
              {item.timeSeen} | {item.dateSeen}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    marginBottom: 10,
    // marginLeft: 10,
    // marginRight: 10,
  },
  card: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
