import React from 'react';
import { string } from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  evolutionName: { textTransform: 'uppercase' },
  evolutionSprite: { height: 100, width: 100 },
});

const PokemonEvolution = ({ name, sprite }) => (
  <View style={styles.container}>
    <Image style={styles.evolutionSprite} source={{ uri: sprite }} />
    <Text style={styles.evolutionName}>{name}</Text>
  </View>
);

PokemonEvolution.propTypes = {
  name: string,
  sprite: string,
};

export default PokemonEvolution;
