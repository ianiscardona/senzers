import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import Colors from "../utilities/Colors";
import CustomButton from "../components/CustomButton";
import CustomButtonWithIcon from "../components/CustomButtonWithIcon";

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
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Text style={styles.logoText}>Register</Text>
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
                navigation.navigate("Terms");
              }}
            >
              <Text style={{ color: Colors.PRIMARY_RED, fontSize: 16 }}>
                Terms of Use
              </Text>
            </Pressable>
            <Text style={{ fontSize: 16 }}> and </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Privacy");
              }}
            >
              <Text style={{ color: Colors.PRIMARY_RED, fontSize: 16 }}>
                Privacy Policy
              </Text>
            </Pressable>
          </View>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => handleSignupAndEnterInfo(email, password)}
          text={"Create Account"}
          width={"100%"}
        />
      </View>
      <View style={[styles.buttonContainer]}>
        <CustomButtonWithIcon
          onPress={() => {}}
          text={"Register with Google"}
          width={"100%"}
          marginRight={10}
          icon={"google"}
          size={18}
          color={"white"}
        />
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 5 }}>
          or
        </Text>
        <View style={styles.line} />
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
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  logoText: {
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
    backgroundColor: Colors.FIELDS_GRAY,
    paddingVertical: 18,
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
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    borderBottomColor: Colors.PRIMARY_BLACK,
    borderBottomWidth: 1,
    width: "45%",
  },
});
