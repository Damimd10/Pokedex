import * as React from 'react';
import {
  FlatList, Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { NormalizedPokemons } from '../../../../services/models/shared';

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

export type PokemonListProps = {
  onPokemonSelect: (id: number) => void;
  pokemons: NormalizedPokemons[];
};

const PokemonList: React.FunctionComponent<PokemonListProps> = ({ onPokemonSelect, pokemons }) => (
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

export default PokemonList;
