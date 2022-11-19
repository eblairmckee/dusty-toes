import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Box, Heading } from 'native-base';

type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export const LogInScreen: React.FC<Props> = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Heading fontSize="lg">Log in</Heading>
    </Box>
  );
};
