import { NavHeader } from '../components/NavHeader';
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
          header: (props) => <NavHeader hidden {...props} />,
        }}
        component={LoggedOutScreen}
      />
      <Stack.Screen
        name="LogIn"
        options={{
          header: () => <NavHeader />,
        }}
        component={LogInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{ title: '' }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};
