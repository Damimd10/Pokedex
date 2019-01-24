import React, { Component } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { Button, Container, Content, Footer, FooterTab, Text } from 'native-base';

import { getPokemon } from '../../services';

import PokemonSprite from './components/PokemonSprite';
import EvolutionTab from './components/EvolutionTab';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';

const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: 'blue' },
  pokemonDetails: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    flex: 1,
    padding: 10,
    width: '100%',
  },
});

class Pokemon extends Component {
  state = {
    activeTab: 'stats',
    error: null,
    loading: false,
    pokemon: this.props.navigation.getParam('pokemon'),
  };

  isActive = value => value === this.state.activeTab;

  getTabContent = () => {
    const { color, evolutionChain, moves, name, stats, typesRelation } = this.state.pokemon;

    if (this.state.activeTab === 'stats') {
      return (
        <StatsTab
          currentPokemon={name}
          color={color}
          stats={stats}
          evolutionChain={evolutionChain}
          onPokemonEvolutionPress={this.onPokemonEvolutionPress}
        />
      );
    }

    if (this.state.activeTab === 'evolutions') {
      return <EvolutionTab evolutionChain={evolutionChain} />;
    }

    return <MovesTab color={color} moves={moves} typesRelation={typesRelation} />;
  };

  onTabPress = tab => this.setState({ activeTab: tab });

  onPokemonEvolutionPress = async id => {
    this.setState({ loading: true });
    const pokemon = await getPokemon(id);
    this.setState({
      ...(pokemon.errorMessage ? { error: pokemon.errorMessage } : { pokemon }),
      loading: false,
    });

    if (pokemon) this.props.navigation.setParams({ pokemon });
  };

  render() {
    const { error, loading } = this.state;
    const { color, name, sprite, types } = this.state.pokemon;
    const isActiveMoves = this.isActive('moves');
    const isActiveStats = this.isActive('stats');
    const isActiveEvolutions = this.isActive('evolutions');

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
      <Container>
        <Content>
          <View style={styles.container}>
            <PokemonSprite sprite={sprite} />
            <View style={styles.pokemonDetails}>
              <Text>Squirtle</Text>
              <View style={styles.pokemonTypes}>
                <Text>Water</Text>
              </View>
              <Text>Pokemon Description</Text>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Stats</Text>
            </Button>
            <Button>
              <Text>Evolutions</Text>
            </Button>
            <Button active>
              <Text>Moves</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Pokemon;
