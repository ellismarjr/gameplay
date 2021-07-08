import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GuildIcon } from '../GuildIcon';

import { GuildData } from '../Appointment';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type GuildProps = TouchableOpacityProps & {
  data: GuildData;
};

export function Guild({ data, ...rest }: GuildProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} style={styles.container}>
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convdado'}
          </Text>
        </View>
      </View>

      <Feather name="chevrons-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
