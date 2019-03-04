import { Details, NormalizedPokemons } from '../models/shared';
import * as PokemonImages from '../../assets/img';

const generateId = (id: number): string => (String(id) as any).padStart(3, '0');

const mappingPokemons = (pokemons: Details[]): NormalizedPokemons[] =>
  pokemons.map(
  ({ name }: {name: string}, index: number): NormalizedPokemons => {
    const id: string = generateId(index + 1);

    return {
      id: index + 1,
      name: name.toUpperCase(),
      sprite: id
    };
  });

export default mappingPokemons;
