import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type ButtonAddProps = RectButtonProps;

export function ButtonAdd({ ...rest }: ButtonAddProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
}
