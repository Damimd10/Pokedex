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
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DamageDetails from '../DamageDetails';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
    fontFamily: 'Oxygen-Regular',
  },
  column: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
var Damage = function(_a) {
  var color = _a.color,
    damage = _a.damage,
    title = _a.title;
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, { style: [styles.title, { color: color.primary }] }, title),
    React.createElement(FlatList, {
      data: damage,
      keyExtractor: function(item) {
        return item.name;
      },
      numColumns: 3,
      columnWrapperStyle: styles.column,
      renderItem: function(_a) {
        var item = _a.item;
        return React.createElement(DamageDetails, __assign({}, item));
      },
    }),
  );
};
export default Damage;
//# sourceMappingURL=Damage.js.map
