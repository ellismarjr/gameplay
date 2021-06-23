import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  return (
    <Image
      source={{
        uri: 'https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj',
      }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
