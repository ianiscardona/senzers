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
import { auth,firestore,db  } from "../../firebase";
import Logos from "../utilities/Logos";
import {firebase} from "../../firebase";
import { collection, doc, setDoc, addDoc} from "firebase/firestore";
import { add, set } from "react-native-reanimated";

const EnterInformationScreen = ({ onComplete }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isSelected, setSelection] = useState(false);
  // const {email,password} = route.params;

  // const handleSignup = (email, password) => {
  //   firebase.auth()
  //   .createUserWithEmailAndPassword(email,password)
  //   .then(userCredentials => {
  //    const user =  userCredentials.user;
  //    console.log(user.uid);
 
  //   })
  //   .catch(error => alert(error.message))
  //  }


// const handleregistration = (email, password) => {
//   try {
//     // handleSignup(email, password);
//     AddInfo();
//   } catch (error) {
//     alert(error.message);}
 



function AddUser () {
  const user = firebase.auth().currentUser;
  if (!user) {
    console.error("Error: User not logged in");
    return;
  }
  const docRef = doc(db, "NewUsers", user.uid);
  const data = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    address: address,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
    // CreatedAt: firestore.Timestamp.fromDate(new Date())
  };
  setDoc(docRef, data)
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
    });
}

function handleStart() {
  AddUser();
  onComplete();
}






// function AddUser () {
//   const user = firebase.auth().currentUser;
//   const docRef = doc(db, "NewUsers", user.uid, "bumfEXdxx5YERAmMIfNxJoMnZ993"); // Use the doc function to create a document reference
//   const data = {
//     firstName: firstName,
//     lastName: lastName,
//     phoneNumber: phoneNumber,
//     address: address
//   };
//   addDoc(docRef, data)
//     .then(() => {
//       console.log("Data saved successfully!");
//     })
//     .catch((error) => {
//       console.error("Error saving data: ", error);
//     });
// }

  function NewProfile () {
    const userRef = doc(db, "UserProfile", currentUser.uid);
    set(userRef, {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address
    }).then(() => { 
      // Data saved successfully!
      console.log('data submitted');  
    }).catch((error) => {
      // The write failed...
      console.log(error);
    });
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
            keyboardType="numeric"
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
