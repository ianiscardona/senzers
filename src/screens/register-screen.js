import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "../components/Checkbox";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.logo}>Register</Text>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>Full Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Juan Dela Cruz"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email here..."
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.credentialContainer}>
        <Text style={styles.inputTitle}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your password here..."
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        <Checkbox checked={isSelected} onChange={setSelection} />
        <Text style={{ fontSize: 16 }}>
          By registering, you confirm that you accept our{" "}
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Pressable onPress={() => alert("Terms of Use pressed")}>
              <Text style={{ color: "green", fontSize: 16 }}>Terms of Use</Text>
            </Pressable>
            <Text style={{ fontSize: 16 }}> and </Text>
            <Pressable onPress={() => alert("Terms of Use pressed")}>
              <Text style={{ color: "green", fontSize: 16 }}>
                Privacy Policy
              </Text>
            </Pressable>
          </View>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <View style={[styles.icon, { marginRight: 10 }]}>
            <FontAwesome5 name="google" size={18} color="white" />
          </View>
          <Text style={styles.buttonText}>Register with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ fontSize: 16 }}>Already have an account? </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>
            Login
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
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
