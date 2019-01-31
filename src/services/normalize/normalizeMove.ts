import { Move, NormalizedMove } from '../models'
import { POKEMON_TYPES } from '../constants'

const formatName = (name: string): string => name.replace(/-/g, ' ')

const normalizeMove = (move: Move, level: string): NormalizedMove => ({
  level,
  name: formatName(move.name),
  accuracy: move.accuracy || 0,
  power: move.power || 0,
  pp: move.pp || 0,
  type: move.type.name,
  typeIcon: POKEMON_TYPES[move.type.name].icon,
})

export default normalizeMove
