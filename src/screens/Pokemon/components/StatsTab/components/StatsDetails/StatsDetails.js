import React from 'react'
import { number, shape, string } from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress'

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
})

const StatsDetails = ({ averageStat, baseStat, color, colorStat, name }) => (
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
)

StatsDetails.propTypes = {
  color: shape({
    dark: string,
    light: string,
    primary: string,
  }).isRequired,
  averageStat: number.isRequired,
  baseStat: number.isRequired,
  colorStat: string.isRequired,
  name: string.isRequired,
}

export default StatsDetails
