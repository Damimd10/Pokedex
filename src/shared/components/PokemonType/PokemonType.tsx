import * as React from 'react';
import { StyleSheet } from 'react-native';
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

type Props = {
  color: string;
  name: string;
};

const PokemonType: React.FunctionComponent<Props> = ({ color, name }) => (
  <Button key={name} style={[styles.typeContainer, { backgroundColor: color }]}>
    <Text style={styles.typeName}>{name}</Text>
  </Button>
);

export default PokemonType;
