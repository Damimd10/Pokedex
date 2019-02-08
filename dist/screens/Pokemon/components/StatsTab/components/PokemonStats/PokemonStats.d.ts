import React from 'react';
import { NormalizedPokemon } from '../../../../../../services/models';
declare type Props = Pick<NormalizedPokemon, 'color' | 'stats'>;
declare const PokemonStats: React.FunctionComponent<Props>;
export default PokemonStats;
