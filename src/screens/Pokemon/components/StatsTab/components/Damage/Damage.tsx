import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';

import { ColorRange } from '../../../../../../services/models';
import DamageDetails from '../DamageDetails';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
    fontFamily: 'Oxygen-Regular',
    textTransform: 'capitalize',
  },
  column: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  color: ColorRange;
  damage: any;
  title: string;
};

const Damage: React.FunctionComponent<Props> = ({ color, damage, title }) => (
  <View style={styles.container}>
    <Text style={[styles.title, { color: color.primary }]}>{title}</Text>
    <FlatList
      data={damage}
      keyExtractor={(item: any) => item.name}
      numColumns={3}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => <DamageDetails {...item} />}
    />
  </View>
);

export default Damage;
