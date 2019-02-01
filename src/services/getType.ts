import axios, { AxiosResponse } from 'axios'

import { Error, PokemonTypesNormalized, Types } from './models'
import { normalizeType } from './normalize'
import { handleErrorsResponse } from './utils'

const getType = (url: string): Promise<Error | PokemonTypesNormalized | Types> => axios
  .get(url)
  .then((response: AxiosResponse) => response.data)
  .then(normalizeType)
  .catch(handleErrorsResponse)

export default getType
