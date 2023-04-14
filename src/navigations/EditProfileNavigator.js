import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileContent from "../components/ProfileContent";
import EditProfile from "../components/EditProfileContent";

const EditTab = createMaterialTopTabNavigator();

const EditProfileNavigator = () => {
  return (
    <EditTab.Navigator
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        tabBarStyle: { display: "none" },
        swipeEnabled: false,
      }}
    >
      <EditTab.Screen name="Profile" component={ProfileContent} />
      <EditTab.Screen name="Edit" component={EditProfile} />
    </EditTab.Navigator>
  );
};

export default EditProfileNavigator;

const styles = StyleSheet.create({});
