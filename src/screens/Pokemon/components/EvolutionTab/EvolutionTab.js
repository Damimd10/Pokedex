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
  segment: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#E0E0E0',
    fontSize: 40,
  },
});

const EvolutionTab = ({ evolutionChain }) => (
  <View style={styles.container}>
    {evolutionChain.map((evolution, index) => {
      if (index + 1 >= evolutionChain.length) return;

      return (
        <View key={`${evolution.name}-${index}`} style={styles.evolutionContainer}>
          <PokemonEvolution {...evolution} />
          <View style={styles.segment}>
            <Text style={styles.arrow}>→</Text>
            <Text>{`Level ${evolutionChain[index + 1].level}`}</Text>
          </View>
          <PokemonEvolution {...evolutionChain[index + 1]} />
        </View>
      );
    })}
  </View>
);

export default EvolutionTab;
