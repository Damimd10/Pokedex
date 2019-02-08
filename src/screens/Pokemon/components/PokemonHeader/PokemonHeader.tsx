import React from 'react';
import { func, shape, string } from 'prop-types';
import { StyleSheet } from 'react-native';
import {
  Body, Button, Header, Icon, Left, Right, Title,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
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
  color: any;
  goBack(routeKey?: string | null): boolean;
  name: string;
};

const PokemonHeader: React.FunctionComponent<Props> = ({ color, goBack, name }) => (
  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[color.dark, color.light]}>
    <Header noShadow transparent>
      <Left style={styles.leftHeader}>
        <Button transparent onPress={() => goBack()}>
          <Icon name="arrow-back" style={{ color: '#F4F9F3' }} />
        </Button>
      </Left>
      <Body>
        <Title style={styles.headerTitle}>{name}</Title>
      </Body>
      <Right />
    </Header>
  </LinearGradient>
);

export default PokemonHeader;
