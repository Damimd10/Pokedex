import axios from 'axios';
import { normalizeEvolutions } from './normalize';
import { handleErrorsResponse } from './utils';
var getEvolutionChain = function(url) {
  return axios
    .get(url)
    .then(function(response) {
      return response.data;
    })
    .then(normalizeEvolutions)
    .catch(handleErrorsResponse);
};
export default getEvolutionChain;
//# sourceMappingURL=getEvolutionChain.js.map
