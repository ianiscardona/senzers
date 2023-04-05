import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/dashboard-screen";
import HistoryScreen from "../screens/history-screen";
import AlertScreen from "../screens/alert-screen";
import ProfileScreen from "../screens/profile-screen";

const MainTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <MainTab.Screen name="Dashboard" component={DashboardScreen} />
      <MainTab.Screen name="History" component={HistoryScreen} />
      <MainTab.Screen name="Alert" component={AlertScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

export default Tabs;
