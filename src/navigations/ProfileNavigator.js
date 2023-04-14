import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProfileScreen from "../screens/profile-screen";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
