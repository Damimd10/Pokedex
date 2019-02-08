import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
var styles = StyleSheet.create({
  statDetailsContainer: {
    width: 40,
  },
  stats: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statInfo: {
    fontSize: 12,
    padding: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
var StatsDetails = function(_a) {
  var averageStat = _a.averageStat,
    baseStat = _a.baseStat,
    color = _a.color,
    colorStat = _a.colorStat,
    name = _a.name;
  return React.createElement(
    View,
    { key: name, style: styles.stats },
    React.createElement(
      View,
      { style: styles.statDetailsContainer },
      React.createElement(Text, { style: [styles.statInfo, { color: color.primary }] }, name),
    ),
    React.createElement(
      View,
      { style: styles.statDetailsContainer },
      React.createElement(Text, { style: [styles.statInfo, { color: color.primary }] }, baseStat),
    ),
    React.createElement(Progress.Bar, {
      progress: averageStat,
      borderColor: 'transparent',
      borderRadius: 50,
      color: colorStat,
      height: 10,
      width: 250,
      unfilledColor: '#F1F1F1',
    }),
  );
};
export default StatsDetails;
//# sourceMappingURL=StatsDetails.js.map
