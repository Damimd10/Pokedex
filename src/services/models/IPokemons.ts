// @flow

import { Details } from './shared';

export interface Pokemons {
  count: number;
  next?: boolean;
  previous?: boolean;
  results: Details[];
}
