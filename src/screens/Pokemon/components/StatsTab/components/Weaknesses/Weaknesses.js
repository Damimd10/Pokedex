import React, { Fragment } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30 },
  type: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Weaknesses = ({ damageFrom }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Weaknesses</Text>
    <FlatList
      data={damageFrom}
      keyExtractor={item => item.name}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      renderItem={({ item }) => (
        <View>
          <View style={styles.type}>
            <Image source={item.icon} style={{ height: 44, width: 44, borderRadius: 22 }} />
            <View
              style={{
                marginHorizontal: 12,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>{item.damage}</Text>
            </View>
          </View>
        </View>
      )}
    />
  </View>
);

export default Weaknesses;
