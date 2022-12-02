import React from 'react';
import { Routes } from '../../types/navigation';
import { useLinkProps } from '@react-navigation/native';
import { IIconButtonProps, IconButton } from 'native-base';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

type IconButtonProps = {
  to: Routes;
} & IIconButtonProps;

export const OptionButton: React.FC<IconButtonProps> = ({
  to,
  onPress: onPressProp,
  ...props
}) => {
  // @ts-ignore
  const { onPress } = useLinkProps({ to, action: onPressProp });

  return (
    <Animated.View entering={FadeInDown} exiting={FadeInUp}>
      <IconButton onPress={onPress} {...props} />
    </Animated.View>
  );
};
