import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { getPokemon } from '../../services';

const styles = StyleSheet.create({
  itemContainer: {
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
  },
  pokemonType: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  pokemonTypeTitle: {
    color: 'white',
    fontWeight: 'bold',
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
        <View style={[styles.pokemonSprite, { backgroundColor: color.light }]}>
          <Image style={styles.pokemonImage} source={{ uri: sprite }} />
        </View>
        <View style={[styles.pokemonType, { backgroundColor: color.primary }]}>
          <Text style={styles.pokemonTypeTitle}>{types}</Text>
        </View>
      </View>
    );
  }
}

export default Pokemon;
