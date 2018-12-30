import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { string } from 'prop-types';

const styles = StyleSheet.create({
  pokemonSprite: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    width: '100%',
  },
  pokemonImage: {
    height: 150,
    width: 150,
  },
});

const PokemonSprite = ({ backgroundColor, spriteUrl }) => (
  <View style={[styles.pokemonSprite, { backgroundColor }]}>
    <Image style={styles.pokemonImage} source={{ uri: spriteUrl }} />
  </View>
);

PokemonSprite.propTypes = {
  backgroundColor: string.isRequired,
  spriteUrl: string.isRequired,
};

export default PokemonSprite;
