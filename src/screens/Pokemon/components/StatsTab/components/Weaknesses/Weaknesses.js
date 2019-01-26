import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import WeaknessesDamage from '../WeaknessesDamage';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30 },
  column: { flex: 1, marginVertical: 10, justifyContent: 'center', alignItems: 'center' },
});

const Weaknesses = ({ damageFrom }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Weaknesses</Text>
    <FlatList
      data={damageFrom}
      keyExtractor={item => item.name}
      numColumns={3}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => <WeaknessesDamage {...item} />}
    />
  </View>
);

Weaknesses.propTypes = {
  damageFrom: arrayOf(shape({ damage: string, name: string })).isRequired,
};

export default Weaknesses;
