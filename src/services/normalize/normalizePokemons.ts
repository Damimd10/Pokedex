import { Details, NormalizedPokemons } from '../models/shared'
import { BASE_SPRITE_URL_V2 } from '../constants'

const mappingPokemons = (pokemons: Details[]): NormalizedPokemons[] => pokemons.map(
  ({ name }: { name: string }, index: number): NormalizedPokemons => ({
    id: index + 1,
    name: name.toUpperCase(),
    sprite: `${BASE_SPRITE_URL_V2}/${name}.png`,
  }),
)

export default mappingPokemons
