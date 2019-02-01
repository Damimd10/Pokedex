import axios, { AxiosResponse } from 'axios'

import { Error, PokemonSpecies, PokemonSpeciesWithEvolutions } from './models'
import getEvolutionChain from './getEvolutionChain'
import { handleErrorsResponse } from './utils'

const fetchEvolutionChain = async (data: PokemonSpecies): Promise<PokemonSpecies & any> => ({
  ...data,
  evolutions: await getEvolutionChain(data.evolution_chain.url),
})

const getSpecies = (url: string): Promise<Error | PokemonSpecies> => axios
  .get(url)
  .then((response: AxiosResponse) => response.data)
  .then(fetchEvolutionChain)
  .catch(handleErrorsResponse)

export default getSpecies
