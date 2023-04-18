import { StyleSheet } from "react-native";
import React from "react";
import HistoryData from "../data/HistoryData";
import NotificationData from "../data/NotificationData";
import { createStackNavigator } from "@react-navigation/stack";

const HistoryTab = createStackNavigator();

const HistoryNavigator = () => {
  return (
    <HistoryTab.Navigator
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HistoryTab.Screen name="History" component={HistoryData} />
      <HistoryTab.Screen name="Notification" component={NotificationData} />
    </HistoryTab.Navigator>
  );
};

export default HistoryNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    justifyContent: "start",
  },
});
