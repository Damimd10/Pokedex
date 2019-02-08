import * as React from 'react';
import { View } from 'react-native';
import Damage from './components/Damage';
import PokemonStats from './components/PokemonStats';
var StatsTab = function(_a) {
  var color = _a.color,
    stats = _a.stats,
    typesRelation = _a.typesRelation;
  return React.createElement(
    View,
    null,
    React.createElement(PokemonStats, { color: color, stats: stats }),
    React.createElement(Damage, {
      color: color,
      title: 'Weaknesses',
      damage: typesRelation.damageFrom,
    }),
    React.createElement(Damage, {
      color: color,
      title: 'Strengths',
      damage: typesRelation.damageTo,
    }),
  );
};
export default StatsTab;
//# sourceMappingURL=StatsTab.js.map
