import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';

import { getPokemon } from '../../services';

import PokemonSprite from './components/PokemonSprite';
import PokemonStats from './components/PokemonStats';
import PokemonType from './components/PokemonType';
import PokemonEvolution from './components/PokemonEvolution';

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
    pokemon: this.props.navigation.getParam('pokemon'),
  };

  onPokemonEvolutionPress = async id => {
    const pokemon = await getPokemon(id);
    this.setState({ pokemon });
  };

  render() {
    const { color, evolutionChain, sprite, stats, types } = this.state.pokemon;

    return (
      <Container styles={styles.container}>
        <Content>
          <PokemonSprite backgroundColor={color.light} spriteUrl={sprite} />
          <PokemonType backgroundColor={color.primary} types={types} />
          <PokemonStats color={color} stats={stats} />
          <PokemonEvolution
            color={color}
            evolutions={evolutionChain}
            onPokemonEvolutionPress={this.onPokemonEvolutionPress}
          />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: color.primary }}>
            <Button>
              <Text style={styles.footerTabTitle}>Stats</Text>
            </Button>
            <Button>
              <Text style={styles.footerTabTitle}>Moves</Text>
            </Button>
            <Button active>
              <Text style={styles.footerTabTitle}>Location</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Pokemon;
