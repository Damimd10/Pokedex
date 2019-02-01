import React, { Component, Fragment } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { getAllPokemons, getPokemon } from '../../services';
import PokemonList from './components/PokemonList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    loading: true,
    filteredPokemons: [],
    pokemonList: [],
  };

  async componentDidMount() {
    const pokemons = await getAllPokemons();
    this.setState({
      ...(pokemons.errorMessage ? { error: pokemons.errorMessage } : { pokemonList: pokemons }),
      loading: false,
    });
  }

  handleSearchBar = currentPokemon => {
    const filteredPokemons = this.state.pokemonList.filter(pokemon =>
      pokemon.name.includes(currentPokemon.toUpperCase()),
    );

    this.setState({ filteredPokemons });
  };

  onPokemonSelect = async id => {
    this.setState({ loading: true });
    const pokemon = await getPokemon(id);
    this.setState({ loading: false });
    this.props.navigation.navigate('Pokemon', { pokemon });
  };

  render() {
    const { error, filteredPokemons, loading, pokemonList } = this.state;
    const pokemons = filteredPokemons.length ? filteredPokemons : pokemonList;

    if (loading)
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );

    if (error)
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
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
