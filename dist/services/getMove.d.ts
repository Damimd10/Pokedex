import { Error, NormalizedMove } from './models';
declare const getMove: (url: string, level: number) => Promise<NormalizedMove | Error>;
export default getMove;
