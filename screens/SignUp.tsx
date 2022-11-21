import React, { useCallback, useState } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import {
  Button,
  Heading,
  Icon,
  Input,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth } from '../firebaseConfig';
import { View } from '../components/View';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC<Props> = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleEmailChange = useCallback((val) => {
    setEmail(val);
    if (errorMessage) {
      setErrorMessage(undefined);
    }
  }, []);
  const handlePasswordChange = useCallback((val) => {
    setPassword(val);
    if (errorMessage) {
      setErrorMessage(undefined);
    }
  }, []);
  const handleSubmitPress = useCallback(() => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorMessage(error.message)
    );
  }, []);

  return (
    <View isSafe flex={1}>
      <KeyboardAwareScrollView enableOnAndroid>
        <VStack space={5} flex={1} justifyContent="center" alignItems="center">
          <Heading fontSize="lg">Sign up</Heading>
          <VStack space={3} alignItems="center" width="80%">
            <Input
              variant="rounded"
              type="text"
              placeholder="email"
              onChangeText={handleEmailChange}
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
              onChangeText={handlePasswordChange}
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
            {errorMessage && <Text color="danger.500">{errorMessage}</Text>}
          </VStack>
        </VStack>
      </KeyboardAwareScrollView>
    </View>
  );
};
