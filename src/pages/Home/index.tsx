import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';

import { FlatList, View } from 'react-native';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false,
      },
      category: '1',
      date: '22/06 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false,
      },
      category: '1',
      date: '22/06 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false,
      },
      category: '1',
      date: '22/06 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId === category ? '' : categoryId);
  }

  const handeNavigateToNewAppointment = useCallback(() => {
    navigation.navigate('AppointmentDetails');
  }, [navigation]);

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handeNavigateToNewAppointment} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader
          title="Partidas agendadas"
          subtitle={String(appointments.length)}
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          contentContainerStyle={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
}
