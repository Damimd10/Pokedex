import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { arrayOf, number, shape, string } from 'prop-types';
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  statsContainer: {
    justifyContent: 'center',
    height: 150,
    margin: 20,
  },
  statDetailsContainer: {
    width: 40,
  },
  stats: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statInfo: {
    fontSize: 12,
    padding: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

const PokemonStats = ({ color, stats }) => (
  <View style={styles.statsContainer}>
    {stats.map(({ averageStat, colorStat, name }) => (
      <View key={name} style={styles.stats}>
        <View style={styles.statDetailsContainer}>
          <Text style={[styles.statInfo, { color: color.primary }]}>{name}</Text>
        </View>
        <View style={styles.statDetailsContainer}>
          <Text style={[styles.statInfo, { color: color.primary }]}>000</Text>
        </View>
        <Progress.Bar
          progress={averageStat}
          borderColor="transparent"
          borderRadius={50}
          color={colorStat}
          height={10}
          width={250}
          unfilledColor="#F1F1F1"
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
