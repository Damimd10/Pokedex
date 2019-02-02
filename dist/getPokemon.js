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
const fetchMoves = data =>
  __awaiter(this, void 0, void 0, function*() {
    const promises = data.moves
      .filter(move => move.version_group_details[0].level_learned_at > 0)
      .map(move => getMove(move.move.url, move.version_group_details[0].level_learned_at));
    return Promise.all(promises).then(moves =>
      Object.assign({}, data, { moves: sortingMoves(moves) }),
    );
  });
const fetchSpecies = data =>
  __awaiter(this, void 0, void 0, function*() {
    return Object.assign({}, data, { species: yield getSpecies(data.species.url) });
  });
const fetchTypes = data =>
  __awaiter(this, void 0, void 0, function*() {
    const promises = data.types.map(x => getType(x.type.url));
    return Promise.all(promises).then(types => Object.assign({}, data, { typesRelation: types }));
  });
const getPokemon = id =>
  axios
    .get(`${BASE_URL}${id}`)
    .then(response => response.data)
    .then(fetchSpecies)
    .then(fetchMoves)
    .then(fetchTypes)
    .then(normalizePokemon)
    .catch(handleErrorsResponse);
export default getPokemon;
//# sourceMappingURL=getPokemon.js.map
