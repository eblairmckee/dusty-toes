import { LogInScreen } from '../screens/LogIn';
import { SignUpScreen } from '../screens/SignUp';
import { LoggedOutScreen } from '../screens/LoggedOut';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoggedOut"
        options={{
          headerShown: false,
        }}
        component={LoggedOutScreen}
      />
      <Stack.Screen
        name="LogIn"
        options={{
          headerShown: false,
        }}
        component={LogInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{ title: '', headerShown: false }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};
