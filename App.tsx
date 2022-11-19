import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoggedOutScreen } from './screens/LoggedOut';
import { HomeScreen } from './screens/Home';
import { CheckinScreen } from './screens/Checkin';
import { NativeBaseProvider } from 'native-base';
import { theme } from './styles/theme';
import { NavHeader } from './components/NavHeader';
import { LogInScreen } from './screens/LogIn';
import { SignUpScreen } from './screens/SignUp';
import { useState } from 'react';
import { Splash } from './components/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthed, setIsAuthed] = useState<boolean>(true);
  return isLoading ? (
    <Splash />
  ) : (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthed ? (
            <>
              <Stack.Screen
                name="Home"
                options={{
                  header: () => <NavHeader />,
                }}
                component={HomeScreen}
              />
              <Stack.Screen
                name="Checkin"
                options={{
                  header: () => <NavHeader />,
                }}
                component={CheckinScreen}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
