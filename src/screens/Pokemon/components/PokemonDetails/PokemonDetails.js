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
    paddingTop: 30,
    width: '100%',
  },
  pokemonName: {
    margin: 10,
    fontSize: 30,
    textTransform: 'capitalize',
  },
  pokemonTypes: {
    flexDirection: 'row',
    margin: 10,
  },
  pokemonDescription: {
    color: '#888888',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});

const PokemonDetails = ({ description, name, types }) => (
  <View style={styles.detailsContainer}>
    <Text style={styles.pokemonName}>{name}</Text>
    <View style={styles.pokemonTypes}>
      {types.map(type => (
        <PokemonType key={type.name} {...type} />
      ))}
    </View>
    <Text style={styles.pokemonDescription}>{description}</Text>
  </View>
);

PokemonDetails.propTypes = {
  description: string.isRequired,
  name: string.isRequired,
  types: arrayOf(
    shape({
      color: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default PokemonDetails;
