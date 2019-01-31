// @flow

import { BASE_SPRITE_URL_V2 } from '../constants'
import type { ChainLink, EvolutionChain, NormalizedEvolutions } from '../models'

const getEvolve = (
  chain: (?NormalizedEvolutions)[],
  evolve: ?ChainLink,
): NormalizedEvolutions[] | any => {
  if (!evolve) return chain

  const level: number =
    evolve.evolution_details.length > 0 ? evolve.evolution_details[0].min_level : 0
  const sprite: string = `${BASE_SPRITE_URL_V2}/${evolve.species.name}.png`

  chain.push({ name: evolve.species.name, level, sprite })

  getEvolve(chain, evolve.evolves_to[0])
}

const mappingEvolutions = (evolutions: EvolutionChain): NormalizedEvolutions[] =>
  getEvolve([], evolutions.chain)

export default mappingEvolutions
