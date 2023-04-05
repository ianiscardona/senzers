import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/dashboard-screen";
import HistoryScreen from "../screens/history-screen";
import AlertScreen from "../screens/alert-screen";
import ProfileScreen from "../screens/profile-screen";
import HomeScreen from "../screens/home-screen";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 80,
          elevation: 0,
          borderRadius: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              solid
              color={focused ? "#000000" : "#808080"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Alert"
        component={AlertScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="car"
              solid
              color={focused ? "#000000" : "#808080"}
              size={25}
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
              solid
              color={focused ? "#000000" : "#808080"}
              size={35}
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
              solid
              color={focused ? "#000000" : "#808080"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user"
              solid
              color={focused ? "#000000" : "#808080"}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
