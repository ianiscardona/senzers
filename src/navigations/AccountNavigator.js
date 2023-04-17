import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileContent from "../components/ProfileContent";
import EditProfile from "../components/EditProfileContent";
import SettingsContent from "../components/SettingsContent";

const AccountTab = createMaterialTopTabNavigator();

const AccountNavigator = () => {
  return (
    <AccountTab.Navigator
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        tabBarStyle: { display: "none" },
        swipeEnabled: false,
      }}
    >
      <AccountTab.Screen name="SettingsContent" component={SettingsContent} />
      <AccountTab.Screen name="ProfileContent" component={ProfileContent} />
      <AccountTab.Screen name="EditProfile" component={EditProfile} />
    </AccountTab.Navigator>
  );
};

export default AccountNavigator;

const styles = StyleSheet.create({});
