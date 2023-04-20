import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import HistoryNavigator from "../navigations/HistoryNavigator";
import BottomNavTopBar from "../components/BottomNavTopBar";
import { FontAwesome5 } from "@expo/vector-icons";
import FilterTool from "../components/FilterTool";

const AlertScreen = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState("History");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <BottomNavTopBar topBarTitle={"ALERTS"} navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.contentContainer}>
          <View style={styles.contentButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.contentButtons,
                activeButton === "History" && styles.activeButton,
              ]}
              onPress={() => {
                setActiveButton("History");
                navigation.navigate("History");
              }}
            >
              <Text
                style={[
                  styles.contentButtonsText,
                  activeButton === "History" && styles.activeButtonText,
                ]}
              >
                History
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.contentButtons,
                activeButton === "Notifications" && styles.activeButton,
              ]}
              onPress={() => {
                setActiveButton("Notifications");
                navigation.navigate("Notification");
              }}
            >
              <Text
                style={[
                  styles.contentButtonsText,
                  activeButton === "Notifications" && styles.activeButtonText,
                ]}
              >
                Notifications
              </Text>
            </TouchableOpacity>
          </View>
          <FilterTool onSelect={handleSelect} />
        </View>
        <HistoryNavigator />
      </View>
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  content: {
    zIndex: 0,
    flex: 1,
    paddingHorizontal: "5%",
  },
  contentContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  contentButtonsContainer: { flexDirection: "row" },
  contentButtons: {
    marginRight: 10,
    paddingVertical: 5,
  },
  contentButtonsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8A8A8F",
    textDecorationLine: "none",
  },
  activeButton: {
    borderBottomColor: "#000",
    borderBottomWidth: 3,
  },
  activeButtonText: {
    color: "#000",
  },
});
