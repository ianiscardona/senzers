import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import topBarBG from "../../assets/images/topbar-bg-1.png";
import React from "react";
import AccountNavigator from "../navigations/AccountNavigator";

const ProfileScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.topBar}>
        <View style={styles.topBarInfo}>
          <ImageBackground style={styles.topBarBgImage} source={topBarBG}>
            <Text
              style={[
                styles.topBarText,
                {
                  fontSize: 30,
                  marginBottom: 5,
                },
              ]}
            >
              MY PROFILE
            </Text>
            <Text
              style={[
                styles.topBarText,
                {
                  fontSize: 20,
                },
              ]}
            >
              Hello,
            </Text>
            <Text
              style={[
                styles.topBarText,
                {
                  fontSize: 25,
                },
              ]}
            >
              Juan Dela Cruz
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.content}>
        <AccountNavigator />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    zIndex: 1,
    width: "100%",
    height: "30%",
  },
  topBarInfo: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  topBarBgImage: {
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: "5%",
    resizeMode: "cover",
  },
  topBarText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  circle: {
    zIndex: 1,
    position: "absolute",
    bottom: -64,
    alignSelf: "center",
    width: 128,
    height: 128,
    backgroundColor: "gray",
    borderRadius: 999,
  },
  content: {
    zIndex: 0,
    paddingTop: "5%",
    paddingHorizontal: "5%",
    width: "100%",
    height: "70%",
  },
});
