import React from 'react';
import {
  Image, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

import { toCapitalizeText } from '../../../../../../shared/utils';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  evolutionName: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 16,
    marginTop: -10,
  },
  evolutionSprite: { height: 120, width: 120 },
});

export type PokemonEvolutionProps = {
  name: string,
  onPokemonEvolutionSelect: (event: any) => void
  sprite: string,
};

const PokemonEvolution: React.FunctionComponent<PokemonEvolutionProps> = ({
  name,
  onPokemonEvolutionSelect,
  sprite,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onPokemonEvolutionSelect(name)}>
      <Image style={styles.evolutionSprite} source={{ uri: sprite }} />
    </TouchableOpacity>
    <Text style={styles.evolutionName}>{toCapitalizeText(name)}</Text>
  </View>
);

export default PokemonEvolution;
