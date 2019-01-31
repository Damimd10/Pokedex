// @flow

import axios from 'axios'
import type { AxiosPromise, AxiosResponse } from 'axios'

import type { PokemonSpecies } from './models'
import getEvolutionChain from './getEvolutionChain'
import { handleErrorsResponse } from './utils'

const fetchEvolutionChain = async (data: PokemonSpecies): PokemonSpecies => ({
  ...data,
  evolutions: await getEvolutionChain(data.evolution_chain.url),
})

const getSpecies = (url: string): AxiosPromise<PokemonSpecies> =>
  axios
    .get(url)
    .then((response: AxiosResponse) => response.data)
    .then(fetchEvolutionChain)
    .catch(handleErrorsResponse)

export default getSpecies
