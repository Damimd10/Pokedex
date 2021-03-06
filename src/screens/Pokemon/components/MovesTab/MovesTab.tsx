import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Body, ListItem, Text, Right,
} from 'native-base';

import { toCapitalizeText } from '../../../../shared/utils';
import { NormalizedPokemon } from '../../../../services/models';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  levelText: {
    fontFamily: 'Oxygen-Bold',
    color: '#B8B8B8',
    fontSize: 13,
  },
  moveName: {
    fontFamily: 'Oxygen-Regular',
    color: '#505050',
    fontSize: 20,
  },
});

export type MovesTabProps = Pick<NormalizedPokemon, 'moves'>;

const MovesTab: React.FunctionComponent<MovesTabProps> = ({ moves }) => (
  <View style={styles.container}>
    {moves.map(({ level, name, typeIcon }) => (
      <ListItem icon key={name} style={{ margin: 5 }}>
        <Body>
          <Text style={styles.moveName}>{toCapitalizeText(name)}</Text>
          <Text style={styles.levelText}>{`Level ${level}`}</Text>
        </Body>
        <Right>
          <Image
            source={typeIcon}
            style={{ height: 40, width: 40, borderRadius: 20 }}
          />
        </Right>
      </ListItem>
    ))}
  </View>
);

export default MovesTab;
