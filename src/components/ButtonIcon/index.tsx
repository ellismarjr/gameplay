import React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native';

import discordImg from '../../assets/discord.png';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
