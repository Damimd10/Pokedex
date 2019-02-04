import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Tts from 'react-native-tts';

import PokemonType from '../../../../shared/components/PokemonType/PokemonType';

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    flex: 1,
    paddingTop: 5,
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
    fontFamily: 'Oxygen-Bold',
    color: '#868686',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});

export default class PokemonDetails extends Component {
  componentDidMount() {
    const { description, name } = this.props;

    Tts.getInitStatus().then(() => {
      Tts.setDefaultRate(0.4);
      Tts.speak(name);
      Tts.speak(description);
    });
  }

  render() {
    const { description, name, types } = this.props;

    return (
      <View style={styles.detailsContainer}>
        <View style={styles.pokemonTypes}>
          {types.map(type => (
            <PokemonType key={type.name} {...type} />
          ))}
        </View>
        <Text style={styles.pokemonDescription}>{description}</Text>
      </View>
    );
  }
}

PokemonDetails.propTypes = {
  description: string.isRequired,
  name: string.isRequired,
  types: arrayOf(
    shape({
      color: string.isRequired,
      name: string.isRequired,
    }),
  ).isRequired,
};
