var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokemonEvolution from './components/PokemonEvolution';
var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  evolutionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  segment: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#E0E0E0',
    fontSize: 50,
  },
  levelText: {
    marginBottom: -20,
    fontFamily: 'Oxygen-Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});
var EvolutionTab = function(_a) {
  var color = _a.color,
    evolutionChain = _a.evolutionChain;
  return React.createElement(
    View,
    { style: styles.container },
    evolutionChain.map(function(evolution, index) {
      if (index + 1 >= evolutionChain.length) return;
      return React.createElement(
        View,
        { key: evolution.name + '-' + index, style: styles.evolutionContainer },
        React.createElement(PokemonEvolution, __assign({}, evolution)),
        React.createElement(
          View,
          { style: styles.segment },
          React.createElement(
            Text,
            { style: [styles.levelText, { color: color.primary }] },
            'Lv.' + evolutionChain[index + 1].level,
          ),
          React.createElement(Text, { style: styles.arrow }, '\u27F6'),
        ),
        React.createElement(PokemonEvolution, __assign({}, evolutionChain[index + 1])),
      );
    }),
  );
};
export default EvolutionTab;
//# sourceMappingURL=EvolutionTab.js.map
