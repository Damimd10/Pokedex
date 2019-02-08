import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
var styles = StyleSheet.create({
  leftHeader: { paddingHorizontal: 5 },
  headerTitle: {
    color: '#F4F9F3',
    fontFamily: 'Oxygen-Regular',
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});
var PokemonHeader = function(_a) {
  var color = _a.color,
    goBack = _a.goBack,
    name = _a.name;
  return React.createElement(
    LinearGradient,
    { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: [color.dark, color.light] },
    React.createElement(
      Header,
      { noShadow: true, transparent: true },
      React.createElement(
        Left,
        { style: styles.leftHeader },
        React.createElement(
          Button,
          {
            transparent: true,
            onPress: function() {
              return goBack();
            },
          },
          React.createElement(Icon, { name: 'arrow-back', style: { color: '#F4F9F3' } }),
        ),
      ),
      React.createElement(
        Body,
        null,
        React.createElement(Title, { style: styles.headerTitle }, name),
      ),
      React.createElement(Right, null),
    ),
  );
};
export default PokemonHeader;
//# sourceMappingURL=PokemonHeader.js.map
