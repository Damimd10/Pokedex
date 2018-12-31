import axios from 'axios';

import { mappingEvolutions } from './utils';

const getEvolutionChain = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(mappingEvolutions);

export default getEvolutionChain;
