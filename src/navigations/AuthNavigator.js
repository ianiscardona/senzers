import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login-screen";
import RegisterScreen from "../screens/register-screen";

const Stack = createStackNavigator();

function AuthNavigator({ onLogin }) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ onLogin }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
