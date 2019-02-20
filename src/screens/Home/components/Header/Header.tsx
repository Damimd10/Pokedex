import * as React from 'react';
import {
  Header, Icon, Input, Item,
} from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#C1392B',
  },
  leftHeader: { paddingHorizontal: 5 },
  headerTitle: {
    color: '#F4F9F3',
    fontFamily: 'Oxygen-Regular',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export type HomeHeaderProps = {
  handleSearchBar: (text: string) => void,
};

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = ({
  handleSearchBar,
}) => (
  <Header style={styles.headerContainer} noShadow transparent searchBar rounded>
    <Item>
      <Icon name="ios-search" />
      <Input placeholder="Search" onChangeText={handleSearchBar} />
      <Icon name="ios-bug" />
    </Item>
  </Header>
);

export default HomeHeader;
