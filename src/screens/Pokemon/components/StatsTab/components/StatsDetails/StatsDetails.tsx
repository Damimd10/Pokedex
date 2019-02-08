import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  statDetailsContainer: {
    width: 40,
  },
  stats: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statInfo: {
    fontSize: 12,
    padding: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

type Props = {
  averageStat: any;
  baseStat: any;
  color: any;
  colorStat: any;
  name: any;
};

const StatsDetails: React.FunctionComponent<Props> = ({
  averageStat,
  baseStat,
  color,
  colorStat,
  name,
}) => (
  <View key={name} style={styles.stats}>
    <View style={styles.statDetailsContainer}>
      <Text style={[styles.statInfo, { color: color.primary }]}>{name}</Text>
    </View>
    <View style={styles.statDetailsContainer}>
      <Text style={[styles.statInfo, { color: color.primary }]}>{baseStat}</Text>
    </View>
    <Progress.Bar
      progress={averageStat}
      borderColor="transparent"
      borderRadius={50}
      color={colorStat}
      height={10}
      width={250}
      unfilledColor="#F1F1F1"
    />
  </View>
);

export default StatsDetails;
