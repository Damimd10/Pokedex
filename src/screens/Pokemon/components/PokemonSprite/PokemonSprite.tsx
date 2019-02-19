import React from 'react';
import {
  Dimensions, Image, StyleSheet, View, ScaledSize,
} from 'react-native';

const size: ScaledSize = Dimensions.get('window');

const styles = StyleSheet.create({
  pokemonSprite: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    zIndex: 2,
  },
  pokemonSpriteImage: {
    position: 'relative',
    left: 0,
    height: 180,
    width: size.width * 0.5,
  },
});

export type PokemonSpirteProps = {
  name: string,
};

const PokemonSprite: React.FunctionComponent<PokemonSpirteProps> = ({ name }) => (
  <View style={styles.pokemonSprite}>
    <Image
      style={styles.pokemonSpriteImage}
      source={{
        uri: `https://img.pokemondb.net/artwork/vector/large/${name}.png`,
      }}
    />
  </View>
);

export default PokemonSprite;
