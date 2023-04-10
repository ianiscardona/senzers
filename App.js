import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/navigations/BottomNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { useState } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    id: 1,
    name: "Juan Dela Cruz",
    email: "juandelacruz@example.com",
  });

  function handleLogin() {
    setIsAuthenticated(true);
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <BottomNavigator />
      ) : (
        <AuthNavigator onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
