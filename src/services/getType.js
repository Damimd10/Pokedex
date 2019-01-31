// @flow

import axios from 'axios'
import type { AxiosPromise, AxiosResponse } from 'axios'

import type { PokemonTypes } from './models'
import { normalizeType } from './normalize'
import { handleErrorsResponse } from './utils'

const getType = (url: string): AxiosPromise<PokemonTypes> =>
  axios
    .get(url)
    .then((response: AxiosResponse) => response.data)
    .then(normalizeType)
    .catch(handleErrorsResponse)

export default getType
