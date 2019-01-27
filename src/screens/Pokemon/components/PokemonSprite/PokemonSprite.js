import React from 'react';
import { string } from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  pokemonSprite: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  pokemonSpriteImage: {
    height: 100,
    width: 100,
  },
});

const PokemonSprite = ({ sprite }) => (
  <View style={styles.pokemonSprite}>
    <Image style={styles.pokemonSpriteImage} source={{ uri: sprite }} />
  </View>
);

PokemonSprite.propTypes = {
  sprite: string.isRequired,
};

export default PokemonSprite;
