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
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StatsDetails from '../StatsDetails';
var styles = StyleSheet.create({
  statsContainer: {
    justifyContent: 'center',
    height: 150,
    margin: 20,
  },
});
var PokemonStats = function(_a) {
  var color = _a.color,
    stats = _a.stats;
  return React.createElement(
    View,
    { style: styles.statsContainer },
    stats.map(function(stat) {
      return React.createElement(StatsDetails, __assign({ key: stat.name, color: color }, stat));
    }),
  );
};
export default PokemonStats;
//# sourceMappingURL=PokemonStats.js.map
