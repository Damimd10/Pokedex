// @flow

import axios from 'axios';
import type { AxiosPromise, AxiosResponse } from 'axios';

import type { EvolutionChain } from './models';
import { normalizeEvolutions } from './normalize';
import { handleErrorsResponse } from './utils';

const getEvolutionChain = (url: string): AxiosPromise<EvolutionChain> =>
  axios
    .get(url)
    .then((response: AxiosResponse) => response.data)
    .then(normalizeEvolutions)
    .catch(handleErrorsResponse);

export default getEvolutionChain;
