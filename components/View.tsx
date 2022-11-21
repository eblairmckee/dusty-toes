import React from 'react';
import { View as RNView } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const View = ({ isSafe, children, ...props }) => {
  const insets = useSafeAreaInsets();

  if (isSafe) {
    return (
      <RNView style={{ paddingTop: insets.top }} {...props}>
        {children}
      </RNView>
    );
  }

  return <RNView {...props}>{children}</RNView>;
};
