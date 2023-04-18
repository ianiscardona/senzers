import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNavTopBar from "../components/BottomNavTopBar";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <BottomNavTopBar topBarTitle={"WELCOME"} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
