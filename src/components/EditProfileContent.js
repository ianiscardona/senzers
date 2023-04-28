import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { firestore } from "firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  update,
  Timestamp,
} from "firebase/firestore";
import { storage } from "firebase/storage";
import { firebase } from "../../firebase";

import CustomButton from "./CustomButton";

const EditProfileContent = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();

    const unsubscribe = db
      .collection("NewUsers")
      .doc(user.uid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          console.log("No user data available");
        }
      });

    return () => unsubscribe();
  }, []);

  const handleUpdate = async () => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();

    try {
      await db.collection("NewUsers").doc(user.uid).update({
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log("User updated successfully!");
      Alert.alert(
        "Profile Updated!",
        "Your profile has been updated successfully."
      );
    } catch (error) {
      console.error("Error updating user:", error);
      Alert.alert(
        "Error",
        "There was an error updating your profile. Please try again later."
      );
    }
  };

  const handleInputChange = (field, value) => {
    setUserData((prevUserData) => ({ ...prevUserData, [field]: value }));
  };

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileContent")}
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
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Edit Profile</Text>
      </View>
      <View style={styles.contentInputContainer}>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>First Name</Text>
          <TextInput
            value={userData?.firstName || ""}
            placeholder="Juan"
            onChangeText={(text) => handleInputChange("firstName", text)}
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Last Name</Text>
          <TextInput
            placeholder="Dela Cruz"
            value={userData?.lastName || ""}
            onChangeText={(text) => handleInputChange("lastName", text)}
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Phone Number</Text>
          <TextInput
            placeholder="+63 912 345 6789"
            value={userData?.phoneNumber || ""}
            onChangeText={(text) => handleInputChange("phoneNumber", text)}
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Address</Text>
          <TextInput
            placeholder="123 Wagas St. Tondo, Manila"
            value={userData?.address || ""}
            onChangeText={(text) => handleInputChange("address", text)}
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
          />
        </View>
        <View style={{ alignSelf: "center", marginTop: 10 }}>
          <CustomButton
            onPress={handleUpdate}
            text={"Save Changes"}
            width={200}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfileContent;

const styles = StyleSheet.create({
  contentEditButton: {
    marginTop: 15,
    width: 200,
    height: 43,
    backgroundColor: "#292828",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  contentEditButtonText: {
    textAlign: "center",
    color: "white",
  },
  contentInputContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "space-evenly",
  },
  contentInput: {
    borderWidth: 0.5,
    backgroundColor: "lightgray",
    borderRadius: 999,
    padding: 10,
    marginBottom: 10,
  },
});
