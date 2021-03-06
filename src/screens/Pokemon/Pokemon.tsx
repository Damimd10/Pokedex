import * as React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Container, Content, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { getPokemon } from '../../services';
import { Error, NormalizedPokemon } from '../../services/models';

import PokemonSprite from './components/PokemonSprite';
import EvolutionTab from './components/EvolutionTab';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonHeader from './components/PokemonHeader';
import PokemonFooter from './components/PokemonFooter';

type NavStateParams = {
  pokemon: NormalizedPokemon;
};

type PokemonScreenProps = {
  navigation: NavigationScreenProp<NavStateParams>;
};

type State = {
  activeTab: string;
  error: Error | null;
  loading: boolean;
  pokemon: NormalizedPokemon;
};

type CustomComponent = React.ComponentType<any>;

type TabDetail = {
  component: CustomComponent;
  props: string[];
};

type ComponentCollection = {
  [key: string]: TabDetail;
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  tabTitle: { textTransform: 'uppercase' },
});

const ActiveTab: ComponentCollection = {
  stats: { component: StatsTab, props: ['color', 'stats', 'typesRelation'] },
  evolutions: { component: EvolutionTab, props: ['color', 'evolutionChain', 'onPokemonEvolutionSelect'] },
  moves: { component: MovesTab, props: ['moves'] },
};

class Pokemon extends React.Component<PokemonScreenProps, State> {
  readonly state: State = {
    activeTab: 'stats',
    error: null,
    loading: false,
    pokemon: this.props.navigation.getParam('pokemon'),
  };

  componentDidUpdate(prevProps: PokemonScreenProps): void {
    const currentPokemon = this.props.navigation.getParam('pokemon');

    if (prevProps.navigation.getParam('pokemon') !== currentPokemon) {
      this.setState({ pokemon: currentPokemon })
    }
  }

  isActive = (value: string): boolean => value === this.state.activeTab;

  getTabContent = () => {
    const { activeTab, pokemon } = this.state;
    const { component: CustomComponent, props } = ActiveTab[activeTab];

    const customProps = props.reduce(
      (accumulator, prop: string) => ({
        ...accumulator,
        [prop]: pokemon[prop as keyof NormalizedPokemon],
      }),
      {},
    );

    const customFunctions = { ...(activeTab === 'evolutions' ? { onPokemonEvolutionSelect: this.onPokemonEvolutionSelect } : {}) };

    return <CustomComponent {...customProps} {...customFunctions} />;
  };

  onPokemonEvolutionSelect = async(id: number): Promise<void> => {
    this.setState({ loading: true });
    const pokemon: NormalizedPokemon | Error = await getPokemon(id);
    this.props.navigation.setParams({ pokemon });
    this.setState({ loading: false });
  }

  onTabPress = (tab: string): void => this.setState({ activeTab: tab });

  render() {
    const {
      state: {
        error,
        loading,
        pokemon: {
          color, description, height, name, types, weight,
        },
      },
      props: {
        navigation: { goBack },
      },
    } = this;

    const isActiveMoves: boolean = this.isActive('moves');
    const isActiveStats: boolean = this.isActive('stats');
    const isActiveEvolutions: boolean = this.isActive('evolutions');

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
            <PokemonSprite name={name} />
            <PokemonDetails description={description} height={height} name={name} types={types} weight={weight} />
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
