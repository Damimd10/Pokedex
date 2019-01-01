import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { arrayOf, shape, string } from 'prop-types';

import Evolution from './components/Evolution';

const styles = StyleSheet.create({
  evolutionSprite: {
    width: '100%',
    height: '100%',
  },
  pokemonEvolution: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  pokemonEvolutionTitle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pokemonEvolutionGrid: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const PokemonEvolution = ({ color, evolutions }) => (
  <React.Fragment>
    <View style={[styles.pokemonEvolution, { backgroundColor: color.primary }]}>
      <Text style={styles.pokemonEvolutionTitle}>Evolutions</Text>
    </View>
    <View style={styles.pokemonEvolutionGrid}>
      {evolutions.map(evolution => (
        <Evolution key={evolution.name} {...color} {...evolution} />
      ))}
    </View>
  </React.Fragment>
);

PokemonEvolution.propTypes = {
  color: shape({
    dark: string,
    light: string,
    primary: string,
  }).isRequired,
  evolutions: arrayOf(
    shape({
      name: string,
      sprite: string,
    })
  ).isRequired,
};

export default PokemonEvolution;
