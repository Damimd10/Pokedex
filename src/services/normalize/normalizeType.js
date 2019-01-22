// @flow

import { TYPES_COLOR } from '../constants';
import type { PokemonTypes } from '../models';
import type { DamageRelations } from '../models/shared';

const addColor = (damageArray: DamageRelations[]): DamageRelations[] =>
  damageArray.map((data: DamageRelations) => ({ ...data, color: TYPES_COLOR[data.name] }));

const normalizeType = ({ damage_relations: damageRelations }: PokemonTypes) => ({
  damageTo: addColor(damageRelations.double_damage_to),
  damageFrom: addColor(damageRelations.double_damage_from),
});

export default normalizeType;
