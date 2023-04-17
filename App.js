import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import Walkthrough from "./src/components/Walkthrough";
import AuthNavigator from "./src/navigations/AuthNavigator";
import BottomNavigator from "./src/navigations/BottomNavigator";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedWalkthrough, setHasCompletedWalkthrough] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleCompleteWalkthrough = () => {
    setHasCompletedWalkthrough(true);
    AsyncStorage.setItem("hasCompletedWalkthrough", "true")
      .then(() => {
        console.log("Walkthrough completed.");
      })
      .catch((error) => {
        console.log("Error saving data:", error);
      });
  };

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  useEffect(() => {
    // Check if the user has completed the walkthrough before
    AsyncStorage.getItem("hasCompletedWalkthrough")
      .then((value) => {
        if (value !== null) {
          setHasCompletedWalkthrough(true);
        }
      })
      .catch((error) => {
        console.log("Error retrieving data:", error);
      });
  }, []);

  return (
    <NavigationContainer>
      {/* {isAuthenticated ? (
        hasCompletedWalkthrough ? (
          <BottomNavigator />
        ) : (
          <Walkthrough onComplete={handleCompleteWalkthrough} />
        )
      ) : (
        <AuthNavigator onLogin={handleLogin} />
      )} */}
      <ProfileNavigator />
    </NavigationContainer>
  );
}
