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
        onComplete={onComplete} // Pass onComplete as a prop to Walkthrough
      />
    </Stack.Navigator>
  );
};

export default WalkthroughNavigator;
