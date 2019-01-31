// @flow
import { BASE_SPRITE_URL_V2 } from '../constants'
const getEvolve = (chain, evolve) => {
  if (!evolve) return chain
  const level = evolve.evolution_details.length > 0 ? evolve.evolution_details[0].min_level : 0
  const sprite = `${BASE_SPRITE_URL_V2}/${evolve.species.name}.png`
  chain.push({ name: evolve.species.name, level, sprite })
  getEvolve(chain, evolve.evolves_to[0])
}
const mappingEvolutions = evolutions => getEvolve([], evolutions.chain)
export default mappingEvolutions
//# sourceMappingURL=normalizeEvolutions.js.map
