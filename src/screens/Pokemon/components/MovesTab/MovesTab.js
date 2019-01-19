import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { View } from 'react-native';

import MovesTable from './components/MovesTable/MovesTable';
import Separator from '../../../../shared/components/Separator';

const MovesTab = ({ color, moves, typesRelation }) => {
  const typesQuantity = typesRelation.damageTo.length;
  const separatorTitle = `Type Coverage (${typesQuantity})`;

  return (
    <View>
      <MovesTable moves={moves} />
      <Separator backgroundColor={color.primary} title={separatorTitle} />
    </View>
  );
};

MovesTab.propTypes = {
  moves: arrayOf(shape({ accuracy: number, name: string, power: string, pp: string })).isRequired,
};

export default MovesTab;
