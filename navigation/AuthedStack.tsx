import { NavHeader } from '../components/NavHeader';
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
          header: (props) => <NavHeader hidden {...props} />,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="CheckIn"
        options={{
          header: (props) => <NavHeader />,
        }}
        component={CheckinScreen}
      />
    </Stack.Navigator>
  );
};
