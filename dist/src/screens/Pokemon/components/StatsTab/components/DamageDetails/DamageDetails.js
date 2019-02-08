import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
var styles = StyleSheet.create({
  type: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
var DamageDetails = function(_a) {
  var damage = _a.damage,
    icon = _a.icon;
  return React.createElement(
    View,
    null,
    React.createElement(
      View,
      { style: styles.type },
      React.createElement(Image, {
        source: icon,
        style: { height: 44, width: 44, borderRadius: 22 },
      }),
      React.createElement(
        View,
        {
          style: {
            marginHorizontal: 12,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        React.createElement(Text, null, damage),
      ),
    ),
  );
};
export default DamageDetails;
//# sourceMappingURL=DamageDetails.js.map
