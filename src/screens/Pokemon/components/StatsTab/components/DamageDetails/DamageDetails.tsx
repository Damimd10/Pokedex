import React from 'react';
import {
  Image, StyleSheet, Text, View, ImageSourcePropType,
} from 'react-native';

const styles = StyleSheet.create({
  type: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export type DamageDetailsProps = {
  damage: string,
  icon: ImageSourcePropType,
};

const DamageDetails: React.FunctionComponent<DamageDetailsProps> = ({
  damage,
  icon,
}) => (
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
);

export default DamageDetails;
