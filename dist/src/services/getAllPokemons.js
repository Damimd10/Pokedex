import axios from 'axios';
import { BASE_URL } from './constants';
import { normalizePokemons } from './normalize';
import { handleErrorsResponse } from './utils';
var URL = BASE_URL + '?limit=949&offset=0';
var getAllPokemons = function() {
  return axios
    .get(URL)
    .then(function(response) {
      return response.data.results;
    })
    .then(normalizePokemons)
    .catch(handleErrorsResponse);
};
export default getAllPokemons;
//# sourceMappingURL=getAllPokemons.js.map
