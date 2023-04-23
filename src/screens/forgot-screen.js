import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import forgotPasswordIcon from "../../assets/icons/forgot-password-icon.png";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import Colors from "../utilities/Colors";

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
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
        <CustomButton
          onPress={() =>
            Alert.alert(
              "Verification sent!",
              "Kindly check your email to change your password."
            )
          }
          text={"Send Verification"}
          width={"100%"}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  logo: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
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
    marginBottom: 15,
  },
});
