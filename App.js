import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import Walkthrough from "./src/components/Walkthrough";
import AuthNavigator from "./src/navigations/AuthNavigator";
import BottomNavigator from "./src/navigations/BottomNavigator";
import { firebase } from "./firebase";
import SplashScreen from "./src/screens/splash-screen";
import * as Notifications from "expo-notifications";

function useHasCompletedWalkthrough() {
  const [hasCompletedWalkthrough, setHasCompletedWalkthrough] = useState(false);

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);

  useEffect(() => {
    const loadHasCompletedWalkthrough = async () => {
      try {
        const value = await AsyncStorage.getItem("hasCompletedWalkthrough");
        if (value !== null) {
          setHasCompletedWalkthrough(JSON.parse(value));
        }
      } catch (error) {
        console.log("Error retrieving data:", error);
      }
    };
    loadHasCompletedWalkthrough();
  }, []);

  const completeWalkthrough = useCallback(() => {
    AsyncStorage.setItem("hasCompletedWalkthrough", JSON.stringify(true))
      .then(() => {
        console.log("Walkthrough completed.");
        setHasCompletedWalkthrough(true);
      })
      .catch((error) => {
        console.log("Error saving data:", error);
      });
  }, []);

  return [hasCompletedWalkthrough, completeWalkthrough];
}

function useFirebaseAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return user;
}

function AppContent() {
  const [hasCompletedWalkthrough, completeWalkthrough] =
    useHasCompletedWalkthrough();
  const user = useFirebaseAuth();
  const [showWalkthrough, setShowWalkthrough] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWalkthrough(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  if (user) {
    return <BottomNavigator />;
  } else if (hasCompletedWalkthrough) {
    return <AuthNavigator />;
  } else {
    return showWalkthrough ? (
      <Walkthrough onComplete={completeWalkthrough} />
    ) : null;
  }
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  );
}
