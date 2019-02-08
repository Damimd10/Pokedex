import * as React from 'react';
import { NormalizedPokemon } from '../../../../services/models';
declare type Props = Pick<NormalizedPokemon, 'color' | 'stats' | 'typesRelation'>;
declare const StatsTab: React.SFC<Props>;
export default StatsTab;
