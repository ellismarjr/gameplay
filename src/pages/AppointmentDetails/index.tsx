import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';

import { theme } from '../../global/styles/theme';

import bannerImage from '../../assets/banner.png';
import { styles } from './styles';

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

      <ImageBackground source={bannerImage} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoe que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
    </Background>
  );
}
