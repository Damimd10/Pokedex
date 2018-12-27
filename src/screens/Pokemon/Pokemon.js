import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  pokemonImage: {
    borderColor: 'red',
    borderWidth: 1,
  },
  pokemonType: {
    borderColor: 'green',
    borderWidth: 1,
  },
});

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('pokemonName', 'Finding Pokemon...'),
  });

  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.pokemonImage}>
          <Text>Pokemon Imagen</Text>
        </View>
        <View style={styles.pokemonType}>
          <Text>Pokemon Type</Text>
        </View>
      </View>
    );
  }
}

export default Pokemon;
