import * as React from 'react';
import {
  Body, Button, Header, Icon, Left, Right, Title,
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
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});

type Props = {
  goBack(): void;
};

const HomeHeader: React.FunctionComponent<Props> = ({ goBack }) => (
  <Header style={styles.headerContainer} noShadow transparent>
    <Left style={styles.leftHeader}>
      <Button transparent onPress={() => goBack()}>
        <Icon name="arrow-back" style={{ color: '#F4F9F3' }} />
      </Button>
    </Left>
    <Body>
      <Title style={styles.headerTitle}>Pokedex</Title>
    </Body>
    <Right />
  </Header>
);

export default HomeHeader;
