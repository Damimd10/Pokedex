import * as React from 'react';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#C1392B',
  },
  leftHeader: { paddingHorizontal: 5 },
  headerTitle: {
    color: '#F4F9F3',
    fontFamily: 'Oxygen-Regular',
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});
var HomeHeader = function(_a) {
  var goBack = _a.goBack;
  return React.createElement(
    Header,
    { style: styles.headerContainer, noShadow: true, transparent: true },
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
      React.createElement(Title, { style: styles.headerTitle }, 'Pokedex'),
    ),
    React.createElement(Right, null),
  );
};
export default HomeHeader;
//# sourceMappingURL=Header.js.map
