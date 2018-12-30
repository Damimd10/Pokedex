import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PokemonSprite from './components/PokemonSprite';
import PokemonType from './components/PokemonType';

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
    const { color, sprite, types } = this.props.navigation.getParam('pokemon');
    return (
      <View style={styles.itemContainer}>
        <PokemonSprite backgroundColor={color.light} spriteUrl={sprite} />
        <PokemonType backgroundColor={color.primary} types={types} />
      </View>
    );
  }
}

export default Pokemon;
