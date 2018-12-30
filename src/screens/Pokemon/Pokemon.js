import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { getPokemon } from '../../services';

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonSprite: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    width: '100%',
  },
  pokemonImage: {
    height: 150,
    width: 150,
    borderColor: 'red',
    borderWidth: 1,
  },
  pokemonType: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderColor: 'green',
    borderWidth: 1,
  },
});

class Pokemon extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('pokemonName', 'Finding Pokemon...'),
  });

  state = { pokemon: {} };

  async componentDidMount() {
    const pokemon = this.props.navigation.getParam('pokemonId');
    const currentPokemon = await getPokemon(pokemon);
    this.setState({ pokemon: currentPokemon });
  }

  render() {
    const { color, sprite, types } = this.state.pokemon;
    console.log('HERE', this.state.pokemon);
    return (
      <View style={styles.itemContainer}>
        <View style={styles.pokemonSprite}>
          <Image style={styles.pokemonImage} source={{ uri: sprite }} />
        </View>
        <View style={[styles.pokemonType, { backgroundColor: color }]}>
          <Text>{types}</Text>
        </View>
      </View>
    );
  }
}

export default Pokemon;
