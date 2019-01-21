import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { arrayOf, number, shape, string } from 'prop-types';
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  statsContainer: {
    height: 150,
    margin: 20,
  },
  stats: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  statName: { fontSize: 12, padding: 5, textTransform: 'uppercase', fontWeight: 'bold' },
});

const PokemonStats = ({ color, stats }) => (
  <View style={styles.statsContainer}>
    {stats.map(({ averageStat, colorStat, name }) => (
      <View key={name} style={styles.stats}>
        <Text style={[styles.statName, { color: color.primary }]}>{name}</Text>
        <Progress.Bar
          progress={averageStat}
          borderColor="transparent"
          color={colorStat}
          height={20}
          width={200}
        />
      </View>
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
    })
  ).isRequired,
};

export default PokemonStats;
