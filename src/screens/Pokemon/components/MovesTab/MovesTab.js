import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import PokemonMove from './components/PokemonMove';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: 14,
  },
  head: { height: 40 },
  wrapper: { flexDirection: 'row' },
  title: { flex: 2 },
  row: { height: 28 },
  text: { textAlign: 'center', textTransform: 'capitalize' },
  textUppercase: { textAlign: 'center', textTransform: 'uppercase' },
});

const MovesTab = ({ moves }) => {
  const tableHead = ['', 'ACC', 'PWR', 'PP'];
  const tableTitle = moves.map(x => x.name);
  const tableData = moves.reduce((acc, el) => {
    acc.push([el.accuracy, el.power, el.pp]);
    return acc;
  }, []);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: 'transparent' }}>
        <Row
          data={tableHead}
          flexArr={[2, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.textUppercase}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />
          <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
        </TableWrapper>
      </Table>
    </View>
  );
};

MovesTab.propTypes = {
  moves: arrayOf(shape({ accuracy: number, name: string, power: string, pp: string })).isRequired,
};

export default MovesTab;
