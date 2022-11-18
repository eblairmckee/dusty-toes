import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
