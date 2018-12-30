import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

import PokemonSprite from './components/PokemonSprite';
import PokemonType from './components/PokemonType';

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    margin: 20,
    height: 150,
  },
  stats: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  statName: { fontSize: 12, padding: 5, textTransform: 'uppercase', fontWeight: 'bold' },
});

class Pokemon extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: navigation.getParam('pokemon').color.primary },
    headerTitleStyle: { color: 'white', textTransform: 'uppercase' },
    title: navigation.getParam('pokemon').name,
  });

  render() {
    const { color, sprite, stats, types } = this.props.navigation.getParam('pokemon');
    return (
      <View style={styles.itemContainer}>
        <PokemonSprite backgroundColor={color.light} spriteUrl={sprite} />
        <PokemonType backgroundColor={color.primary} types={types} />
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View style={styles.stats}>
              <Text style={[styles.statName, { color: color.primary }]}>{stat.name}</Text>
              <Text>{stat.baseStat}</Text>
              <Progress.Bar
                key={index}
                progress={0.4}
                borderColor="transparent"
                color={stat.colorStat}
                height={20}
                width={200}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Pokemon;
