import React from 'react';
import { StyleSheet, View } from 'react-native';

import StatsDetails from '../StatsDetails';
import { NormalizedPokemon } from '../../../../../../services/models';

const styles = StyleSheet.create({
  statsContainer: {
    justifyContent: 'center',
    height: 150,
    margin: 20,
  },
});

type Props = Pick<NormalizedPokemon, 'color' | 'stats'>;

const PokemonStats: React.FunctionComponent<Props> = ({ color, stats }) => (
  <View style={styles.statsContainer}>
    {stats.map(stat => (
      <StatsDetails key={stat.name} color={color} {...stat} />
    ))}
  </View>
);

export default PokemonStats;
