import * as React from 'react';
import {
  Body, Header, Left, Right, Title,
} from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#C1392B',
  },
  leftHeader: { paddingHorizontal: 5 },
  headerTitle: {
    color: '#F4F9F3',
    fontFamily: 'Oxygen-Regular',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
});

const HomeHeader: React.FunctionComponent<{}> = () => (
  <Header style={styles.headerContainer} noShadow transparent>
    <Left />
    <Body>
      <Title style={styles.headerTitle}>Pokedex</Title>
    </Body>
    <Right />
  </Header>
);

export default HomeHeader;
