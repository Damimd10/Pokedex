import React, { Fragment } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import Damage from './components/Damage';
import PokemonStats from './components/PokemonStats';

const StatsTab = ({ color, stats, typesRelation }) => (
  <Fragment>
    <PokemonStats color={color} stats={stats} />
    <Damage color={color} title="Weaknesses" damage={typesRelation.damageFrom} />
    <Damage color={color} title="Strengths" damage={typesRelation.damageTo} />
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
