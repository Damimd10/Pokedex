import { DamageDetails, DamageRelations, Details } from './shared'

interface GameIndices {
  game_index: number
  generation: Details
}

interface Names {
  name: string
  language: Details
}

interface Pokemon {
  slot: number
  pokemon: Details
}

export interface Types {
  id: number
  name: string
  damage_relations: DamageRelations
  game_indices: GameIndices[]
  generation: Details
  move_damage_class: Details
  names: Names[]
  pokemon: Pokemon[]
  moves: Details[]
}

export interface PokemonType {
  slot: number
  type: Details
}

export interface PokemonTypesNormalized {
  damageFrom: DamageDetails[]
  damageTo: DamageDetails[]
}

interface TypeDetails {
  color: string
  icon: any
}

export interface MappedTypes {
  bug: TypeDetails
  dark: TypeDetails
  dragon: TypeDetails
  electric: TypeDetails
  fairy: TypeDetails
  fighting: TypeDetails
  fire: TypeDetails
  flying: TypeDetails
  ghost: TypeDetails
  grass: TypeDetails
  ground: TypeDetails
  ice: TypeDetails
  normal: TypeDetails
  poison: TypeDetails
  psychic: TypeDetails
  rock: TypeDetails
  steel: TypeDetails
  water: TypeDetails
}

export interface NormalizedTypes {
  name: string
  color: string
  icon: any
}
