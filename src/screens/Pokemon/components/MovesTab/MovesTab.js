import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import { Body, ListItem, Text, Right } from 'native-base';

const image = require('../../../../assets/type-1.png');

const styles = StyleSheet.create({
  levelText: {
    color: '#B8B8B8',
    fontSize: 14,
  },
  moveName: {
    color: '#505050',
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

const MovesTab = ({ moves }) =>
  moves.map(({ level, name, type }) => (
    <ListItem icon key={name} style={{ margin: 5 }}>
      <Body>
        <Text style={styles.moveName}>{name}</Text>
        <Text style={styles.levelText}>{`Level ${level}`}</Text>
      </Body>
      <Right>
        <Image
          source={require('../../../../assets/type-1.png')}
          style={{ height: 40, width: 40, borderRadius: 20 }}
        />
      </Right>
    </ListItem>
  ));

MovesTab.propTypes = {
  moves: arrayOf(
    shape({
      accuracy: number,
      level: number,
      name: string,
      power: number,
      pp: number,
      type: string,
    })
  ).isRequired,
};

export default MovesTab;
