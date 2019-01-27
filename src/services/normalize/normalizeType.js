// @flow

import type { PokemonTypes, PokemonTypesNormalized } from '../models';
import { POKEMON_TYPES } from '../constants';

const DAMAGE_TABLE = {
  double_damage_from: '2x',
  half_damage_from: '1/2x',
  no_damage_from: '---',
  double_damage_to: '2x',
  half_damage_to: '1/2x',
  no_damage_to: '---',
};

const mapDamageFrom = (damage, who) => {
  const keys = Object.keys(damage);

  return keys.reduce((accumulator, key) => {
    if (key.includes(who) && damage[key].length > 0) {
      const mappedDamageFrom = damage[key].map(({ name }) => ({
        name,
        icon: POKEMON_TYPES[name].icon,
        damage: DAMAGE_TABLE[key],
      }));
      accumulator.push(...mappedDamageFrom);
    }

    return accumulator;
  }, []);
};

const normalizeType = ({
  damage_relations: damageRelations,
}: PokemonTypes): PokemonTypesNormalized => ({
  damageFrom: mapDamageFrom(damageRelations, 'from'),
  damageTo: mapDamageFrom(damageRelations, 'to'),
});

export default normalizeType;
