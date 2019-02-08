import * as React from 'react';
import { NormalizedPokemon } from '../../../../services/models';
declare type Props = Pick<NormalizedPokemon, 'moves'>;
declare const MovesTab: React.FunctionComponent<Props>;
export default MovesTab;
