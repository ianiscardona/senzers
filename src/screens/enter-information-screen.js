import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "../components/Checkbox";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import Logos from "../utilities/Logos";

const EnterInformationScreen = ({ onComplete }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isSelected, setSelection] = useState(false);
  function handleStart() {
    onComplete();
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.logo}>Enter Your Complete Information</Text>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>First Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your first name here..."
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>Last Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your last name here..."
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your last name here..."
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>Address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your last name here..."
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleStart} style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default EnterInformationScreen;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    marginHorizontal: "5%",
    marginVertical: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  credentialContainer: {
    marginBottom: 15,
  },
  inputTitle: {
    fontSize: 18,
    marginBottom: 3,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "lightgray",
    paddingVertical: 15,
    paddingLeft: 15,
    borderRadius: 10,
  },
  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#292828",
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
