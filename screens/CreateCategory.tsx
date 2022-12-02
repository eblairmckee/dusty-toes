import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Box, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export type CreateCategoryProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateCategory'
>;

export const CreateCategoryScreen: React.FC<CreateCategoryProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Box height="100%" justifyContent="center" alignItems="center">
        <Text fontSize="lg">CreateCategory</Text>
      </Box>
    </SafeAreaView>
  );
};
