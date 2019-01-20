import axios from 'axios';

import { normalizeMove } from './normalize';
import { handleErrorsResponse } from './utils';

const getMove = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(normalizeMove)
    .catch(handleErrorsResponse);

export default getMove;
