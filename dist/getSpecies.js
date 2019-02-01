var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import axios from 'axios';
import getEvolutionChain from './getEvolutionChain';
import { handleErrorsResponse } from './utils';
const fetchEvolutionChain = data =>
  __awaiter(this, void 0, void 0, function*() {
    return Object.assign({}, data, {
      evolutions: yield getEvolutionChain(data.evolution_chain.url),
    });
  });
const getSpecies = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(fetchEvolutionChain)
    .catch(handleErrorsResponse);
export default getSpecies;
//# sourceMappingURL=getSpecies.js.map
