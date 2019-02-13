import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
var size = Dimensions.get('window');
var styles = StyleSheet.create({
  pokemonSprite: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    zIndex: 2,
  },
  pokemonSpriteImage: {
    position: 'relative',
    left: 0,
    height: 190,
    width: size.width * 0.5,
  },
});
var PokemonSprite = function(_a) {
  var name = _a.name;
  return React.createElement(
    View,
    { style: styles.pokemonSprite },
    React.createElement(Image, {
      style: styles.pokemonSpriteImage,
      source: { uri: 'https://img.pokemondb.net/artwork/vector/large/' + name + '.png' },
    }),
  );
};
export default PokemonSprite;
//# sourceMappingURL=PokemonSprite.js.map
