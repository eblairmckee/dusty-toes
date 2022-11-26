import React, { useMemo, useRef, useState } from 'react';
import { Routes } from '../../types/navigation';
import { Box, IconButton, useDisclose, VStack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { OptionButton } from './OptionButton';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

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

const gap = 30;
const defaultSize = 12;

export const Fab: React.FC<FabProps> = ({ options, size = defaultSize }) => {
  const { isOpen, onToggle, onClose } = useDisclose();
  const menuHeight = useSharedValue<number>(0);

  const menuOnLayout = (event) => {
    menuHeight.value = event.nativeEvent.layout.height;
  };

  const calculatedOffset = useDerivedValue(() => {
    const offset = parseInt(menuHeight.value.toFixed(0)) * -1 - size - gap;
    return offset;
  });

  const animatedMenuStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: calculatedOffset.value }],
    };
  }, [menuHeight]);

  return (
    <>
      <IconButton
        as={<Ionicons name="pencil" />}
        size={size}
        color="#ffffff"
        borderRadius="full"
        bg="primary.500"
        onPress={onToggle}
        position="absolute"
        bottom={10}
        right={10}
      />
      {isOpen ? (
        <Animated.View
          style={[styles.menu, animatedMenuStyles]}
          onLayout={menuOnLayout}
        >
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
        </Animated.View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    left: defaultSize * -4,
  },
});
