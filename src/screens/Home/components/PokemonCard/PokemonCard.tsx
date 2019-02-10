import * as React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

const styles = StyleSheet.create({
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

export type PokemonCardProps = {
  id: number;
  name: string;
  sprite: string;
  onPokemonSelect: (id: number) => void;
};

const PokemonCard: React.FunctionComponent<PokemonCardProps> = ({
  id,
  name,
  onPokemonSelect,
  sprite,
}) => (
  <View>
    <TouchableOpacity style={styles.pokemonGrid} onPress={() => onPokemonSelect(id)}>
      <Text style={styles.pokemonName}>{name}</Text>
      <Image style={styles.pokemonSprite} source={{ uri: sprite }} />
    </TouchableOpacity>
  </View>
);

export default PokemonCard;
