import axios from 'axios';

import { BASE_URL } from './constants';
import { mappingPokemons } from './utils';

const getAllPokemons = () =>
  axios
    .get(`${BASE_URL}`)
    .then(response => response.data.results)
    .then(mappingPokemons);

export default getAllPokemons;
