import axios from 'axios';

import { BASE_URL } from './constants';
import { mappingPokemonData } from './utils';
import getSpecies from './getSpecies';

const fetchSpecies = async data => {
  const pokemonWithSpecies = {
    ...data,
    species: await getSpecies(data.species.url),
  };
  return pokemonWithSpecies;
};

const getPokemon = id =>
  axios
    .get(`${BASE_URL}/${id}`)
    .then(response => response.data)
    .then(fetchSpecies)
    .then(mappingPokemonData);

export default getPokemon;
