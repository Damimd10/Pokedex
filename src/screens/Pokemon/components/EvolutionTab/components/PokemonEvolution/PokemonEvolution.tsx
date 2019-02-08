import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  evolutionName: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 16,
    textTransform: 'capitalize',
    marginTop: -10,
  },
  evolutionSprite: { height: 100, width: 100 },
});

type Props = {
  name: string;
  sprite: string;
};

const PokemonEvolution: React.FunctionComponent<Props> = ({ name, sprite }) => (
  <View style={styles.container}>
    <Image style={styles.evolutionSprite} source={{ uri: sprite }} />
    <Text style={styles.evolutionName}>{name}</Text>
  </View>
);

export default PokemonEvolution;
