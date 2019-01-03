import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';

import { getPokemon } from '../../services';

import PokemonSprite from './components/PokemonSprite';
import PokemonType from './components/PokemonType';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';

const styles = StyleSheet.create({
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
    const { color, evolutionChain, stats } = this.state.pokemon;

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

    return <MovesTab />;
  };

  onTabPress = tab => this.setState({ activeTab: tab });

  onPokemonEvolutionPress = async id => {
    const pokemon = await getPokemon(id);
    this.setState({ pokemon });
  };

  render() {
    const { color, sprite, types } = this.state.pokemon;

    return (
      <Container styles={styles.container}>
        <Content>
          <PokemonSprite backgroundColor={color.light} spriteUrl={sprite} />
          <PokemonType backgroundColor={color.primary} types={types} />
          {this.getTabContent()}
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: color.primary }}>
            <Button active={this.isActive('stats')} onPress={() => this.onTabPress('stats')}>
              <Text style={styles.footerTabTitle}>Stats</Text>
            </Button>
            <Button active={this.isActive('moves')} onPress={() => this.onTabPress('moves')}>
              <Text style={styles.footerTabTitle}>Moves</Text>
            </Button>
            <Button active={this.isActive('location')} onPress={() => this.onTabPress('location')}>
              <Text style={styles.footerTabTitle}>Location</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Pokemon;
