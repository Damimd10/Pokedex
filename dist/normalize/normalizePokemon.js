import {
  BASE_SPRITE_URL_V2,
  PALETTE_COLOR,
  MAX_STATS,
  NAME_STATS,
  STATS_COLOR,
  POKEMON_TYPES,
} from '../constants'
const getColor = species => PALETTE_COLOR[species.color.name]
const getDescription = species =>
  species.flavor_text_entries.filter(flavor => flavor.language.name === 'en')[0].flavor_text
const getEvolutionChain = species => species.evolutions
const getSprite = name => `${BASE_SPRITE_URL_V2}/${name}.png`
const mappingStats = stats =>
  stats.reduce(
    (acc, currentStat) => [
      ...acc,
      {
        averageStat: Number((currentStat.base_stat / MAX_STATS[currentStat.stat.name]).toFixed(1)),
        baseStat: currentStat.base_stat,
        colorStat: STATS_COLOR[currentStat.stat.name],
        name: NAME_STATS[currentStat.stat.name],
      },
    ],
    [],
  )
const mappingTypes = types =>
  types.map(({ type }) => ({
    name: type.name.toUpperCase(),
    color: POKEMON_TYPES[type.name].color,
    icon: POKEMON_TYPES[type.name].icon,
  }))
const mappingTypesRelation = damage => Object.assign({}, damage[0])
const mappingPokemonData = data => ({
  color: getColor(data.species),
  description: getDescription(data.species),
  evolutionChain: getEvolutionChain(data.species),
  moves: data.moves,
  name: data.name,
  sprite: getSprite(data.name),
  stats: mappingStats(data.stats),
  types: mappingTypes(data.types),
  typesRelation: mappingTypesRelation(data.typesRelation),
})
export default mappingPokemonData
//# sourceMappingURL=normalizePokemon.js.map
