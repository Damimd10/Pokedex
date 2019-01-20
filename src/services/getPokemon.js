import axios from 'axios';

import { BASE_URL } from './constants';
import { normalizePokemon } from './normalize';
import getSpecies from './getSpecies';
import getMove from './getMove';
import getType from './getType';

const fetchMoves = async data => {
  const currentMoves = data.moves.slice(0, 5);
  const promises = currentMoves.map(pokemon => getMove(pokemon.move.url));

  return Promise.all(promises).then(moves => ({
    ...data,
    moves,
  }));
};

const fetchSpecies = async data => ({
  ...data,
  species: await getSpecies(data.species.url),
});

const fetchTypes = async data => {
  const promises = data.types.map(x => getType(x.type.url));

  return Promise.all(promises).then(types => ({
    ...data,
    typesRelation: types,
  }));
};

const getPokemon = id =>
  axios
    .get(`${BASE_URL}${id}`)
    .then(response => response.data)
    .then(fetchSpecies)
    .then(fetchMoves)
    .then(fetchTypes)
    .then(normalizePokemon);

export default getPokemon;
