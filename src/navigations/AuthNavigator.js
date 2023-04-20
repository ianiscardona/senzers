import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login-screen";
import RegisterScreen from "../screens/register-screen";
import TermsScreen from "../screens/terms-screen";
import PrivacyScreen from "../screens/privacy-screen";
import ForgotScreen from "../screens/forgot-screen";
import EnterInformationScreen from "../screens/enter-information-screen";

const Stack = createStackNavigator();

function AuthNavigator({ onLogin }) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ onLogin }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="EnterInformation"
        component={EnterInformationScreen}
        initialParams={{ onLogin }}
      />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
