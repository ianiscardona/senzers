import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HistoryCard from "../components/HistoryCard";
import { useState, useEffect } from "react";
import { firebase } from "../../firebase";
import moment from "moment";

const HistoryData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const unsubscribe = db
        .collection("reports")
        .orderBy("dateSeen", "desc")
        .limit(30)
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
          console.log("Data accessed:", items);
        });
      return () => unsubscribe();
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <HistoryCard
          key={index}
          dateSeen={item.dateSeen}
          timeSeen={item.timeSeen}
        />
      ))}
    </ScrollView>
  );
};

export default HistoryData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
});
