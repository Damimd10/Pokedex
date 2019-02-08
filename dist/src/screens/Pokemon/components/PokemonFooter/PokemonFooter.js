import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Footer, FooterTab, Text } from 'native-base';
var styles = StyleSheet.create({
  tabTitle: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 13,
    textTransform: 'uppercase',
  },
});
var PokemonFooter = function(_a) {
  var color = _a.color,
    isActiveStats = _a.isActiveStats,
    isActiveEvolutions = _a.isActiveEvolutions,
    isActiveMoves = _a.isActiveMoves,
    onTabPress = _a.onTabPress;
  return React.createElement(
    Footer,
    null,
    React.createElement(
      FooterTab,
      { style: { backgroundColor: '#FAFAFA' } },
      React.createElement(
        Button,
        {
          active: isActiveStats,
          onPress: function() {
            return onTabPress('stats');
          },
          style: { backgroundColor: isActiveStats ? color.primary : 'transparent' },
        },
        React.createElement(
          Text,
          { style: [styles.tabTitle, { color: isActiveStats ? 'white' : color.primary }] },
          'Stats',
        ),
      ),
      React.createElement(
        Button,
        {
          active: isActiveEvolutions,
          onPress: function() {
            return onTabPress('evolutions');
          },
          style: { backgroundColor: isActiveEvolutions ? color.primary : 'transparent' },
        },
        React.createElement(
          Text,
          { style: [styles.tabTitle, { color: isActiveEvolutions ? 'white' : color.primary }] },
          'Evolutions',
        ),
      ),
      React.createElement(
        Button,
        {
          active: isActiveMoves,
          onPress: function() {
            return onTabPress('moves');
          },
          style: { backgroundColor: isActiveMoves ? color.primary : 'transparent' },
        },
        React.createElement(
          Text,
          { style: [styles.tabTitle, { color: isActiveMoves ? 'white' : color.primary }] },
          'Moves',
        ),
      ),
    ),
  );
};
export default PokemonFooter;
//# sourceMappingURL=PokemonFooter.js.map
