import React, { Fragment } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import PokemonStats from './components/PokemonStats';
import Weaknesses from './components/Weaknesses';

const StatsTab = ({ color, stats, typesRelation }) => (
  <Fragment>
    <PokemonStats color={color} stats={stats} />
    <Weaknesses color={color} {...typesRelation} />
  </Fragment>
);

StatsTab.propTypes = {
  stats: arrayOf(
    shape({
      averageStat: number,
      baseStat: number,
      colorStat: string,
      name: string,
    })
  ).isRequired,
};

export default StatsTab;
