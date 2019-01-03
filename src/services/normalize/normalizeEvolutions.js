import { BASE_SPRITE_URL } from '../constants';

const extractIdFromUrl = url =>
  url
    .substr(42)
    .match(/\d/g)
    .join('');

const getEvolve = async (chain, evolve) => {
  if (!evolve) return chain;

  const pokemonId = extractIdFromUrl(evolve.species.url);
  const sprite = `${BASE_SPRITE_URL}${pokemonId}.png`;

  chain.push({ name: evolve.species.name, sprite });

  return getEvolve(chain, evolve.evolves_to[0]);
};

const mappingEvolutions = evolutions => getEvolve([], evolutions.chain);

export default mappingEvolutions;
