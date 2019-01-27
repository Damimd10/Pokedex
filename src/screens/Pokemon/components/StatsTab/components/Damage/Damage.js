import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import DamageDetails from '../DamageDetails';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontWeight: 'bold', margin: 10, fontSize: 20 },
  column: { flex: 1, marginVertical: 10, justifyContent: 'center', alignItems: 'center' },
});

const Damage = ({ color, damage, title }) => (
  <View style={styles.container}>
    <Text style={[styles.title, { color: color.primary }]}>{title}</Text>
    <FlatList
      data={damage}
      keyExtractor={item => item.name}
      numColumns={3}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => <DamageDetails {...item} />}
    />
  </View>
);

Damage.propTypes = {
  damage: arrayOf(shape({ damage: string, name: string })).isRequired,
  title: string.isRequired,
};

export default Damage;
