import React, { useCallback } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Box, Button, Text } from 'native-base';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = () => {
  const handleLogOut = useCallback(() => {
    signOut(auth);
  }, []);

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text fontSize="lg">Home</Text>
      <Button onPress={handleLogOut}>Log out</Button>
    </Box>
  );
};
