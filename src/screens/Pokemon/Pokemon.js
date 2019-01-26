import React, { Component } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { Button, Container, Content, Footer, FooterTab, Text } from 'native-base';

import { getPokemon } from '../../services';

import PokemonSprite from './components/PokemonSprite';
import EvolutionTab from './components/EvolutionTab';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: 'blue' },
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
          typesRelation={typesRelation}
        />
      );
    }

    if (this.state.activeTab === 'evolutions') {
      return <EvolutionTab evolutionChain={evolutionChain} />;
    }

    return <MovesTab moves={moves} />;
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
    const { name, sprite, types } = this.state.pokemon;
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
            <PokemonDetails name={name} types={types} />
          </View>
          {this.getTabContent()}
        </Content>
        <Footer>
          <FooterTab>
            <Button active={isActiveStats} onPress={() => this.onTabPress('stats')}>
              <Text>Stats</Text>
            </Button>
            <Button active={isActiveEvolutions} onPress={() => this.onTabPress('evolutions')}>
              <Text>Evolutions</Text>
            </Button>
            <Button active={isActiveMoves} onPress={() => this.onTabPress('moves')}>
              <Text>Moves</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Pokemon;
