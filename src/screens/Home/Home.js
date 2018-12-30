import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { getAllPokemons, getPokemon } from '../../services';
import PokemonList from './components/PokemonList';

export default class App extends Component {
  state = {
    pokemonList: [],
  };

  async componentDidMount() {
    const pokemons = await getAllPokemons();
    this.setState({ pokemonList: pokemons });
  }

  onPokemonSelect = async id => {
    const pokemon = await getPokemon(id);
    this.props.navigation.navigate('Pokemon', { pokemon });
  };

  render() {
    const { pokemonList } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          containerStyle={{
            width: '100%',
            backgroundColor: 'white',
            borderTopWidth: 0,
          }}
          lightTheme
          noIcon
          onChangeText={this.handleSearchBar}
          placeholder="Pokedex"
        />
        <PokemonList onPokemonSelect={this.onPokemonSelect} pokemons={pokemonList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
