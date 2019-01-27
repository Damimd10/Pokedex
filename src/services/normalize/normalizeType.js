// @flow

import type { PokemonTypes, PokemonTypesNormalized } from '../models';
import type { DamageDetails } from '../models/shared';
import { DAMAGE_TABLE, POKEMON_TYPES } from '../constants';

const mappedDamageDetails = (damage, key: string): DamageDetails[] =>
  damage[key].map(({ name }: { name: string }) => ({
    name,
    icon: POKEMON_TYPES[name].icon,
    damage: DAMAGE_TABLE[key],
  }));

const mapDamage = (damage, who: string) => {
  const keys = Object.keys(damage);

  return keys.reduce((accumulator: DamageDetails[], key: number) => {
    if (key.includes(who) && damage[key].length > 0) {
      accumulator.push(...mappedDamageDetails(damage, key));
    }

    return accumulator;
  }, []);
};

const normalizeType = ({
  damage_relations: damageRelations,
}: PokemonTypes): PokemonTypesNormalized => ({
  damageFrom: mapDamage(damageRelations, 'from'),
  damageTo: mapDamage(damageRelations, 'to'),
});

export default normalizeType;
