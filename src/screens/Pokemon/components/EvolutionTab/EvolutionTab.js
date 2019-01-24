import React from 'react';
import { Icon, StyleSheet, Text, View } from 'react-native';

import PokemonEvolution from './components/PokemonEvolution';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  evolutionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const EvolutionTab = ({ evolutionChain }) => (
  <View style={styles.container}>
    {evolutionChain.map((evolution, index) => {
      if (index + 1 >= evolutionChain.length) return;

      return (
        <View style={styles.evolutionContainer}>
          <PokemonEvolution {...evolution} />
          <Icon name="arrowright" />
          <Text>{evolutionChain[index + 1].level}</Text>
          <PokemonEvolution {...evolutionChain[index + 1]} />
        </View>
      );
    })}
  </View>
);

export default EvolutionTab;
