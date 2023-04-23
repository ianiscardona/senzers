import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Logos from "../utilities/Logos";
import { firebase } from "../../firebase";
import CustomButton from "../components/CustomButton";
import CustomButtonWithIcon from "../components/CustomButtonWithIcon";
import Colors from "../utilities/Colors";
import { MotiImage } from "moti";
import LoadingScreen from "./loading-screen";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert("Login unsuccessful", "Username or password incorrect");
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <View style={styles.logoAndTextContainer}>
            <MotiImage
              style={{ width: 100, height: 100 }}
              source={Logos.SENZERS_LOGO_BLACK_MAIN}
              alt="Senzers"
              from={{ opacity: 1, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "timing", duration: 500 }}
            />
          </View>
          <View style={styles.credentialContainer}>
            <Text style={styles.inputTitle}>Email</Text>
            <View style={styles.inputContainer}>
              <View style={[styles.icon, { flex: 1 }]}>
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <TextInput
                placeholder="Enter your email here..."
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.credentialContainer}>
            <Text style={styles.inputTitle}>Password</Text>
            <View style={styles.inputContainer}>
              <View style={[styles.icon, { flex: 1 }]}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>
              <TextInput
                placeholder="Enter your password here..."
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
                secureTextEntry
              />
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Forgot")}
            style={styles.forgotContainer}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>
          <View style={styles.buttonContainer}>
            <CustomButton
              onPress={() => loginUser(email, password)}
              text={"Login"}
              width={"100%"}
            />
          </View>
          <View style={[styles.buttonContainer]}>
            <CustomButtonWithIcon
              onPress={() => {}}
              text={"Login with Google"}
              width={"100%"}
              marginRight={10}
              icon={"google"}
              size={18}
              color={"white"}
            />
          </View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 5 }}
            >
              or
            </Text>
            <View style={styles.line} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>
                Create one
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  logoAndTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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
    width: "90%",
    backgroundColor: Colors.FIELDS_GRAY,
    paddingVertical: 18,
    paddingLeft: 15,
    borderRadius: 10,
  },
  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 15,
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
