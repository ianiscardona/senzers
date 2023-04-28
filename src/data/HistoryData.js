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
        .where("UserID", "==", currentUser.uid)
        .orderBy("dateSeen", "desc")
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
              dateSeen: moment(data.dateSeen, "YYYY-MM-DD").format("MMMM Do YYYY"),
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
    <ScrollView>
      {data.map((item) => (
        <HistoryCard key={item.dateSeen} data={item} />
      ))}
    </ScrollView>
  );
};

export default HistoryData;
