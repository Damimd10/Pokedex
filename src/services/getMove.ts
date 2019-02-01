import axios, { AxiosResponse } from 'axios'

import { Error, Move, NormalizedMove } from './models'

import { normalizeMove } from './normalize'
import { handleErrorsResponse } from './utils'

const getMove = (url: string, level: string): Promise<Error | NormalizedMove> => axios
  .get(url)
  .then((response: AxiosResponse) => response.data)
  .then((move: Move): NormalizedMove => normalizeMove(move, level))
  .catch(handleErrorsResponse)

export default getMove
