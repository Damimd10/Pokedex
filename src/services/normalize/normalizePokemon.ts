import { Details, MoveFlavorText } from '../models/shared'
import {
  NameStats,
  MaxStats,
  NormalizedTypes,
  NormalizedPokemon,
  MappedTypes,
  PokemonType,
  PokemonStat,
  MappedStat,
  PaletteColor,
  PokemonTypesNormalized,
  PokemonSpecies,
  EvolutionChain,
  PokemonSpeciesWithEvolutions,
} from '../models'
import {
  BASE_SPRITE_URL_V2,
  PALETTE_COLOR,
  MAX_STATS,
  NAME_STATS,
  STATS_COLOR,
  POKEMON_TYPES,
} from '../constants'

const getColor = (species: any): any => PALETTE_COLOR[species.color.name as keyof PaletteColor]

const getDescription = (species: PokemonSpecies): string => species.flavor_text_entries.filter((flavor: MoveFlavorText) => flavor.language.name === 'en')[0]
  .flavor_text

const getEvolutionChain = (species: PokemonSpeciesWithEvolutions): EvolutionChain => species.evolutions

const getSprite = (name: string): string => `${BASE_SPRITE_URL_V2}/${name}.png`

const mappingStats = (stats: PokemonStat[]): MappedStat[] => stats.reduce(
  (acc: MappedStat[], currentStat: PokemonStat): any => [
    ...acc,
    {
      averageStat: Number(
        (currentStat.base_stat / MAX_STATS[currentStat.stat.name as keyof MaxStats]).toFixed(1),
      ),
      baseStat: currentStat.base_stat,
      colorStat: STATS_COLOR[currentStat.stat.name as keyof NameStats],
      name: NAME_STATS[currentStat.stat.name as keyof NameStats],
    },
  ],
  [],
)

const mappingTypes = (types: PokemonType[]): NormalizedTypes[] => types.map(({ type }: { type: Details }) => ({
  name: type.name.toUpperCase(),
  color: POKEMON_TYPES[type.name as keyof MappedTypes].color,
  icon: POKEMON_TYPES[type.name as keyof MappedTypes].icon,
}))

const mappingTypesRelation = (damage: PokemonTypesNormalized[]): PokemonTypesNormalized => ({
  ...damage[0],
})

const mappingPokemonData = (data: any): NormalizedPokemon => ({
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
