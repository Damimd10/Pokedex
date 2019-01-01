import React from 'react';
import { string } from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

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

const Evolution = ({ light, name, primary, sprite }) => (
  <View style={[styles.evolutionContainer, { backgroundColor: light }]}>
    <Image style={styles.evolutionSprite} source={{ uri: sprite }} />
    <Text style={[styles.evolutionName, { backgroundColor: primary }]}>{name}</Text>
  </View>
);

Evolution.propTypes = {
  light: string.isRequired,
  name: string.isRequired,
  primary: string.isRequired,
  sprite: string.isRequired,
};

export default Evolution;
