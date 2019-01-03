import React from 'react';
import { func, string } from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  evolutionContainer: { flex: 1 },
  evolutionName: {
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
  },
  evolutionSprite: { alignSelf: 'center', height: 110, width: 110 },
});

const Evolution = ({ light, name, onPokemonEvolutionPress, primary, sprite }) => (
  <View style={[styles.evolutionContainer, { backgroundColor: light }]}>
    <TouchableOpacity onPress={() => onPokemonEvolutionPress(name)}>
      <Image style={styles.evolutionSprite} source={{ uri: sprite }} />
    </TouchableOpacity>
    <Text style={[styles.evolutionName, { backgroundColor: primary }]}>{name}</Text>
  </View>
);

Evolution.propTypes = {
  light: string.isRequired,
  name: string.isRequired,
  onPokemonEvolutionPress: func.isRequired,
  primary: string.isRequired,
  sprite: string.isRequired,
};

export default Evolution;
