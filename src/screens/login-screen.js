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
import { auth,firestore,db  } from "../../firebase";
import { GoogleSignInAsync } from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';

// const { GoogleSignIn } = require('expo-google-sign-in');

GoogleSignIn.initAsync({
  clientId: '181380347790-rro0rg7qogb0akmivdd8mhmkm8trkhgc.apps.googleusercontent.com',
});

const signInWithGoogle = async () => {
  try {
    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync();

    if (type === 'success') {
      // Get the user's Google ID token and access token
      const { idToken, accessToken } = user.auth;

      // Create a Firebase credential with the Google tokens
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);

      // Sign in to Firebase with the Google credential
      await firebase.auth().signInWithCredential(credential);

      console.log('Signed in with Google!');
    } else {
      console.log('Google sign-in cancelled');
    }
  } catch (error) {
    console.log('Error signing in with Google:', error);
  }
};


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  

  // const signInWithGoogle = async () => {
  //   try {
  //     const result = await GoogleSignInAsync({
  //       clientId: '181380347790-rro0rg7qogb0akmivdd8mhmkm8trkhgc.apps.googleusercontent.com',
  //       scopes: ['profile', 'email'],
  //     });
  
  //     if (result.type === 'success') {
  //       const { idToken, accessToken } = result;
  //       const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
  
  //       firebase.auth()
  //         .signInWithCredential(credential)
  //         .then(() => console.log('Signed in with Google!'))
  //         .catch(error => console.log('Error signing in with Google:', error));
  //     }
  //   } catch (error) {
  //     console.log('Error signing in with Google:', error);
  //   }
  // };


  // function handleLogin() {
  //   route.params.onLogin();

  // useEffect(() => {
  //   initGoogleSignIn();
  // }, []);

  // const initGoogleSignIn = async () => {
  //   try {
  //     await GoogleSignIn.initAsync({
  //       clientId: 'YOUR_CLIENT_ID_HERE',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const signInWithGoogle = async () => {
  //   try {
  //     const { type, user } = await GoogleSignIn.signInAsync();

  //     if (type === 'success') {
  //       setUser(user);
  //     } else {
  //       console.log('Cancelled');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  
  const loginUser = async ( email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        console.log(userCredential.user.uid);
      });
    } catch (error) {
      Alert.alert("Login unsuccessful", "Username or password incorrect");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={Logos.SENZERS_LOGO_BLACK} alt="Senzers" />
      <Text style={styles.logo}>Senzers</Text>
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
        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => signInWithGoogle(email, password)} style={styles.button}>
          <View style={[styles.icon, { marginRight: 10 }]}>
            <FontAwesome5 name="google" size={18} color="white" />
          </View>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
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
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    width: "90%",
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
