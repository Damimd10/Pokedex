import axios, { AxiosResponse } from 'axios'

import {
  Error,
  Pokemon,
  PokemonSpecies,
  PokemonTypesNormalized,
  Types,
  NormalizedMove,
} from './models'
import { BASE_URL } from './constants'
import { normalizePokemon } from './normalize'
import getSpecies from './getSpecies'
import getMove from './getMove'
import getType from './getType'
import { handleErrorsResponse } from './utils'

type TypeRelations = Error | PokemonTypesNormalized | Types
type Moves = Error | NormalizedMove

const sortingMoves = (moves: Moves[]): Moves[] =>
  moves.sort((a: Moves, b: Moves): number => (<NormalizedMove>a).level - (<NormalizedMove>b).level)

const getMoves = (data: Pokemon): Promise<Moves>[] =>
  data.moves
    .filter(move => move.version_group_details[0].level_learned_at > 0)
    .map(move => getMove(move.move.url, move.version_group_details[0].level_learned_at))

const fetchAll = async (data: Pokemon): Promise<any> => {
  const moves = await Promise.all(getMoves(data)).then(
    (moves: Moves[]): Moves[] | NormalizedMove[] => sortingMoves(moves),
  )
  const species: Error | PokemonSpecies = await getSpecies(data.species.url)
  const typesRelationsPromises: Promise<TypeRelations>[] = data.types.map(x => getType(x.type.url))
  const typesRelation: TypeRelations[] | Error = await Promise.all(typesRelationsPromises).then(
    (types: TypeRelations[]): TypeRelations[] => types,
  )

  return {
    ...data,
    moves,
    species,
    typesRelation,
  }
}

const getPokemon = (id: number): Promise<any> =>
  axios
    .get(`${BASE_URL}${id}`)
    .then((response: AxiosResponse) => response.data)
    .then(fetchAll)
    .then(normalizePokemon)
    .catch(handleErrorsResponse)

export default getPokemon
