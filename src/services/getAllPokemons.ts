import axios, { AxiosResponse } from 'axios'

import { Pokemons } from './models'
import { NormalizedPokemons } from './models/shared';

import { BASE_URL } from './constants'
import { normalizePokemons } from './normalize'
import { handleErrorsResponse } from './utils'

const URL: string = `${BASE_URL}?limit=949&offset=0`

type Error = {
  errorMessage: string;
};

const getAllPokemons = (): Promise<Pokemons[] | NormalizedPokemons[] | Error> => axios
  .get(URL)
  .then((response: AxiosResponse) => response.data.results)
  .then(normalizePokemons)
  .catch(handleErrorsResponse)

export default getAllPokemons
