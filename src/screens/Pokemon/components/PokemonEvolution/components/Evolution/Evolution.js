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
  <TouchableOpacity style={styles.evolutionContainer} onPress={() => onPokemonEvolutionPress(name)}>
    <View style={{ backgroundColor: light }}>
      <Image style={styles.evolutionSprite} source={{ uri: sprite }} />
      <Text style={[styles.evolutionName, { backgroundColor: primary }]}>{name}</Text>
    </View>
  </TouchableOpacity>
);

Evolution.propTypes = {
  light: string.isRequired,
  name: string.isRequired,
  onPokemonEvolutionPress: func.isRequired,
  primary: string.isRequired,
  sprite: string.isRequired,
};

export default Evolution;
