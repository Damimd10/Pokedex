import { Error, PokemonTypesNormalized, Types } from './models';
declare const getType: (url: string) => Promise<Types | PokemonTypesNormalized | Error>;
export default getType;
