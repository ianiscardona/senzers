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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TopBar from "../components/TopBar";

const AccountScreen = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
      bounces={false}
    >
      <TopBar />
      <View style={styles.content}>
        <AccountNavigator />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    zIndex: 0,
    paddingTop: "5%",
    paddingHorizontal: "5%",
    width: "100%",
    height: "70%",
  },
});
