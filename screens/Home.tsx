import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Box, Text } from 'native-base';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text fontSize="lg">Home</Text>
    </Box>
  );
};
