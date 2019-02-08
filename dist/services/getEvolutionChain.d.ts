import { Error, NormalizedEvolutions } from './models';
declare const getEvolutionChain: (url: string) => Promise<Error | NormalizedEvolutions[]>;
export default getEvolutionChain;
