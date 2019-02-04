import axios, { AxiosResponse } from 'axios'

import { Error, NormalizedEvolutions, PokemonSpecies } from './models'
import getEvolutionChain from './getEvolutionChain'
import { handleErrorsResponse } from './utils'

type Evolutions = { evolutions: Error | NormalizedEvolutions[] }

const fetchEvolutionChain = async (data: PokemonSpecies): Promise<PokemonSpecies & Evolutions> => ({
  ...data,
  evolutions: await getEvolutionChain(data.evolution_chain.url),
})

const getSpecies = (url: string): Promise<Error | PokemonSpecies> => axios
  .get(url)
  .then((response: AxiosResponse) => response.data)
  .then(fetchEvolutionChain)
  .catch(handleErrorsResponse)

export default getSpecies
