import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

const styles = StyleSheet.create({
  pokemonType: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  pokemonTypeTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const PokemonType = ({ backgroundColor, types }) => (
  <View style={[styles.pokemonType, { backgroundColor }]}>
    <Text style={styles.pokemonTypeTitle}>{types}</Text>
  </View>
);

PokemonType.propTypes = {
  backgroundColor: string.isRequired,
  types: string.isRequired,
};

export default PokemonType;
