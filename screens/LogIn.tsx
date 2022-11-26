import React, { useCallback, useState } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from '@react-navigation/native';
import { useAuthenticatedUserContext } from '../providers/AuthenticatedUserProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export const LogInScreen: React.FC<Props> = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { setUser } = useAuthenticatedUserContext();

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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch(({ code, message }) => {
        setErrorMessage(`Code: ${code} | ${message}`);
      });
  }, []);

  return (
    <SafeAreaView>
      <View flex={1}>
        <KeyboardAwareScrollView enableOnAndroid>
          <VStack
            space={5}
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <Heading fontSize="lg">Log in</Heading>
            <VStack
              flex={1}
              space={3}
              justifyContent="center"
              alignItems="center"
              width="80%"
            >
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
              <Button onPress={handleSubmitPress}>Log in</Button>
              {errorMessage && <Text color="danger.500">{errorMessage}</Text>}
            </VStack>
            <Text color="muted.400">
              Don't have an account yet?{' '}
              <Link to={{ screen: 'SignUp' }}>Sign up</Link>
            </Text>
          </VStack>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
