import { Types, PokemonTypesNormalized, MappedTypes } from '../models'
import { DamageDetails, DamageRelations } from '../models/shared'
import { DAMAGE_TABLE, POKEMON_TYPES } from '../constants'

const mappedDamageDetails = (damage: DamageRelations, key: string): DamageDetails[] => damage[key as keyof DamageRelations].map(({ name }: { name: string }) => ({
  name,
  icon: POKEMON_TYPES[name as keyof MappedTypes].icon,
  damage: DAMAGE_TABLE[key as keyof DamageRelations],
}))

const mapDamage = (damage: DamageRelations, who: string) => {
  const keys: string[] = Object.keys(damage)

  return keys.reduce((accumulator: DamageDetails[], key: string) => {
    if (key.includes(who) && damage[key as keyof DamageRelations].length > 0) {
      accumulator.push(...mappedDamageDetails(damage, key))
    }

    return accumulator
  }, [])
}

const normalizeType = ({ damage_relations: damageRelations }: Types): PokemonTypesNormalized => ({
  damageFrom: mapDamage(damageRelations, 'from'),
  damageTo: mapDamage(damageRelations, 'to'),
})

export default normalizeType
