import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { GuildProps } from '../../components/Appointment';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type GuildsProps = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    { id: '1', name: 'Lendários', icon: null, owner: true },
    { id: '2', name: 'Lendários', icon: null, owner: true },
  ];
  return (
    <View style={styles.container}>
      <Text>Guilds</Text>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
