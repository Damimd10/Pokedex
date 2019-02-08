import * as React from 'react';
import { NormalizedPokemon } from '../../../../services/models';
declare type Props = Pick<NormalizedPokemon, 'color' | 'evolutionChain'>;
declare const EvolutionTab: React.FunctionComponent<Props>;
export default EvolutionTab;
