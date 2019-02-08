import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button, Footer, FooterTab, Text,
} from 'native-base';

const styles = StyleSheet.create({
  tabTitle: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 13,
    textTransform: 'uppercase',
  },
});

type Props = {
  color: any;
  isActiveStats: boolean;
  isActiveEvolutions: boolean;
  isActiveMoves: boolean;
  onTabPress(tab: string): void;
};

const PokemonFooter: React.FunctionComponent<Props> = ({
  color,
  isActiveStats,
  isActiveEvolutions,
  isActiveMoves,
  onTabPress,
}) => (
  <Footer>
    <FooterTab style={{ backgroundColor: '#FAFAFA' }}>
      <Button
        active={isActiveStats}
        onPress={() => onTabPress('stats')}
        style={{ backgroundColor: isActiveStats ? color.primary : 'transparent' }}
      >
        <Text style={[styles.tabTitle, { color: isActiveStats ? 'white' : color.primary }]}>
          Stats
        </Text>
      </Button>
      <Button
        active={isActiveEvolutions}
        onPress={() => onTabPress('evolutions')}
        style={{ backgroundColor: isActiveEvolutions ? color.primary : 'transparent' }}
      >
        <Text style={[styles.tabTitle, { color: isActiveEvolutions ? 'white' : color.primary }]}>
          Evolutions
        </Text>
      </Button>
      <Button
        active={isActiveMoves}
        onPress={() => onTabPress('moves')}
        style={{ backgroundColor: isActiveMoves ? color.primary : 'transparent' }}
      >
        <Text style={[styles.tabTitle, { color: isActiveMoves ? 'white' : color.primary }]}>
          Moves
        </Text>
      </Button>
    </FooterTab>
  </Footer>
);

export default PokemonFooter;
