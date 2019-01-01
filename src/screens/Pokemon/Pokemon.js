import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import PokemonSprite from './components/PokemonSprite';
import PokemonStats from './components/PokemonStats';
import PokemonType from './components/PokemonType';
import PokemonEvolution from './components/PokemonEvolution';

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Pokemon extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: navigation.getParam('pokemon').color.primary },
    headerTitleStyle: { color: 'white', textTransform: 'uppercase' },
    title: navigation.getParam('pokemon').name,
  });

  render() {
    const { color, evolutionChain, sprite, stats, types } = this.props.navigation.getParam(
      'pokemon'
    );
    console.log('HERE', this.props.navigation.getParam('pokemon'));
    return (
      <View style={styles.itemContainer}>
        <PokemonSprite backgroundColor={color.light} spriteUrl={sprite} />
        <PokemonType backgroundColor={color.primary} types={types} />
        <PokemonStats color={color} stats={stats} />
        <PokemonEvolution color={color} evolutions={evolutionChain} />
      </View>
    );
  }
}

export default Pokemon;
