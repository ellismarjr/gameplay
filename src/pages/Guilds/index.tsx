import React from 'react';
import { FlatList, View } from 'react-native';
import { GuildData } from '../../components/Appointment';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type GuildsProps = {
  handleGuildSelect: (guild: GuildData) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    { id: '1', name: 'Lendários', icon: null, owner: true },
    { id: '2', name: 'Lendários', icon: null, owner: true },
    { id: '3', name: 'Lendários', icon: null, owner: true },
    { id: '4', name: 'Lendários', icon: null, owner: true },
    { id: '5', name: 'Lendários', icon: null, owner: true },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
