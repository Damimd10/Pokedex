import * as React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: { marginHorizontal: 5 },
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
  id: number,
  name: string,
  sprite: string,
  onPokemonSelect: (id: number) => void,
};

const PokemonCard: React.FunctionComponent<PokemonCardProps> = ({
  id,
  name,
  onPokemonSelect,
  sprite,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.pokemonGrid}
      onPress={() => onPokemonSelect(id)}
    >
      <Text style={styles.pokemonName}>
        {name.length > 15 ? `${name.substring(0, 15 - 3)}...` : name}
      </Text>
      <Image style={styles.pokemonSprite} source={{ uri: sprite }} />
    </TouchableOpacity>
  </View>
);

export default PokemonCard;
