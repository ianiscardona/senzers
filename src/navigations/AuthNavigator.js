import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login-screen";
import RegisterScreen from "../screens/register-screen";
import TermsScreen from "../screens/terms-screen";
import PrivacyScreen from "../screens/privacy-screen";

const Stack = createStackNavigator();

function AuthNavigator({ onLogin }) {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ onLogin }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Terms"
        component={TermsScreen}
        options={{
          title: "Terms of Use",
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{
          title: "Privacy Policy",
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
