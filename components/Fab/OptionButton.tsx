import React from 'react';
import { Routes } from '../../types/navigation';
import { useLinkProps } from '@react-navigation/native';
import { IIconButtonProps, IconButton } from 'native-base';

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

  return <IconButton onPress={onPress} {...props} />;
};
