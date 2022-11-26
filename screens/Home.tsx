import React, { useCallback } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Box, Button, Text } from 'native-base';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Fab, Option } from '../components/Fab';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const fabOptions: Option[] = [
  {
    iconName: 'today',
    to: 'Checkin',
  },
  {
    iconName: 'pencil',
    to: 'Edit',
  },
  {
    iconName: 'flag',
    to: 'Goal',
  },
];

export const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const handleLogOut = useCallback(() => {
    signOut(auth);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Box
        height="100%"
        backgroundColor="pink.100"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="lg">Home</Text>
        <Button onPress={handleLogOut}>Log out</Button>
        <Fab options={fabOptions} />
      </Box>
    </SafeAreaView>
  );
};
