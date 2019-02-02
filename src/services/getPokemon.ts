import axios, { AxiosResponse } from 'axios'

import {
  Error,
  Pokemon,
  PokemonSpecies,
  PokemonTypesNormalized,
  Types,
  NormalizedMove,
} from './models'
import { DamageRelations } from './models/shared'
import { BASE_URL } from './constants'
import { normalizePokemon } from './normalize'
import getSpecies from './getSpecies'
import getMove from './getMove'
import getType from './getType'
import { handleErrorsResponse } from './utils'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type FetchedTypes = Error | PokemonTypesNormalized | Types
type Moves = Error | NormalizedMove
type PokemonWithNormalizedSpecies = Omit<Pokemon, 'species'> & { species: Error | PokemonSpecies }
type PokemonWithNormalizedMoves = Omit<PokemonWithNormalizedSpecies, 'moves'> & {
  moves: Error | Moves[]
}
type PokemonWithNormalizedTypes = PokemonWithNormalizedMoves & { typesRelation: any }

const sortingMoves = (moves: Moves[]): Moves[] =>
  moves.sort((a: Moves, b: Moves): number => (<NormalizedMove>a).level - (<NormalizedMove>b).level)

const fetchMoves = async (
  data: PokemonWithNormalizedSpecies,
): Promise<PokemonWithNormalizedMoves> => {
  const promises: Promise<Moves>[] = data.moves
    .filter(move => move.version_group_details[0].level_learned_at > 0)
    .map(move => getMove(move.move.url, move.version_group_details[0].level_learned_at))

  return Promise.all(promises).then(
    (moves: Moves[]): PokemonWithNormalizedMoves => ({
      ...data,
      moves: sortingMoves(moves),
    }),
  )
}

const fetchSpecies = async (data: Pokemon): Promise<PokemonWithNormalizedSpecies> => ({
  ...data,
  species: await getSpecies(data.species.url),
})

const fetchTypes = async (
  data: PokemonWithNormalizedMoves,
): Promise<PokemonWithNormalizedTypes> => {
  const promises: Promise<FetchedTypes>[] = data.types.map(x => getType(x.type.url))

  return Promise.all(promises).then(
    (types: FetchedTypes[]): PokemonWithNormalizedTypes => ({
      ...data,
      typesRelation: types,
    }),
  )
}

const getPokemon = (id: number): Promise<any> =>
  axios
    .get(`${BASE_URL}${id}`)
    .then((response: AxiosResponse) => response.data)
    .then(fetchSpecies)
    .then(fetchMoves)
    .then(fetchTypes)
    .then(normalizePokemon)
    .catch(handleErrorsResponse)

export default getPokemon
