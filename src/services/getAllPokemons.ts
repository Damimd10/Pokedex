import axios, { AxiosResponse } from 'axios';

import { Error, Pokemons } from './models';
import { NormalizedPokemons } from './models/shared';

import { BASE_URL } from './constants';
import { normalizePokemons } from './normalize';
import { handleErrorsResponse } from './utils';

const URL: string = `${BASE_URL}?limit=719&offset=0`;

const getAllPokemons = (): Promise<Pokemons[] | NormalizedPokemons[] | Error> => axios
  .get(URL)
  .then((response: AxiosResponse) => response.data.results)
  .then(normalizePokemons)
  .catch(handleErrorsResponse);

export default getAllPokemons;
