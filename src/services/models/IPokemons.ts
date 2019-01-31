import { Details } from './shared'

interface Pokemons {
  count: number
  next?: boolean
  previous?: boolean
  results: Details[]
}

interface NormalizedPokemon {
  color: any
  description: any
  evolutionChain: any
  moves: any
  name: any
  sprite: any
  stats: any
  types: any
  typesRelation: any
}

export { NormalizedPokemon, Pokemons }
