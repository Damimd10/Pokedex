import axios from 'axios';

import { normalizeMove } from './normalize';

const getMove = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(normalizeMove);

export default getMove;
