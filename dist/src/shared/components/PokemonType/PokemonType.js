import React from 'react';
import { string } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
var styles = StyleSheet.create({
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
var PokemonType = function(_a) {
  var color = _a.color,
    name = _a.name;
  return React.createElement(
    Button,
    { key: name, style: [styles.typeContainer, { backgroundColor: color }] },
    React.createElement(Text, { style: styles.typeName }, name),
  );
};
PokemonType.propTypes = {
  color: string.isRequired,
  name: string.isRequired,
};
export default PokemonType;
//# sourceMappingURL=PokemonType.js.map
