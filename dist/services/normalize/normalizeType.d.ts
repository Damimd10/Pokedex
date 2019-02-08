import { Types, PokemonTypesNormalized } from '../models';
declare const normalizeType: ({ damage_relations: damageRelations }: Types) => PokemonTypesNormalized;
export default normalizeType;
