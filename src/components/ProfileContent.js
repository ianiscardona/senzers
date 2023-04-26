import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState,useEffect} from 'react';
import {firebase} from "../../firebase";
import { QuerySnapshot } from "firebase/firestore";
import { set } from "react-native-reanimated";

const ProfileContent = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const todoRef = firebase
        .firestore()
        .collection("NewUsers")
        .where("userId", "==", currentUser.uid);

      const unsubscribe = todoRef.onSnapshot(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setFirstName(doc.data().firstName);
            setLastName(doc.data().lastName);
            setPhoneNumber(doc.data().phoneNumber);
            setAddress(doc.data().address);
          });
        },
        (error) => {
          console.error(error);
        }
      );

      return () => unsubscribe();
    }
  }, []);




  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AccountContent");
        }}
        style={{
          marginBottom: "5%",
          alignSelf: "flex-start",
        }}
      >
        <FontAwesome5 name="arrow-left" size={20} color="black" />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
          // backgroundColor: "blue",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.contentEditButton}
        >
          <Text style={styles.contentEditButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentInfoContainer}>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>First Name</Text>
          <Text style={styles.contentInfoItem}>{firstName}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Last Name</Text>
          <Text style={styles.contentInfoItem}>{lastName}</Text>
        </View>
        {/* <View style={styles.line}></View>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Email</Text>
          <Text style={styles.contentInfoItem}>{email}</Text>
        </View> */}
        <View style={styles.line}></View>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Phone</Text>
          <Text style={styles.contentInfoItem}>{phoneNumber}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Address</Text>
          <Text style={styles.contentInfoItem}>
            {address}
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  contentEditButton: {
    width: 100,
    height: 43,
    backgroundColor: "#292828",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: "flex-end",
  },
  contentEditButtonText: {
    textAlign: "center",
    color: "white",
  },
  contentInfoContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "space-evenly",
  },
  contentInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentInfoCategory: {
    width: "25%",
    fontSize: 20,
    fontStyle: "italic",
  },
  contentInfoItem: { width: "75%", fontSize: 20, fontWeight: "bold" },
  line: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
});
