import React from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
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

const PokemonList = ({ onPokemonSelect, pokemons }) => (
  <View style={styles.container}>
    <FlatList
      data={pokemons}
      keyExtractor={item => item.name}
      numColumns={3}
      columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity style={styles.pokemonGrid} onPress={() => onPokemonSelect(item.id)}>
            <Text style={styles.pokemonName}>{item.name}</Text>
            <Image style={styles.pokemonSprite} source={{ uri: item.sprite }} />
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
);

PokemonList.propTypes = {
  onPokemonSelect: func.isRequired,
  pokemons: arrayOf(
    shape({
      id: number,
      name: string,
      sprite: string,
    })
  ).isRequired,
};

export default PokemonList;
