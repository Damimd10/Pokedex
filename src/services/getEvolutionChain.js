import axios from 'axios';

import { normalizeEvolutions } from './normalize';
import { handleErrorsResponse } from './utils';

const getEvolutionChain = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(normalizeEvolutions)
    .catch(handleErrorsResponse);

export default getEvolutionChain;
