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
import * as GoogleSignIn from 'expo-google-app-auth';

// import { GoogleSignInAsync } from 'expo-google-app-auth';
// import * as GoogleSignIn from 'expo-google-sign-in';

// const { GoogleSignIn } = require('expo-google-sign-in');

// GoogleSignIn.initAsync({
//   clientId: '181380347790-rro0rg7qogb0akmivdd8mhmkm8trkhgc.apps.googleusercontent.com',
// });

// const signInWithGoogle = async () => {
//   try {
//     await GoogleSignIn.askForPlayServicesAsync();
//     const { type, user } = await GoogleSignIn.signInAsync();

//     if (type === 'success') {
//       // Get the user's Google ID token and access token
//       const { idToken, accessToken } = user.auth;

//       // Create a Firebase credential with the Google tokens
//       const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);

//       // Sign in to Firebase with the Google credential
//       await firebase.auth().signInWithCredential(credential);

//       console.log('Signed in with Google!');
//     } else {
//       console.log('Google sign-in cancelled');
//     }
//   } catch (error) {
//     console.log('Error signing in with Google:', error);
//   }
// };

import CustomButton from "../components/CustomButton";
import CustomButtonWithIcon from "../components/CustomButtonWithIcon";
import Colors from "../utilities/Colors";
import { MotiImage } from "moti";






const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const googleConfig = {
    clientId: '181380347790-rro0rg7qogb0akmivdd8mhmkm8trkhgc.apps.googleusercontent.com',
    redirectUrl: `https://auth.expo.io/@lawrencepinlock/senzers:expo-google-auth`,
    scopes: ['profile', 'email'],
  };


  const signInWithGoogle = async () => {
    try {
      const { type, user } = await GoogleSignIn.signInAsync(googleConfig);
      if (type === 'success') {
        const credential = firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken);
        await firebase.auth().signInWithCredential(credential);
      }
    } catch ({ message }) {
      console.error('Error signing in with Google: ', message);
    }
  };
  

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
      <View style={styles.logoAndTextContainer}>
        <MotiImage
          source={Logos.SENZERS_LOGO_BLACK_MEDIUM}
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
          onPress={() => { signInWithGoogle }}
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
        <Text style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 5 }}>
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
