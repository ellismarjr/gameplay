import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="Agendar partida"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <Text>AppointmentDetails</Text>
    </Background>
  );
}
