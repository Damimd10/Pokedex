import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
var styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  evolutionName: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 16,
    textTransform: 'capitalize',
    marginTop: -10,
  },
  evolutionSprite: { height: 100, width: 100 },
});
var PokemonEvolution = function(_a) {
  var name = _a.name,
    sprite = _a.sprite;
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Image, { style: styles.evolutionSprite, source: { uri: sprite } }),
    React.createElement(Text, { style: styles.evolutionName }, name),
  );
};
export default PokemonEvolution;
//# sourceMappingURL=PokemonEvolution.js.map
