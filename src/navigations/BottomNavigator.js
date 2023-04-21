import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import DashboardScreen from "../screens/dashboard-screen";
import AlertScreen from "../screens/alert-screen";
import AccountScreen from "../screens/account-screen";
import HomeScreen from "../screens/home-screen";
import ChangePasswordScreen from "../screens/change-password-screen";
import { FontAwesome5 } from "@expo/vector-icons";
import ThanksScreen from "../screens/thanks-screen";
import Tutorial from "../components/Tutorial";
import { MotiView } from "moti";
import { useIsFocused } from "@react-navigation/native";
import Colors from "../utilities/Colors";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ user, onLogout }) => {
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);

  useEffect(() => {
    // Check if tutorial has been shown before
    AsyncStorage.getItem("hasShownTutorial").then((value) => {
      if (!value) {
        setIsTutorialVisible(true);
        AsyncStorage.setItem("hasShownTutorial", "true");
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  const hideTutorial = () => {
    setIsTutorialVisible(false);
  };

  return (
    <>
      {isTutorialVisible && <Tutorial onComplete={hideTutorial} />}
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
            tabBarIcon: ({ focused }) => {
              const isFocused = useIsFocused();

              return (
                <MotiView
                  from={{
                    scale: 1,
                    translateY: 0,
                  }}
                  animate={{
                    scale: isFocused ? 1.2 : 1,
                    translateY: isFocused ? -20 : 0,
                    backgroundColor: isFocused
                      ? Colors.PRIMARY_YELLOW
                      : Colors.SPLASH_BLACK,
                  }}
                  transition={{
                    type: "timing",
                    duration: 300,
                  }}
                  style={styles.iconContainer}
                >
                  <FontAwesome5
                    name="home"
                    color={
                      isFocused ? Colors.SPLASH_BLACK : Colors.PRIMARY_YELLOW
                    }
                    size={22}
                  />
                </MotiView>
              );
            },
          }}
        />
        <Tab.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const isFocused = useIsFocused();

              return (
                <MotiView
                  from={{
                    scale: 1,
                    translateY: 0,
                  }}
                  animate={{
                    scale: isFocused ? 1.2 : 1,
                    translateY: isFocused ? -20 : 0,
                    backgroundColor: isFocused
                      ? Colors.SPLASH_BLACK
                      : Colors.SPLASH_BLACK,
                  }}
                  transition={{
                    type: "timing",
                    duration: 300,
                  }}
                  style={styles.iconContainer}
                >
                  <FontAwesome5
                    name="car"
                    color={
                      isFocused ? Colors.PRIMARY_YELLOW : Colors.PRIMARY_WHITE
                    }
                    size={25}
                  />
                </MotiView>
              );
            },
          }}
        />
        <Tab.Screen
          name="AlertScreen"
          component={AlertScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const isFocused = useIsFocused();

              return (
                <MotiView
                  from={{
                    scale: 1,
                    translateY: 0,
                  }}
                  animate={{
                    scale: isFocused ? 1.2 : 1,
                    translateY: isFocused ? -20 : 0,
                    backgroundColor: isFocused
                      ? Colors.PRIMARY_WHITE
                      : Colors.SPLASH_BLACK,
                  }}
                  transition={{
                    type: "timing",
                    duration: 300,
                  }}
                  style={styles.iconContainer}
                >
                  <FontAwesome5
                    name="th-large"
                    color={
                      isFocused ? Colors.PRIMARY_YELLOW : Colors.PRIMARY_WHITE
                    }
                    size={22}
                  />
                </MotiView>
              );
            },
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
        <Tab.Screen name="ThanksScreen" component={ThanksScreen} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    // position: "absolute",
    // bottom: 20,
    // left: 60,
    // right: 60,
    // height: 60,
    // borderRadius: 10,
    backgroundColor: Colors.SPLASH_BLACK,
    shadowColor: Colors.SECONDARY_LIGHT_YELLOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavigator;
