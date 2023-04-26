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
import EnterInformationScreen from "../screens/enter-information-screen";
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

  const hideTutorial = () => {
    setIsTutorialVisible(false);
  };

  return (
    <>
      {isTutorialVisible && <Tutorial onComplete={hideTutorial} />}
      <Tab.Navigator
        initialRouteName="HomeScreen"
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
                    backgroundColor: Colors.SPLASH_BLACK,
                  }}
                  transition={{
                    type: "timing",
                    duration: 400,
                  }}
                  style={[
                    styles.iconContainer,
                    isFocused && styles.iconContainerFocused,
                  ]}
                >
                  <MotiView
                    from={{
                      translateY: 0,
                    }}
                    animate={{
                      translateY: focused ? (isFocused ? 0 : -5) : 0,
                    }}
                    transition={{
                      type: "timing",
                      duration: 1000,
                      loop: true,
                    }}
                  >
                    <FontAwesome5
                      name="home"
                      color={
                        isFocused ? Colors.PRIMARY_YELLOW : Colors.PRIMARY_WHITE
                      }
                      size={isFocused ? 27 : 22}
                    />
                  </MotiView>
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
                    backgroundColor: Colors.SPLASH_BLACK,
                  }}
                  transition={{
                    type: "timing",
                    duration: 400,
                  }}
                  style={[
                    styles.iconContainer,
                    isFocused && styles.iconContainerFocused,
                  ]}
                >
                  <MotiView
                    from={{
                      translateY: 0,
                    }}
                    animate={{
                      translateY: focused ? (isFocused ? 0 : -5) : 0,
                    }}
                    transition={{
                      type: "timing",
                      duration: 1000,
                      loop: true,
                    }}
                  >
                    <FontAwesome5
                      name="car"
                      color={
                        isFocused ? Colors.PRIMARY_YELLOW : Colors.PRIMARY_WHITE
                      }
                      size={isFocused ? 30 : 25}
                    />
                  </MotiView>
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
                    backgroundColor: Colors.SPLASH_BLACK,
                  }}
                  transition={{
                    type: "timing",
                    duration: 400,
                  }}
                  style={[
                    styles.iconContainer,
                    isFocused && styles.iconContainerFocused,
                  ]}
                >
                  <MotiView
                    from={{
                      translateY: 0,
                    }}
                    animate={{
                      translateY: focused ? (isFocused ? 0 : -5) : 0,
                    }}
                    transition={{
                      type: "timing",
                      duration: 1000,
                      loop: true,
                    }}
                  >
                    <FontAwesome5
                      name="th-large"
                      color={
                        isFocused ? Colors.PRIMARY_YELLOW : Colors.PRIMARY_WHITE
                      }
                      size={isFocused ? 27 : 22}
                    />
                  </MotiView>
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
        <Tab.Screen
          name="ThanksScreen"
          component={ThanksScreen}
          options={() => ({
            tabBarStyle: {
              display: "none",
            },
            tabBarButton: () => null,
          })}
        />
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
    shadowColor: Colors.PRIMARY_BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
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
  iconContainerFocused: {
    width: 60,
    height: 60,
  },
});

export default BottomNavigator;
