import axios from 'axios';

import { BASE_URL } from './constants';
import { normalizePokemons } from './normalize';

const URL = `${BASE_URL}?limit=949&offset=`;

const getAllPokemons = () =>
  axios
    .get(URL)
    .then(response => response.data.results)
    .then(normalizePokemons);

export default getAllPokemons;
