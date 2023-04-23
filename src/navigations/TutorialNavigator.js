import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tutorial from "../components/Tutorial";

const Stack = createStackNavigator();

const TutorialNavigator = ({ onComplete }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{ title: "Tutorial" }}
        onComplete={onComplete}
      />
    </Stack.Navigator>
  );
};

export default TutorialNavigator;
