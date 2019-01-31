import { DAMAGE_TABLE, POKEMON_TYPES } from '../constants'
const mappedDamageDetails = (damage, key) =>
  damage[key].map(({ name }) => ({
    name,
    icon: POKEMON_TYPES[name].icon,
    damage: DAMAGE_TABLE[key],
  }))
const mapDamage = (damage, who) => {
  const keys = Object.keys(damage)
  return keys.reduce((accumulator, key) => {
    if (key.includes(who) && damage[key].length > 0) {
      accumulator.push(...mappedDamageDetails(damage, key))
    }
    return accumulator
  }, [])
}
const normalizeType = ({ damage_relations: damageRelations }) => ({
  damageFrom: mapDamage(damageRelations, 'from'),
  damageTo: mapDamage(damageRelations, 'to'),
})
export default normalizeType
//# sourceMappingURL=normalizeType.js.map
