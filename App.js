import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/login-screen";
import BottomNavigator from "./src/navigations/BottomNavigator";
import TopBar from "./src/components/TopBar";

export default function App() {
  return (
    <NavigationContainer>
      {/* <TopBar /> */}
      <BottomNavigator />
      {/* <LoginScreen /> */}
    </NavigationContainer>
  );
}
