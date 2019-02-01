import React from 'react';
import { any, string } from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
  typeContainer: {
    height: 30,
    margin: 3,
  },
  typeName: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});

const PokemonType = ({ color, name }) => (
  <Button key={name} style={[styles.typeContainer, { backgroundColor: color }]}>
    <Text style={styles.typeName}>{name}</Text>
  </Button>
);

PokemonType.propTypes = {
  color: string.isRequired,
  name: string.isRequired,
};

export default PokemonType;
