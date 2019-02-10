var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PokemonCard from '../PokemonCard';
var styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
          PokemonCard,
          __assign({ onPokemonSelect: onPokemonSelect }, item),
        );
      },
    }),
  );
};
export default PokemonList;
//# sourceMappingURL=PokemonList.js.map
