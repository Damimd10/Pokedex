import React from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
var styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
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
var PokemonList = function(_a) {
  var onPokemonSelect = _a.onPokemonSelect,
    pokemons = _a.pokemons;
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(FlatList, {
      data: pokemons,
      keyExtractor: function(item) {
        return item.name;
      },
      numColumns: 3,
      columnWrapperStyle: { flex: 1, justifyContent: 'space-between' },
      renderItem: function(_a) {
        var item = _a.item;
        return React.createElement(
          View,
          null,
          React.createElement(
            TouchableOpacity,
            {
              style: styles.pokemonGrid,
              onPress: function() {
                return onPokemonSelect(item.id);
              },
            },
            React.createElement(Text, { style: styles.pokemonName }, item.name),
            React.createElement(Image, {
              style: styles.pokemonSprite,
              source: { uri: item.sprite },
            }),
          ),
        );
      },
    }),
  );
};
PokemonList.propTypes = {
  onPokemonSelect: func.isRequired,
  pokemons: arrayOf(
    shape({
      id: number,
      name: string,
      sprite: string,
    }),
  ).isRequired,
};
export default PokemonList;
//# sourceMappingURL=PokemonList.js.map
