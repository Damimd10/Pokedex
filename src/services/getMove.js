// @flow

import axios from 'axios';
import type { AxiosPromise, AxiosResponse } from 'axios';

import type { Move, NormalizedMove } from './models';

import { normalizeMove } from './normalize';
import { handleErrorsResponse } from './utils';

const getMove = (url: string, level: string): AxiosPromise<Move> =>
  axios
    .get(url)
    .then((response: AxiosResponse) => response.data)
    .then((move: Move): NormalizedMove => normalizeMove(move, level))
    .catch(handleErrorsResponse);

export default getMove;
