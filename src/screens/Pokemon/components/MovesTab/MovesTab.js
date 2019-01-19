import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { View } from 'react-native';

import MovesTable from './components/MovesTable/MovesTable';
import TypeCoverage from './components/TypeCoverage';
import Separator from '../../../../shared/components/Separator';

const MovesTab = ({ color, moves, typesRelation }) => {
  const typesQuantity = typesRelation.damageTo.length;
  const separatorTitle = `Type Coverage (${typesQuantity})`;

  return (
    <View>
      <MovesTable moves={moves} />
      <Separator backgroundColor={color.primary} title={separatorTitle} />
      <TypeCoverage types={typesRelation} />
    </View>
  );
};

MovesTab.propTypes = {
  moves: arrayOf(shape({ accuracy: number, name: string, power: number, pp: number })).isRequired,
};

export default MovesTab;
