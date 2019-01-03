import { BASE_SPRITE_URL } from '../constants';

const mappingPokemons = pokemons =>
  pokemons.map((pokemon, index) => {
    const id = index + 1;
    return {
      id,
      name: pokemon.name.toUpperCase(),
      sprite: `${BASE_SPRITE_URL}${id}.png`,
    };
  });

export default mappingPokemons;
