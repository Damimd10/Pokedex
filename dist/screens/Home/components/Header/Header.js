import * as React from 'react';
import { Body, Header, Right, Title } from 'native-base';
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
    textAlign: 'center',
  },
});
var HomeHeader = function() {
  return React.createElement(
    Header,
    { style: styles.headerContainer, noLeft: true, noShadow: true, transparent: true },
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
