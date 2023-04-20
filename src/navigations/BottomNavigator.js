import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import DashboardScreen from "../screens/dashboard-screen";
import AlertScreen from "../screens/alert-screen";
import AccountScreen from "../screens/account-screen";
import HomeScreen from "../screens/home-screen";
import ChangePasswordScreen from "../screens/change-password-screen";
import { FontAwesome5 } from "@expo/vector-icons";
import EnterInformationScreen from "../screens/enter-information-screen";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ user, onLogout }) => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
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
        name="DashboardScreen"
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
        name="AlertScreen"
        component={AlertScreen}
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
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
            <Tab.Screen
        name="EnterInformationScreen"
        component={EnterInformationScreen}
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
