import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import Walkthrough from "./src/components/Walkthrough";
import AuthNavigator from "./src/navigations/AuthNavigator";
import BottomNavigator from "./src/navigations/BottomNavigator";

import { firebase } from "./firebase";
import EnterInformationScreen from "./src/screens/enter-information-screen";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedWalkthrough, setHasCompletedWalkthrough] = useState(false);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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
    // Check if the user has completed the walkthrough before
    AsyncStorage.getItem("hasCompletedWalkthrough")
      .then((value) => {
        if (value !== null) {
          setHasCompletedWalkthrough(true);
        }
        setInitializing(false); // set initializing to false after checking AsyncStorage
      })
      .catch((error) => {
        console.log("Error retrieving data:", error);
        setInitializing(false); // set initializing to false even if there is an error
      });
  }, []);

  // useEffect(() => {
  //   AsyncStorage.clear();
  // }, []);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;

  if (!user) {
    return (
      <>
        {hasCompletedWalkthrough ? (
          <AuthNavigator />
        ) : (
          <Walkthrough onComplete={handleCompleteWalkthrough} />
        )}
      </>
    );
  }
  return <BottomNavigator />;
  // return (
  //   <NavigationContainer>
  //     {isAuthenticated ? (
  //       hasCompletedWalkthrough ? (
  //         <BottomNavigator />
  //       ) : (
  //         <Walkthrough onComplete={handleCompleteWalkthrough} />
  //       )
  //     ) : (
  //       <AuthNavigator onLogin={handleLogin} />
  //     )}
  //   </NavigationContainer>
  // );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
