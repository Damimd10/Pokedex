import axios from 'axios';

import getEvolutionChain from './getEvolutionChain';

const fetchEvolutionChain = async data => ({
  ...data,
  evolutions: await getEvolutionChain(data.evolution_chain.url),
});

const getSpecies = url =>
  axios
    .get(url)
    .then(response => response.data)
    .then(fetchEvolutionChain);

export default getSpecies;
