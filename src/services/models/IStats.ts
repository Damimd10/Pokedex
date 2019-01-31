import { Details } from './shared'

interface PokemonStat {
  stat: Details
  effort: number
  base_stat: number
}

interface NameStats {
  hp: string
  speed: string
  attack: string
  defense: string
  'special-attack': string
  'special-defense': string
}

interface MaxStats {
  hp: number
  speed: number
  attack: number
  defense: number
  'special-attack': number
  'special-defense': number
}

interface MappedStat {
  averageStat: number
  baseStat: number
  colorStat: any
  name: keyof NameStats
}

export {
  MappedStat, MaxStats, NameStats, PokemonStat,
}
