import axios from 'axios';

import { BASE_URL } from './constants';
import { mappingPokemonData } from './utils';
import getSpecies from './getSpecies';

const fetchSpecies = async data => ({
  ...data,
  species: await getSpecies(data.species.url),
});

const getPokemon = id =>
  axios
    .get(`${BASE_URL}/${id}`)
    .then(response => response.data)
    .then(fetchSpecies)
    .then(mappingPokemonData);

export default getPokemon;
