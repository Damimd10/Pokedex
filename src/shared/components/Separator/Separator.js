import React from 'react';
import { string } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

const Separator = ({ backgroundColor, title }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

Separator.propTypes = {
  backgroundColor: string.isRequired,
  title: string.isRequired,
};

export default Separator;
