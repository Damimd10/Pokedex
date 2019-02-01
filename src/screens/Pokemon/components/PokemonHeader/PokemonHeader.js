import React from 'react';
import { func, shape, string } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  leftHeader: { paddingHorizontal: 5 },
  headerTitle: { color: '#F4F9F3', textTransform: 'uppercase' },
});

const PokemonHeader = ({ color, goBack, name }) => (
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

PokemonHeader.propTypes = {
  color: shape({ dark: string, light: string }).isRequired,
  goBack: func.isRequired,
  name: string.isRequired,
};

export default PokemonHeader;
