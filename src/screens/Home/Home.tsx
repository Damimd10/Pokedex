import * as React from 'react';
import {
  ActivityIndicator, StyleSheet, Text, View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';

import {
  Body, Button, Container, Content, Header, Icon, Left, Right, Title,
} from 'native-base';
import { getAllPokemons, getPokemon } from '../../services';
import { Error, NormalizedPokemon } from '../../services/models';
import { NormalizedPokemons } from '../../services/models/shared';
import PokemonList from './components/PokemonList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    backgroundColor: '#C1392B',
  },
  leftHeader: { paddingHorizontal: 5 },
  headerTitle: {
    color: '#F4F9F3',
    fontFamily: 'Oxygen-Regular',
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});

type Props = {
  navigation: NavigationScreenProp<{ pokemon: NormalizedPokemons[] }>;
};

type State = {
  error?: any;
  loading: boolean;
  filteredPokemons: NormalizedPokemons[];
  pokemonList: NormalizedPokemons[];
};

export default class App extends React.Component<Props, State> {
  readonly state: State = {
    error: null,
    loading: true,
    filteredPokemons: [],
    pokemonList: [],
  };

  async componentDidMount(): Promise<void> {
    const pokemons: any = await getAllPokemons();

    if (pokemons.errorMessage) this.setState({ error: pokemons.errorMessage, loading: false });

    this.setState({ pokemonList: pokemons, loading: false });
  }

  handleSearchBar = (currentPokemon: string): void => {
    const filteredPokemons = this.state.pokemonList.filter(pokemon => pokemon.name.includes(currentPokemon.toUpperCase()));

    this.setState({ filteredPokemons });
  };

  onPokemonSelect = async (id: number): Promise<void> => {
    this.setState({ loading: true });
    const pokemon: NormalizedPokemon | Error = await getPokemon(id);
    this.setState({ loading: false });
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
        <Header style={styles.headerContainer} noShadow transparent>
          <Left style={styles.leftHeader}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: '#F4F9F3' }} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerTitle}>Pokedex</Title>
          </Body>
          <Right />
        </Header>
        <Content>
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
              placeholder="Find a Pokemon..."
            />
            <PokemonList onPokemonSelect={this.onPokemonSelect} pokemons={pokemons} />
          </View>
        </Content>
      </Container>
    );
  }
}