import axios from 'axios';
import { normalizeMove } from './normalize';
import { handleErrorsResponse } from './utils';
const getMove = (url, level) =>
  axios
    .get(url)
    .then(response => response.data)
    .then(move => normalizeMove(move, level))
    .catch(handleErrorsResponse);
export default getMove;
//# sourceMappingURL=getMove.js.map
