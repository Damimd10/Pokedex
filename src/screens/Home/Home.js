import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { getAllPokemons, getPokemon } from '../../services';
import PokemonList from './components/PokemonList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  static navigationOptions = () => ({
    headerStyle: { backgroundColor: '#C1392B' },
    headerTitleStyle: { color: 'white', textTransform: 'uppercase' },
    title: 'Pokedex',
  });

  state = {
    fetching: false,
    filteredPokemons: [],
    pokemonList: [],
  };

  async componentDidMount() {
    const pokemons = await getAllPokemons();
    this.setState({ pokemonList: pokemons });
  }

  handleSearchBar = currentPokemon => {
    const filteredPokemons = this.state.pokemonList.filter(pokemon =>
      pokemon.name.includes(currentPokemon.toUpperCase())
    );

    this.setState({ filteredPokemons });
  };

  onPokemonSelect = async id => {
    console.log('HERE', id);
    this.setState({ loading: true });
    const pokemon = await getPokemon(id);
    this.setState({ loading: false });
    this.props.navigation.navigate('Pokemon', { pokemon });
  };

  render() {
    const { filteredPokemons, loading, pokemonList } = this.state;
    const pokemons = filteredPokemons.length ? filteredPokemons : pokemonList;

    if (loading)
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );

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
        <PokemonList onPokemonSelect={this.onPokemonSelect} pokemons={pokemons} />
      </View>
    );
  }
}
