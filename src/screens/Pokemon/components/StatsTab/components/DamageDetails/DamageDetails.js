import React from 'react'
import { string } from 'prop-types'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  type: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const DamageDetails = ({ damage, icon }) => (
  <View>
    <View style={styles.type}>
      <Image source={icon} style={{ height: 44, width: 44, borderRadius: 22 }} />
      <View
        style={{
          marginHorizontal: 12,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{damage}</Text>
      </View>
    </View>
  </View>
)

DamageDetails.propTypes = {
  damage: string.isRequired,
}

export default DamageDetails
