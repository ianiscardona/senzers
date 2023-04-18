import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChangePasswordModal from "../screens/change-password-screen";
import ProfileNavigator from "./ProfileNavigator";
import AccountContent from "../components/AccountContent";

const AccountTab = createStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountTab.Screen name="AccountContent" component={AccountContent} />
      <AccountTab.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </AccountTab.Navigator>
  );
};

export default AccountNavigator;

const styles = StyleSheet.create({});
