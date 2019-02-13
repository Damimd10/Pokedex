import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Body, ListItem, Text, Right } from 'native-base';
import { toCapitalizeText } from '../../../../shared/utils';
var styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  levelText: {
    fontFamily: 'Oxygen-Bold',
    color: '#B8B8B8',
    fontSize: 13,
  },
  moveName: {
    fontFamily: 'Oxygen-Regular',
    color: '#505050',
    fontSize: 20,
  },
});
var MovesTab = function(_a) {
  var moves = _a.moves;
  return React.createElement(
    View,
    { style: styles.container },
    moves.map(function(_a) {
      var level = _a.level,
        name = _a.name,
        typeIcon = _a.typeIcon;
      return React.createElement(
        ListItem,
        { icon: true, key: name, style: { margin: 5 } },
        React.createElement(
          Body,
          null,
          React.createElement(Text, { style: styles.moveName }, toCapitalizeText(name)),
          React.createElement(Text, { style: styles.levelText }, 'Level ' + level),
        ),
        React.createElement(
          Right,
          null,
          React.createElement(Image, {
            source: typeIcon,
            style: { height: 40, width: 40, borderRadius: 20 },
          }),
        ),
      );
    }),
  );
};
export default MovesTab;
//# sourceMappingURL=MovesTab.js.map
