import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Box, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export type EntryDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'EntryDetail'
>;

export const EntryDetailScreen: React.FC<EntryDetailProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Box height="100%" justifyContent="center" alignItems="center">
        <Text fontSize="lg">EntryDetail</Text>
      </Box>
    </SafeAreaView>
  );
};
