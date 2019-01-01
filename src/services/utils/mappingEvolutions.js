import { BASE_SPRITE_URL } from '../constants';

const getEvolve = async (chain, evolve) => {
  if (!evolve) return chain;
  const pokemonId = evolve.species.url
    .substr(42)
    .match(/\d/g)
    .join();

  const sprite = `${BASE_SPRITE_URL}${pokemonId}.png`;

  console.log('HERE', pokemonId, evolve.species.url);

  chain.push({ name: evolve.species.name, sprite });

  return getEvolve(chain, evolve.evolves_to[0]);
};

const mappingEvolutions = evolutions => getEvolve([], evolutions.chain);

export default mappingEvolutions;
