import axios from 'axios';

import getEvolutionChain from './getEvolutionChain';
import { handleErrorsResponse } from './utils';

const fetchEvolutionChain = async data => ({
  ...data,
  evolutions: await getEvolutionChain(data.evolution_chain.url),
});

const getSpecies = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(fetchEvolutionChain)
    .catch(handleErrorsResponse);

export default getSpecies;
