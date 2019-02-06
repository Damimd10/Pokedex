import React from 'react';
import { StyleSheet, View } from 'react-native';
import { arrayOf, number, shape, string } from 'prop-types';

import StatsDetails from '../StatsDetails';

const styles = StyleSheet.create({
  statsContainer: {
    justifyContent: 'center',
    height: 150,
    margin: 20,
  },
});

const PokemonStats = ({ color, stats }) => (
  <View style={styles.statsContainer}>
    {stats.map(stat => (
      <StatsDetails key={stat.name} color={color} {...stat} />
    ))}
  </View>
);

PokemonStats.propTypes = {
  color: shape({
    dark: string,
    light: string,
    primary: string,
  }).isRequired,
  stats: arrayOf(
    shape({
      averageStat: number,
      baseStat: number,
      colorStat: string,
      name: string,
    }),
  ).isRequired,
};

export default PokemonStats;
