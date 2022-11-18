import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './screens/Splash';
import { HomeScreen } from './screens/Home';
import { CheckinScreen } from './screens/Checkin';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{ title: 'Splashy' }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ title: 'Home' }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Checkin"
          options={{ title: 'Checkin' }}
          component={CheckinScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
