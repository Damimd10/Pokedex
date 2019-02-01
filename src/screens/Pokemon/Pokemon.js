import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Icon,
  Footer,
  FooterTab,
  Right,
  Text,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { getPokemon } from '../../services';

import PokemonSprite from './components/PokemonSprite';
import EvolutionTab from './components/EvolutionTab';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonHeader from './components/PokemonHeader/PokemonHeader';

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  tabTitle: { textTransform: 'uppercase' },
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
    const { color, evolutionChain, moves, stats, typesRelation } = this.state.pokemon;

    if (this.state.activeTab === 'stats') {
      return <StatsTab color={color} stats={stats} typesRelation={typesRelation} />;
    }

    if (this.state.activeTab === 'evolutions') {
      return <EvolutionTab color={color} evolutionChain={evolutionChain} />;
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
    const {
      state: {
        error,
        loading,
        pokemon: { color, description, name, sprite, types },
      },
      props: {
        navigation: { goBack },
      },
    } = this;

    const isActiveMoves = this.isActive('moves');
    const isActiveStats = this.isActive('stats');
    const isActiveEvolutions = this.isActive('evolutions');

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
        <PokemonHeader color={color} goBack={goBack} name={name} />
        <Content>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[color.dark, color.light]}
            style={styles.container}
          >
            <PokemonSprite name={name} sprite={sprite} />
            <PokemonDetails description={description} name={name} types={types} />
          </LinearGradient>
          {this.getTabContent()}
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#FAFAFA' }}>
            <Button
              active={isActiveStats}
              onPress={() => this.onTabPress('stats')}
              style={{ backgroundColor: isActiveStats ? color.primary : 'transparent' }}
            >
              <Text style={[styles.tabTitle, { color: isActiveStats ? 'white' : color.primary }]}>
                Stats
              </Text>
            </Button>
            <Button
              active={isActiveEvolutions}
              onPress={() => this.onTabPress('evolutions')}
              style={{ backgroundColor: isActiveEvolutions ? color.primary : 'transparent' }}
            >
              <Text
                style={[styles.tabTitle, { color: isActiveEvolutions ? 'white' : color.primary }]}
              >
                Evolutions
              </Text>
            </Button>
            <Button
              active={isActiveMoves}
              onPress={() => this.onTabPress('moves')}
              style={{ backgroundColor: isActiveMoves ? color.primary : 'transparent' }}
            >
              <Text style={[styles.tabTitle, { color: isActiveMoves ? 'white' : color.primary }]}>
                Moves
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Pokemon;
