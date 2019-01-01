import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { arrayOf, shape, string } from 'prop-types';

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
        <View
          key={evolution.name}
          style={{
            backgroundColor: color.light,
            flex: 1,
          }}
        >
          <Text style={{ alignSelf: 'center' }}>{evolution.name.toUpperCase()}</Text>
          <Image style={{ alignSelf: 'center', height: 110, width: 110 }} source={{ uri: evolution.sprite }} />
        </View>
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
