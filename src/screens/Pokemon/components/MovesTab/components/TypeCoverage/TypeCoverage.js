import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / 3,
  },
  itemText: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

const TypeCoverage = ({ types }) => (
  <FlatList
    data={types.damageTo}
    numColumns={3}
    columnWrapperStyle={{ flex: 1 }}
    style={styles.container}
    renderItem={({ item }) => (
      <View style={[styles.item, { backgroundColor: item.color }]}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    )}
  />
);

export default TypeCoverage;
