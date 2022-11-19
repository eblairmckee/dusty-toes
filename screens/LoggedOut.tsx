import React, { useCallback } from 'react';
import { Box, Button, Text, VStack } from 'native-base';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'LoggedOut'>;

export const LoggedOutScreen: React.FC<Props> = ({ navigation }) => {
  const handleLoginPress = useCallback(() => {
    navigation.navigate('LogIn');
  }, []);
  const handleSignUpPress = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);
  return (
    <VStack space={3} flex={1} justifyContent="center" alignItems="center">
      <Button onPress={handleLoginPress}>Login</Button>
      <Button onPress={handleSignUpPress}>Sign up</Button>
    </VStack>
  );
};
