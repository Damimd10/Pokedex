import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tts from 'react-native-tts';

import PokemonType from '../../../../shared/components/PokemonType/PokemonType';
import { NormalizedPokemon } from '../../../../services/models';

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  pokemonName: {
    margin: 10,
    fontSize: 30,
  },
  pokemonTypes: {
    flexDirection: 'row',
    margin: 10,
  },
  pokemonDescription: {
    fontFamily: 'Oxygen-Bold',
    color: '#868686',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});

type Props = Pick<NormalizedPokemon, 'description' | 'name' | 'types'>;

export default class PokemonDetails extends React.Component<Props, {}> {
  componentDidMount() {
    const { description, name } = this.props;

    Tts.getInitStatus().then(() => {
      Tts.setDefaultRate(0.4);
      Tts.speak(name);
      Tts.speak(description);
    });
  }

  componentWillUnmount() {
    Tts.stop();
  }

  render() {
    const { description, types } = this.props;

    return (
      <View style={styles.detailsContainer}>
        <View style={styles.pokemonTypes}>
          {types.map(type => (
            <PokemonType key={type.name} {...type} />
          ))}
        </View>
        <Text style={styles.pokemonDescription}>{description}</Text>
      </View>
    );
  }
}
