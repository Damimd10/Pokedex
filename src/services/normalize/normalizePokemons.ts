import { Details, NormalizedPokemons } from '../models/shared';
import { BASE_SPRITE_URL_V2 } from '../constants';

const generateId = (id: number): string => (String(id) as any).padStart(3, '0');

const mappingPokemons = (pokemons: Details[]): NormalizedPokemons[] => pokemons.map(
  ({ name }: {name: string}, index: number): NormalizedPokemons => ({
    id: index + 1,
    name: name.toUpperCase(),
    sprite: `https://pokemon-trainer.com/images/sprite/shuffle/${generateId(index + 1)}.png`,
  }),
);

export default mappingPokemons;
