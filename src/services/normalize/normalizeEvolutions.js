import { BASE_SPRITE_URL_V2 } from '../constants';

const getEvolve = async (chain, evolve) => {
  if (!evolve) return chain;

  const sprite = `${BASE_SPRITE_URL_V2}/${evolve.species.name}.png`;

  chain.push({ name: evolve.species.name, sprite });

  return getEvolve(chain, evolve.evolves_to[0]);
};

const mappingEvolutions = evolutions => getEvolve([], evolutions.chain);

export default mappingEvolutions;
