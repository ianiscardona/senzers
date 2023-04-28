import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { firebase } from "../../firebase";
import NotificationCard from "../components/NotificationCard";

const NotificationData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const unsubscribe = db
        .collection("detected")
        .where("UserID", "==", currentUser.uid)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
              dateSeen: data.dateSeen,
              timeSeen: data.timeSeen,
            });
          });
          setData(items);
          console.log("Data from Firestore:", items);
        });
      return () => unsubscribe();
    }
  }, []);

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <NotificationCard
          key={index}
          dateSeen={item.dateSeen}
          timeSeen={item.timeSeen}
        />
      ))}
    </View>
  );
};

export default NotificationData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
});
