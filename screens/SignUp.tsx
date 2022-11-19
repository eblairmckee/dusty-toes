import React, { useCallback, useState } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Button, Heading, Icon, Input, Pressable, VStack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC<Props> = () => {
  const [username, setUserName] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleUsernameChange = useCallback(() => {}, []);
  const handlePasswordChange = useCallback(() => {}, []);
  const handleSubmitPress = useCallback(() => {}, []);
  return (
    <VStack space={5} flex={1} justifyContent="center" alignItems="center">
      <Heading fontSize="lg">Sign up</Heading>
      <VStack space={3} alignItems="center" width="80%">
        <Input
          variant="rounded"
          type="text"
          placeholder="username"
          onChange={handleUsernameChange}
          w={{
            base: '75%',
            md: '25%',
          }}
          InputLeftElement={
            <Icon
              as={<Ionicons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
        />
        <Input
          variant="rounded"
          placeholder="password"
          onChange={handlePasswordChange}
          w={{
            base: '75%',
            md: '25%',
          }}
          type={showPassword ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon
                as={<Ionicons name={showPassword ? 'eye' : 'eye-off'} />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        <Button onPress={handleSubmitPress}>Create an account</Button>
      </VStack>
    </VStack>
  );
};
