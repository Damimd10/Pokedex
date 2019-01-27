import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import { Body, ListItem, Text, Right } from 'native-base';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
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

const MovesTab = ({ moves }) => (
  <View style={styles.container}>
    {moves.map(({ level, name, type, typeIcon }) => (
      <ListItem icon key={name} style={{ margin: 5 }}>
        <Body>
          <Text style={styles.moveName}>{name}</Text>
          <Text style={styles.levelText}>{`Level ${level}`}</Text>
        </Body>
        <Right>
          <Image source={typeIcon} style={{ height: 40, width: 40, borderRadius: 20 }} />
        </Right>
      </ListItem>
    ))}
  </View>
);

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
