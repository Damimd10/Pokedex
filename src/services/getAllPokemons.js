// @flow

import axios from 'axios';
import type { AxiosPromise, AxiosResponse } from 'axios';

import type { Pokemons } from './models';

import { BASE_URL } from './constants';
import { normalizePokemons } from './normalize';
import { handleErrorsResponse } from './utils';

const URL: string = `${BASE_URL}?limit=949&offset=0`;

const getAllPokemons = (): AxiosPromise<Pokemons> =>
  axios
    .get(URL)
    .then((response: AxiosResponse) => response.data.results)
    .then(normalizePokemons)
    .catch(handleErrorsResponse);

export default getAllPokemons;
