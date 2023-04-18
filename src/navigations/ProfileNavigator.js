import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileContent from "../components/ProfileContent";
import EditProfile from "../components/EditProfileContent";

const ProfileTab = createMaterialTopTabNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileTab.Navigator
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        tabBarStyle: { display: "none" },
        swipeEnabled: false,
      }}
    >
      <ProfileTab.Screen name="ProfileContent" component={ProfileContent} />
      <ProfileTab.Screen name="EditProfile" component={EditProfile} />
    </ProfileTab.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
