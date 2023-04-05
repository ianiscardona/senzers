import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
