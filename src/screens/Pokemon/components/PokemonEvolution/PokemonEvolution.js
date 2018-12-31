import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

const styles = StyleSheet.create({
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

const PokemonEvolution = ({ backgroundColor }) => (
  <React.Fragment>
    <View style={[styles.pokemonEvolution, { backgroundColor }]}>
      <Text style={styles.pokemonEvolutionTitle}>Evolutions</Text>
    </View>
    <View style={styles.pokemonEvolutionGrid}>
      <Text style={{ backgroundColor: 'red', flex: 1 }}>First</Text>
      <Text style={{ backgroundColor: 'yellow', flex: 1 }}>Second</Text>
      <Text style={{ backgroundColor: 'blue', flex: 1 }}>Third</Text>
    </View>
  </React.Fragment>
);

PokemonEvolution.propTypes = {
  backgroundColor: string.isRequired,
};

export default PokemonEvolution;
