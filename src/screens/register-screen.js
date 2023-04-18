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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleSignup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user.email);
      console.log(user.password);
    } catch (error) {
      throw error;
    }
  };

  const navigateToEnterInfo = () => {
    navigation.navigate("EnterInformation");
  };

  const handleSignupAndEnterInfo = async (email, password) => {
    try {
      await handleSignup(email, password);
      navigateToEnterInfo();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={Logos.SENZERS_LOGO_BLACK} alt="Senzers" />
      <Text style={styles.logo}>Register</Text>
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
            <Pressable
              onPress={() => {
                navigation.navigate("EnterInformation");
              }}
            >
              <Text style={{ color: "green", fontSize: 16 }}>Terms of Use</Text>
            </Pressable>
            <Text style={{ fontSize: 16 }}> and </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Privacy");
              }}
            >
              <Text style={{ color: "green", fontSize: 16 }}>
                Privacy Policy
              </Text>
            </Pressable>
          </View>
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => handleSignupAndEnterInfo(email, password)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <View style={[styles.icon, { marginRight: 10 }]}>
          <FontAwesome5 name="google" size={18} color="white" />
        </View>
        <Text style={styles.buttonText}>Register with Google</Text>
      </TouchableOpacity>

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
