import React from 'react';
import { string } from 'prop-types';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const size = Dimensions.get('window');

const styles = StyleSheet.create({
  pokemonSprite: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    zIndex: 2,
  },
  pokemonSpriteImage: {
    position: 'relative',
    top: 30,
    left: 0,
    height: 180,
    width: size.width * 0.5,
  },
});

const PokemonSprite = ({ name, sprite }) => (
  <View style={styles.pokemonSprite}>
    <Image
      style={styles.pokemonSpriteImage}
      resizeMode="contain"
      source={{ uri: `https://img.pokemondb.net/artwork/vector/large/${name}.png` }}
    />
  </View>
);

PokemonSprite.propTypes = {
  sprite: string.isRequired,
};

export default PokemonSprite;
