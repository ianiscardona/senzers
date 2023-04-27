import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { firebase } from "../../firebase";
import { QuerySnapshot } from "firebase/firestore";

const HistoryCard = ({  }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const currentUser = firebase.auth().currentUser;

  //   if (currentUser) {
  //     const unsubscribe = db
  //       .collection("detected")
  //       .where("UserID", "==", currentUser.uid)
  //       .orderBy("dateSeen", "desc")
  //       .onSnapshot((querySnapshot) => {
  //         const items = [];
  //         querySnapshot.forEach((doc) => {
  //           const data = doc.data();
  //           items.push({
  //             dateSeen: data.dateSeen,
  //             timeSeen: data.timeSeen,
  //           });
  //         });
  //         // Sort items in descending order based on dateSeen field
  //         items.sort((a, b) => b.dateSeen.localeCompare(a.dateSeen));
  //         setData(items);
  //       });
  //     return () => unsubscribe();
  //   }
  // }, []);

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