import axios, { AxiosResponse } from 'axios'

import { Error, NormalizedEvolutions } from './models'
import { normalizeEvolutions } from './normalize'
import { handleErrorsResponse } from './utils'

const getEvolutionChain = (url: string): Promise<Error | NormalizedEvolutions[]> => axios
  .get(url)
  .then((response: AxiosResponse) => response.data)
  .then(normalizeEvolutions)
  .catch(handleErrorsResponse)

export default getEvolutionChain
