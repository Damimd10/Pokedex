import React, { Fragment } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';

import PokemonStats from '../PokemonStats';
import PokemonEvolution from '../PokemonEvolution';

const StatsTab = ({ color, stats, evolutionChain, onPokemonEvolutionPress }) => (
  <Fragment>
    <PokemonStats color={color} stats={stats} />
    <PokemonEvolution
      color={color}
      evolutions={evolutionChain}
      onPokemonEvolutionPress={onPokemonEvolutionPress}
    />
  </Fragment>
);

StatsTab.propTypes = {
  color: shape({}).isRequired,
  stats: arrayOf(
    shape({
      averageStat: number,
      baseStat: number,
      colorStat: string,
      name: string,
    })
  ).isRequired,
  evolutionChain: arrayOf(
    shape({
      name: string,
      sprite: string,
    })
  ).isRequired,
  onPokemonEvolutionPress: func.isRequired,
};

export default StatsTab;
