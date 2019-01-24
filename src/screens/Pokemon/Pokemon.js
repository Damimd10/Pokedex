import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Badge, Button, Segment, Container, Content, Footer, FooterTab, Text } from 'native-base';

import { getPokemon } from '../../services';

import PokemonSprite from './components/PokemonSprite';
import EvolutionTab from './components/EvolutionTab';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';

const styles = StyleSheet.create({
  buttonTab: {
    borderRadius: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTest: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    height: '100%',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTabTitle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pokemonName: {
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  pokemonTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  tab: {
    borderRadius: 20,
    backgroundColor: 'red',
  },
  typeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

class Pokemon extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: navigation.getParam('pokemon').color.primary },
    headerTitleStyle: { color: 'white', textTransform: 'uppercase' },
    title: navigation.getParam('pokemon').name,
  });

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
        <Content style={{ backgroundColor: color.primary }}>
          <PokemonSprite backgroundColor={color.light} spriteUrl={sprite} />
          <View style={styles.containerTest}>
            <Text style={styles.pokemonName}>{name}</Text>
            <View style={styles.pokemonTypeContainer}>
              {types.map(type => (
                <Badge key={type.name} style={{ backgroundColor: type.color }}>
                  <Text style={styles.typeText}>{type.name}</Text>
                </Badge>
              ))}
            </View>
            <Segment>
              <Button first>
                <Text>Stats</Text>
              </Button>
              <Button>
                <Text>Evolutions</Text>
              </Button>
              <Button last active>
                <Text>Moves</Text>
              </Button>
            </Segment>
            {this.getTabContent()}
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              active={isActiveStats}
              onPress={() => this.onTabPress('stats')}
              style={[
                styles.buttonTab,
                { backgroundColor: isActiveStats ? color.light : color.primary },
              ]}
            >
              <Text style={styles.footerTabTitle}>Stats</Text>
            </Button>
            <Button
              active={isActiveMoves}
              onPress={() => this.onTabPress('moves')}
              style={[
                styles.buttonTab,
                { backgroundColor: isActiveMoves ? color.light : color.primary },
              ]}
            >
              <Text style={styles.footerTabTitle}>Moves</Text>
            </Button>
            <Button
              active={isActiveMoves}
              onPress={() => this.onTabPress('evolutions')}
              style={[
                styles.buttonTab,
                { backgroundColor: isActiveEvolutions ? color.light : color.primary },
              ]}
            >
              <Text style={styles.footerTabTitle}>Evolutions</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Pokemon;
