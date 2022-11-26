import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home';
import { CheckinScreen } from '../screens/Checkin';

const Stack = createStackNavigator();

export const AuthedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="CheckIn"
        options={{
          headerShown: false,
        }}
        component={CheckinScreen}
      />
    </Stack.Navigator>
  );
};
