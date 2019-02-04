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
import PokemonHeader from './components/PokemonHeader';
import PokemonFooter from './components/PokemonFooter';

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  tabTitle: { textTransform: 'uppercase' },
});

const ActiveTab = {
  stats: { component: StatsTab, props: ['color', 'stats', 'typesRelation'] },
  evolutions: { component: EvolutionTab, props: ['color', 'evolutionChain'] },
  moves: { component: MovesTab, props: ['moves'] },
};

class Pokemon extends Component {
  state = {
    activeTab: 'stats',
    error: null,
    loading: false,
    pokemon: this.props.navigation.getParam('pokemon'),
  };

  isActive = value => value === this.state.activeTab;

  getTabContent = () => {
    const { activeTab, pokemon } = this.state;

    const { component: CustomComponent, props } = ActiveTab[activeTab];
    const customProps = props.reduce(
      (accumulator, prop) => ({
        ...accumulator,
        [prop]: pokemon[prop],
      }),
      {},
    );

    return <CustomComponent {...customProps} />;
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
        <PokemonFooter
          isActiveEvolutions={isActiveEvolutions}
          isActiveMoves={isActiveMoves}
          isActiveStats={isActiveStats}
          color={color}
          onTabPress={this.onTabPress}
        />
      </Container>
    );
  }
}

export default Pokemon;
