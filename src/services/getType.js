import axios from 'axios';

import { normalizeType } from './normalize';

const getType = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(normalizeType);

export default getType;
