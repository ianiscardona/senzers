import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HistoryData from "../data/HistoryData";
import NotificationData from "../data/NotificationData";

const HistoryTab = createMaterialTopTabNavigator();

const HistoryNavigator = () => {
  return (
    <HistoryTab.Navigator
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarContentContainerStyle: {
          backgroundColor: "white",
        },
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          height: 60,
          justifyContent: "start",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: "black",
        },
      }}
    >
      <HistoryTab.Screen name="Historyy" component={HistoryData} />
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
