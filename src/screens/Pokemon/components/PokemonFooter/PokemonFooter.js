import React from 'react';
import { func, shape, string, bool } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Footer, FooterTab, Text } from 'native-base';

const styles = StyleSheet.create({});

const PokemonFooter = ({ color, isActiveStats, isActiveEvolutions, isActiveMoves, onTabPress }) => (
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

PokemonFooter.propTypes = {
  color: shape({ primary: string }).isRequired,
  onTabPress: func.isRequired,
  isActiveEvolutions: bool.isRequired,
  isActiveMoves: bool.isRequired,
  isActiveStats: bool.isRequired,
};

export default PokemonFooter;
