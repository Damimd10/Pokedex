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
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#E0E0E0',
    fontSize: 50,
  },
  levelText: {
    marginBottom: -20,
    fontFamily: 'Oxygen-Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});

const EvolutionTab = ({ color, evolutionChain }) => (
  <View style={styles.container}>
    {evolutionChain.map((evolution, index) => {
      if (index + 1 >= evolutionChain.length) return;

      return (
        <View key={`${evolution.name}-${index}`} style={styles.evolutionContainer}>
          <PokemonEvolution {...evolution} />
          <View style={styles.segment}>
            <Text style={[styles.levelText, { color: color.primary }]}>
              {`Lv.${evolutionChain[index + 1].level}`}
            </Text>
            <Text style={styles.arrow}>&#10230;</Text>
          </View>
          <PokemonEvolution {...evolutionChain[index + 1]} />
        </View>
      );
    })}
  </View>
);

export default EvolutionTab;
