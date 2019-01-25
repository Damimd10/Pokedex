import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import PokemonType from '../../../../shared/components/PokemonType/PokemonType';

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    flex: 1,
    padding: 10,
    width: '100%',
  },
  pokemonName: {
    margin: 10,
    fontSize: 30,
    textTransform: 'capitalize',
  },
  pokemonTypes: {
    margin: 10,
  },
});

const PokemonDetails = ({ name, types }) => (
  <View style={styles.detailsContainer}>
    <Text style={styles.pokemonName}>{name}</Text>
    <View style={styles.pokemonTypes}>
      {types.map(type => console.log('HERE', type) || <PokemonType key={type.name} {...type} />)}
    </View>
    <Text>Pokemon Description</Text>
  </View>
);

PokemonDetails.propTypes = {
  name: string.isRequired,
  types: arrayOf(
    shape({
      color: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default PokemonDetails;
