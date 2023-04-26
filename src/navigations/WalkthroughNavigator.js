import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Walkthrough from "../components/Walkthrough";

const Stack = createStackNavigator();

const WalkthroughNavigator = ({ onComplete }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Walkthrough"
        component={Walkthrough}
        options={{ title: "Walkthrough" }}
        onComplete={onComplete}
      />
    </Stack.Navigator>
  );
};

export default WalkthroughNavigator;
