import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { useAuth } from '../../hooks/AuthContext';

export function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}e organize suas jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
        </View>
      </View>
    </Background>
  );
}
