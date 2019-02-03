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
import { BASE_URL } from './constants';
import { normalizePokemon } from './normalize';
import getSpecies from './getSpecies';
import getMove from './getMove';
import getType from './getType';
import { handleErrorsResponse } from './utils';
const sortingMoves = moves => moves.sort((a, b) => a.level - b.level);
const getMoves = data =>
  data.moves
    .filter(move => move.version_group_details[0].level_learned_at > 0)
    .map(move => getMove(move.move.url, move.version_group_details[0].level_learned_at));
const fetchAll = data =>
  __awaiter(this, void 0, void 0, function*() {
    const moves = yield Promise.all(getMoves(data)).then(moves => sortingMoves(moves));
    const species = yield getSpecies(data.species.url);
    const typesRelationsPromises = data.types.map(x => getType(x.type.url));
    const typesRelation = yield Promise.all(typesRelationsPromises).then(types => types);
    return Object.assign({}, data, { moves, species, typesRelation });
  });
const getPokemon = id =>
  axios
    .get(`${BASE_URL}${id}`)
    .then(response => response.data)
    .then(fetchAll)
    .then(normalizePokemon)
    .catch(handleErrorsResponse);
export default getPokemon;
//# sourceMappingURL=getPokemon.js.map
