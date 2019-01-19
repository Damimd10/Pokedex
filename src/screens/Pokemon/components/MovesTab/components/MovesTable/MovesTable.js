import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';

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
  text: { fontSize: 13, fontWeight: 'bold', textAlign: 'center', textTransform: 'capitalize' },
  move: { fontSize: 13, fontWeight: 'bold', textAlign: 'left', textTransform: 'capitalize' },
  headTitle: { fontWeight: 'bold', fontSize: 14, textAlign: 'center', textTransform: 'uppercase' },
  moveBackground: { backgroundColor: 'red' },
});

const MovesTable = ({ moves }) => {
  const tableHead = ['', 'ACC', 'PWR', 'PP'];
  const tableTitle = moves.map(x => x.name);
  const tableData = moves.reduce(
    (acc, { accuracy, power, pp }) => [...acc, [`${accuracy}%`, power, pp]],
    []
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderColor: 'transparent' }}>
        <Row
          data={tableHead}
          flexArr={[2, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.headTitle}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.move}
          />
          <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
        </TableWrapper>
      </Table>
    </View>
  );
};
MovesTable.propTypes = {
  moves: arrayOf(shape({ accuracy: number, name: string, power: string, pp: string })).isRequired,
};

export default MovesTable;
