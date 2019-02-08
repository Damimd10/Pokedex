import { Error, NormalizedPokemon } from './models';
declare const getPokemon: (id: number) => Promise<NormalizedPokemon | Error>;
export default getPokemon;
