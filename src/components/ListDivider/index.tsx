import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type ListDividerProps = {
  isCentered?: boolean;
};

export function ListDivider({ isCentered }: ListDividerProps) {
  return (
    <View
      style={[
        styles.container,
        isCentered
          ? { marginVertical: 12 }
          : { marginTop: 12, marginBottom: 31 },
      ]}
    />
  );
}
