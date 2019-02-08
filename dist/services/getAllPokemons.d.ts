import { Error, Pokemons } from './models';
import { NormalizedPokemons } from './models/shared';
declare const getAllPokemons: () => Promise<Error | NormalizedPokemons[] | Pokemons[]>;
export default getAllPokemons;
