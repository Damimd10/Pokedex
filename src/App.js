import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { getAllPokemons } from './services';
import PokemonList from './PokemonList';

type Props = {};
export default class App extends Component<Props> {
  state = {
    pokemonList: [],
  };

  async componentDidMount() {
    const pokemons = await getAllPokemons();
    this.setState({ pokemonList: pokemons });
  }

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
        <PokemonList pokemons={pokemonList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
