import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/login-screen";
import BottomNavigator from "./src/navigations/BottomNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
      {/* <LoginScreen /> */}
    </NavigationContainer>
  );
}
