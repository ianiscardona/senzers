import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import changePasswordImage from "../../assets/images/change-password-1.png";
import CustomButton from "../components/CustomButton";
import { firebase } from "../../firebase";
import { ScrollView } from "react-native-gesture-handler";

const ChangePasswordScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleGoBack = () => {
    Alert.alert(
      "Security",
      "You will be redirected to the home page if you execute this action.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };

  //Change User Password
  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={handleGoBack}
        style={{
          alignSelf: "flex-start",
        }}
      >
        <FontAwesome5
          name="angle-left"
          size={30}
          color="black"
          style={{ width: 30 }}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={changePasswordImage}
          alt="change-password-image"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Change Password</Text>
      <View style={styles.contentInputContainer}>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Old Password</Text>
          <TextInput
            placeholder="Old Password"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>New Password</Text>
          <TextInput
            placeholder="New Password"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>
            Confirm Password
          </Text>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
      </View>
      <CustomButton
        text={"Save Changes"}
        onPress={changePassword}
        //   () =>
        //   Alert.alert(
        //     "Save Successful",
        //     "You have changed your password successfully!"
        //   )
        // }
      ></CustomButton>
    </ScrollView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: "5%",
  },
  imageContainer: {},
  contentInputContainer: {
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-evenly",
  },
  contentInput: {
    borderWidth: 0.5,
    backgroundColor: "lightgray",
    borderRadius: 999,
    padding: 10,
    marginBottom: 10,
  },
});
