import React, { useCallback } from 'react';
import { Routes } from '../../types/navigation';
import { IconButton, useDisclose, View, VStack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { OptionButton } from './OptionButton';
import { StyleSheet } from 'react-native';

export type Option = {
  label?: string;
  to: Routes;
  // TODO: type this
  iconName: string;
};

type FabProps = {
  options: Option[];
  size?: number;
};

const defaultSize = 12;

export const Fab: React.FC<FabProps> = ({ options, size = defaultSize }) => {
  const { isOpen, onToggle, onClose } = useDisclose();

  const handleFabPress = useCallback(() => {
    onToggle();
  }, []);

  return (
    <>
      <IconButton
        as={<Ionicons name="pencil" />}
        size={size}
        color="#ffffff"
        borderRadius="full"
        bg="primary.500"
        onPress={handleFabPress}
        position="absolute"
        bottom={10}
        right={10}
      />
      {isOpen ? (
        <View style={[styles.menu]}>
          <VStack space={1}>
            {options.map(({ iconName, label, to }) => (
              <OptionButton
                // @ts-ignore
                as={<Ionicons name={iconName} />}
                onPress={onClose}
                to={to}
                size={size}
                color="#ffffff"
                borderRadius="full"
                bg="primary.500"
              />
            ))}
          </VStack>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
