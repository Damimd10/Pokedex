const getEvolve = (chain, evolve) => {
  if (evolve && evolve.species) {
    chain.push({ name: evolve.species.name });
  }

  if (evolve && evolve.hasOwnProperty('evolves_to')) {
    return getEvolve(chain, evolve.evolves_to[0]);
  }

  return chain;
};

const mappingEvolutions = evolutions => getEvolve([], evolutions.chain.evolves_to[0]);

export default mappingEvolutions;
