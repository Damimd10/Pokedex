import React from 'react';
import { number, string } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    margin: 5,
  },
  moveName: {
    textTransform: 'capitalize',
    width: '50%',
  },
  accuracyPercentage: {
    width: 50,
  },
  powerPoints: {
    width: 50,
  },
  ppPoints: {
    width: 50,
  },
});

const PokemonMove = ({ accuracy, name, power, pp }) => (
  <View style={styles.container}>
    <Text style={styles.moveName}>{name}</Text>
    <Text style={styles.accuracyPercentage}>{accuracy}</Text>
    <Text style={styles.powerPoints}>{power}</Text>
    <Text style={styles.ppPoints}>{pp}</Text>
  </View>
);

PokemonMove.propTypes = {
  accuracy: number.isRequired,
  name: string.isRequired,
  power: number.isRequired,
  pp: number.isRequired,
};

export default PokemonMove;
