import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        <View key={`${evolution.name}-${index}`} style={styles.evolutionContainer}>
          <PokemonEvolution {...evolution} />
          <Text>{`Level ${evolutionChain[index + 1].level}`}</Text>
          <PokemonEvolution {...evolutionChain[index + 1]} />
        </View>
      );
    })}
  </View>
);

export default EvolutionTab;
