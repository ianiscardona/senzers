import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import DashboardScreen from "../screens/dashboard-screen";
import HistoryScreen from "../screens/history-screen";
import ProfileScreen from "../screens/profile-screen";
import HomeScreen from "../screens/home-screen";

import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ user, onLogout }) => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              color={focused ? "#FFBC00" : "#FFFFFF"}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="car"
              color={focused ? "#FFBC00" : "#FFFFFF"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="th-large"
              color={focused ? "#FFBC00" : "#FFFFFF"}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 20,
    left: 60,
    right: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#141414",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default BottomNavigator;
