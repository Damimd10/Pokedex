import * as React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';

import PokemonType from '../../../../shared/components/PokemonType/PokemonType';
import { NormalizedPokemon } from '../../../../services/models';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d6d6',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    padding: 10,
  },
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
  text: {
    fontFamily: 'Oxygen-Bold',
    color: '#868686',
    fontSize: 13,
    padding: 5,
  },
});

type Props = Pick<
  NormalizedPokemon,
  'description' | 'height' | 'name' | 'types' | 'weight'
>;

type State = {
  isActiveVoice: boolean,
};

export default class PokemonDetails extends React.Component<Props, State> {
  readonly state: State = {
    isActiveVoice: false
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { isActiveVoice } = this.state;
    if (prevState.isActiveVoice !== isActiveVoice) {
      if (isActiveVoice) return this.activeVoice();

      return this.stopVoice();
    }
  }

  activeVoice = () => {
    const { description, name } = this.props;

    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('es-ES');
      Tts.setDefaultRate(0.4);
      Tts.speak(name);
      Tts.speak(description);
    });
  };

  stopVoice = () => Tts.stop();

  toggleVoiceFunction = () => this.setState(prevProps => ({ isActiveVoice: !prevProps.isActiveVoice }));

  render() {
    const {
      description, height, types, weight,
    } = this.props;

    return (
      <View style={styles.detailsContainer}>
        <View style={styles.pokemonTypes}>
          {types.map(type => (
            <PokemonType key={type.name} {...type} />
          ))}
        </View>
        <TouchableOpacity style={styles.box} onPress={this.toggleVoiceFunction}>
          <View style={{ position: 'absolute', opacity: 0.2 }}>
            <Icon name="md-volume-high" />
          </View>
          <Text style={styles.text}>{description}</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.box}>
            <Text style={styles.text}>{height}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>{weight}</Text>
          </View>
        </View>
      </View>
    );
  }
}
