// @flow
import type { Details } from './IDetails';

export interface DamageRelations {
  no_damage_to: Details[];
  half_damage_to: Details[];
  double_damage_to: Details[];
  no_damage_from: Details[];
  half_damage_from: Details[];
  double_damage_from: Details[];
}
