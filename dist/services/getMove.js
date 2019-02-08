import axios from 'axios';
import { normalizeMove } from './normalize';
import { handleErrorsResponse } from './utils';
var getMove = function(url, level) {
  return axios
    .get(url)
    .then(function(response) {
      return response.data;
    })
    .then(function(move) {
      return normalizeMove(move, level);
    })
    .catch(handleErrorsResponse);
};
export default getMove;
//# sourceMappingURL=getMove.js.map
