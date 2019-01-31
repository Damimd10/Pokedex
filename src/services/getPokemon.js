import axios from 'axios'

import { BASE_URL } from './constants'
import { normalizePokemon } from './normalize'
import getSpecies from './getSpecies'
import getMove from './getMove'
import getType from './getType'
import { handleErrorsResponse } from './utils'

const fetchMoves = async data => {
  const promises = data.moves
    .filter(move => move.version_group_details[0].level_learned_at > 0)
    .map(move => getMove(move.move.url, move.version_group_details[0].level_learned_at))

  return Promise.all(promises).then(moves => ({
    ...data,
    moves: moves.sort((a, b) => a.level - b.level),
  }))
}

const fetchSpecies = async data => ({
  ...data,
  species: await getSpecies(data.species.url),
})

const fetchTypes = async data => {
  const promises = data.types.map(x => getType(x.type.url))

  return Promise.all(promises).then(types => ({
    ...data,
    typesRelation: types,
  }))
}

const getPokemon = id =>
  axios
    .get(`${BASE_URL}${id}`)
    .then(response => response.data)
    .then(fetchSpecies)
    .then(fetchMoves)
    .then(fetchTypes)
    .then(normalizePokemon)
    .catch(handleErrorsResponse)

export default getPokemon
