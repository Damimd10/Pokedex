import { Details } from './shared'

export interface PokemonStat {
  stat: Details
  effort: number
  base_stat: number
}

export interface NameStats {
  hp: string
  speed: string
  attack: string
  defense: string
  'special-attack': string
  'special-defense': string
}

export interface MaxStats {
  hp: number
  speed: number
  attack: number
  defense: number
  'special-attack': number
  'special-defense': number
}

export interface MappedStat {
  averageStat: number
  baseStat: number
  colorStat: any
  name: keyof NameStats
}
