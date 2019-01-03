import axios from 'axios';

import { normalizeEvolutions } from './normalize';

const getEvolutionChain = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(normalizeEvolutions);

export default getEvolutionChain;
