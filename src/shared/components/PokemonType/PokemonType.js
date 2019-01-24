import React from 'react';
import { string } from 'prop-types';
import { Badge, Text } from 'native-base';

const PokemonType = ({ color, name }) => (
  <Badge key={name} style={{ backgroundColor: color }}>
    <Text>{name}</Text>
  </Badge>
);

PokemonType.propTypes = {
  color: string.isRequired,
  name: string.isRequired,
};

export default PokemonType;
