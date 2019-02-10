import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
var styles = StyleSheet.create({
  pokemonName: {
    fontWeight: 'bold',
  },
  pokemonSprite: {
    height: 110,
    width: 110,
  },
  pokemonGrid: {
    marginVertical: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
var PokemonCard = function(_a) {
  var id = _a.id,
    name = _a.name,
    onPokemonSelect = _a.onPokemonSelect,
    sprite = _a.sprite;
  return React.createElement(
    View,
    null,
    React.createElement(
      TouchableOpacity,
      {
        style: styles.pokemonGrid,
        onPress: function() {
          return onPokemonSelect(id);
        },
      },
      React.createElement(Text, { style: styles.pokemonName }, name),
      React.createElement(Image, { style: styles.pokemonSprite, source: { uri: sprite } }),
    ),
  );
};
export default PokemonCard;
//# sourceMappingURL=PokemonCard.js.map
