import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
  tabTitle: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 13,
    textTransform: 'uppercase',
  },
});

type TabProps = {
  tabName: string,
  isActive: boolean,
  onTabPress(tab: string): void,
  color: string,
};

const Tab: React.FunctionComponent<TabProps> = ({
  tabName,
  isActive,
  onTabPress,
  color,
}) => (
  <Button
    active={isActive}
    onPress={() => onTabPress(tabName)}
    style={{
      backgroundColor: isActive ? color : 'transparent',
    }}
  >
    <Text style={[styles.tabTitle, { color: isActive ? 'white' : color }]}>
      Stats
    </Text>
  </Button>
);

export default Tab;
