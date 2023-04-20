import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import forgotPasswordIcon from "../../assets/icons/forgot-password-icon.png";
import { FontAwesome5 } from "@expo/vector-icons";

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          alignSelf: "flex-start",
          width: 25,
          height: 25,
          marginBottom: 10,
        }}
      >
        <FontAwesome5 name="angle-left" size={25} color="black" />
      </TouchableOpacity>
      <Image source={forgotPasswordIcon} alt="Forgot Password" />
      <Text style={styles.logo}>Forgot Password</Text>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>Enter your email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => alert("Clicked")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "80%",
    marginVertical: "10%",
    marginHorizontal: "5%",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    marginBottom: 50,
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
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#292828",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
