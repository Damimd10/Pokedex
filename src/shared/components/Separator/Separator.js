import React from 'react';
import { string } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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

const Separator = ({ backgroundColor, children, title }) => (
  <View style={[styles.container, { backgroundColor }]}>
    {children || <Text style={styles.title}>{title}</Text>}
  </View>
);

Separator.propTypes = {
  backgroundColor: string.isRequired,
  title: string,
};

export default Separator;
