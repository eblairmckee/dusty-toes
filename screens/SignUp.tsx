import React, { useCallback, useState } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Button, Heading, Icon, Input, Pressable, VStack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth } from '../firebaseConfig';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC<Props> = () => {
  const [email, setUserName] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailChange = useCallback(() => {}, []);
  const handlePasswordChange = useCallback(() => {}, []);
  const handleSubmitPress = useCallback(() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }, []);
  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <VStack space={5} flex={1} justifyContent="center" alignItems="center">
        <Heading fontSize="lg">Sign up</Heading>
        <VStack space={3} alignItems="center" width="80%">
          <Input
            variant="rounded"
            type="text"
            placeholder="email"
            onChange={handleEmailChange}
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
    </KeyboardAwareScrollView>
  );
};
