import { Error, PokemonSpecies } from './models';
declare const getSpecies: (url: string) => Promise<PokemonSpecies | Error>;
export default getSpecies;
