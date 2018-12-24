import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GridView from 'react-native-super-grid';

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 120,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

const PokemonList = ({ pokemons }) => (
  <GridView
    itemDimension={110}
    items={pokemons}
    style={styles.gridView}
    renderItem={pokemon => (
      <View style={[styles.itemContainer, { backgroundColor: pokemon.code }]}>
        <Text style={styles.itemName}>{pokemon.name}</Text>
        <Text style={styles.itemCode}>{pokemon.code}</Text>
      </View>
    )}
  />
);

export default PokemonList;
