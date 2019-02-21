import * as React from 'react';
import {
  ActivityIndicator, StyleSheet, Text, View,
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Container, Content } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import { getAllPokemons, getPokemon } from '../../services';
import { Error, NormalizedPokemon } from '../../services/models';
import { NormalizedPokemons } from '../../services/models/shared';

import Header from './components/Header';
import PokemonList from './components/PokemonList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export type HomeProps = {
  navigation: NavigationScreenProp<{ pokemon: NormalizedPokemons[] }>;
};

type State = {
  error?: any;
  loading: boolean;
  filteredPokemons: NormalizedPokemons[];
  pokemonList: NormalizedPokemons[];
};

export default class App extends React.Component<HomeProps, State> {
  readonly state: State = {
    error: null,
    loading: true,
    filteredPokemons: [],
    pokemonList: [],
  };

  async componentDidMount(): Promise<void> {
    const pokemons: any = await getAllPokemons();

    if (pokemons.errorMessage) this.setState({ error: pokemons.errorMessage, loading: false });

    SplashScreen.hide();

    this.setState({ pokemonList: pokemons, loading: false });
  }

  handleSearchBar = (currentPokemon: string): void => {
    const filteredPokemons = this.state.pokemonList.filter(pokemon => pokemon.name.includes(currentPokemon.toUpperCase()));

    this.setState({ filteredPokemons });
  };

  onPokemonSelect = async (id: number): Promise<void> => {
    this.setState({ loading: true });
    const pokemon: NormalizedPokemon | Error = await getPokemon(id);
    this.setState({ loading: false, filteredPokemons: [] });
    this.props.navigation.navigate('Pokemon', { pokemon });
  };

  render() {
    const {
      error, filteredPokemons, loading, pokemonList,
    } = this.state;
    const pokemons = filteredPokemons.length ? filteredPokemons : pokemonList;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
        </View>
      );
    }

    return (
      <Container>
        <Header handleSearchBar={this.handleSearchBar} />
        <Content>
          <View style={styles.container}>
            <PokemonList onPokemonSelect={this.onPokemonSelect} pokemons={pokemons} />
          </View>
        </Content>
      </Container>
    );
  }
}
