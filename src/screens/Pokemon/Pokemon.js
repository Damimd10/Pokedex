import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';

import { getPokemon } from '../../services';

import PokemonSprite from './components/PokemonSprite';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';

import Separator from '../../shared/components/Separator';

const styles = StyleSheet.create({
  buttonTab: {
    borderRadius: 0,
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
});

class Pokemon extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: navigation.getParam('pokemon').color.primary },
    headerTitleStyle: { color: 'white', textTransform: 'uppercase' },
    title: navigation.getParam('pokemon').name,
  });

  state = {
    activeTab: 'stats',
    pokemon: this.props.navigation.getParam('pokemon'),
  };

  isActive = value => value === this.state.activeTab;

  getTabContent = () => {
    const { color, evolutionChain, moves, stats, typesRelation } = this.state.pokemon;

    if (this.state.activeTab === 'stats') {
      return (
        <StatsTab
          color={color}
          stats={stats}
          evolutionChain={evolutionChain}
          onPokemonEvolutionPress={this.onPokemonEvolutionPress}
        />
      );
    }

    return <MovesTab color={color} moves={moves} typesRelation={typesRelation} />;
  };

  onTabPress = tab => this.setState({ activeTab: tab });

  onPokemonEvolutionPress = async id => {
    const pokemon = await getPokemon(id);
    this.setState({ pokemon });
  };

  render() {
    const { color, sprite, types } = this.state.pokemon;
    const isActiveMoves = this.isActive('moves');
    const isActiveStats = this.isActive('stats');

    return (
      <Container styles={styles.container}>
        <Content>
          <PokemonSprite backgroundColor={color.light} spriteUrl={sprite} />
          <Separator backgroundColor={color.primary} title={types} />
          {this.getTabContent()}
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
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Pokemon;
