import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { NormalizedPokemons } from '../../../../services/models/shared';
import PokemonCard from '../PokemonCard';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export type PokemonListProps = {
  onPokemonSelect: (id: number) => void,
  pokemons: NormalizedPokemons[],
};

const PokemonList: React.FunctionComponent<PokemonListProps> = ({
  onPokemonSelect,
  pokemons,
}) => (
  <View style={styles.container}>
    <FlatList
      data={pokemons}
      keyExtractor={item => item.name}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15,
      }}
      renderItem={({ item }) => (
        <PokemonCard onPokemonSelect={onPokemonSelect} {...item} />
      )}
    />
  </View>
);

export default PokemonList;
