import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GridView from 'react-native-super-grid';

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 120,
  },
  pokemonName: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
  },
  pokemonSprite: {
    width: '100%',
    height: '100%',
  },
});

const onPokemonTouch = pokemonId => {
  console.log('HERE', pokemonId);
};

const PokemonList = ({ pokemons }) => (
  <GridView
    itemDimension={110}
    items={pokemons}
    style={styles.gridView}
    renderItem={pokemon => (
      <TouchableOpacity onPress={() => onPokemonTouch(pokemon.id)}>
        <View style={[styles.itemContainer]}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Image style={styles.pokemonSprite} source={{ uri: pokemon.sprite }} />
        </View>
      </TouchableOpacity>
    )}
  />
);

PokemonList.propTypes = {
  pokemons: arrayOf(
    shape({
      id: number,
      name: string,
      sprite: string,
    })
  ),
};

export default PokemonList;
