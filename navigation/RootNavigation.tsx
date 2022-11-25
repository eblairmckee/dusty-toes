import { AuthedStack } from './AuthedStack';
import { AppStack } from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Splash } from '../components/Splash';
import { useAuthenticatedUserContext } from '../providers/AuthenticatedUserProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const RootNavigation = () => {
  const { user, setUser } = useAuthenticatedUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // if user is authenticated, will fire logic passed in callback
    // returns unsubscribe method
    const unauthenticateUser = onAuthStateChanged(auth, (authenticated) => {
      authenticated ? setUser(authenticated) : setUser(null);
      setIsLoading(false);
    });

    return unauthenticateUser;
  }, []);

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      {user ? <AuthedStack /> : <AppStack />}
    </NavigationContainer>
  );
};
