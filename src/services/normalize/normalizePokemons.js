import { BASE_SPRITE_URL_V2 } from '../constants';

const mappingPokemons = pokemons =>
  pokemons.map(({ name }, index) => ({
    id: index + 1,
    name: name.toUpperCase(),
    sprite: `${BASE_SPRITE_URL_V2}/${name}.png`,
  }));

export default mappingPokemons;
