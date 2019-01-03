import axios from 'axios';

import { BASE_URL } from './constants';
import { normalizePokemons } from './normalize';

const getAllPokemons = () =>
  axios
    .get(BASE_URL)
    .then(response => response.data.results)
    .then(normalizePokemons);

export default getAllPokemons;
