import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login-screen";
import RegisterScreen from "../screens/register-screen";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
