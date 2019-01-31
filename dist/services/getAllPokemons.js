import axios from 'axios'
import { BASE_URL } from './constants'
import { normalizePokemons } from './normalize'
import { handleErrorsResponse } from './utils'
const URL = `${BASE_URL}?limit=949&offset=0`
const getAllPokemons = () =>
  axios
    .get(URL)
    .then(response => response.data.results)
    .then(normalizePokemons)
    .catch(handleErrorsResponse)
export default getAllPokemons
