import { Details, MoveFlavorText } from '../models/shared';
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
  ColorRange,
} from '../models';
import {
  BASE_SPRITE_URL_V2,
  PALETTE_COLOR,
  MAX_STATS,
  NAME_STATS,
  STATS_COLOR,
  POKEMON_TYPES,
} from '../constants';

const DECIMETER_FEET_EQUIVALENT =  0.328084;
const HECTOGRAM_POUND_EQUIVALENTE = 4.5359237;

const getColor = (species: PokemonSpecies): ColorRange => PALETTE_COLOR[species.color.name as keyof PaletteColor];

const getDescription = (species: PokemonSpecies): string => species.flavor_text_entries.filter((flavor: MoveFlavorText) => flavor.language.name === 'es')[0]
  .flavor_text;

const convertToFeet = (height: number): string => `${(height * DECIMETER_FEET_EQUIVALENT).toFixed(2).replace(".", "'")}''`;

const convertToKilograms = (weight: number): string => (weight / 10).toFixed(2);

const convertToMeters = (height: number): string => (height / 10).toFixed(2);

const convertToPounds = (weight: number): string => (weight / HECTOGRAM_POUND_EQUIVALENTE).toFixed(2);

const getHeight = (height: number): string => `${convertToFeet(height)} (${convertToMeters(height)} m)`;

const getSprite = (name: string): string => `${BASE_SPRITE_URL_V2}/${name}.png`;

const getWeight = (weight: number): string => `${convertToPounds(weight)} lbs (${convertToKilograms(weight)} kg)`;

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
);

const mappingTypes = (types: PokemonType[]): NormalizedTypes[] => types.map(({ type }: { type: Details }) => ({
  name: type.name.toUpperCase(),
  color: POKEMON_TYPES[type.name as keyof MappedTypes].color,
  icon: POKEMON_TYPES[type.name as keyof MappedTypes].icon,
}));

const mappingTypesRelation = (damage: PokemonTypesNormalized[]): PokemonTypesNormalized => ({
  ...damage[0],
});

const mappingPokemonData = (data: any): NormalizedPokemon => ({
  color: getColor(data.species),
  description: getDescription(data.species),
  evolutionChain: data.species.evolutions,
  height: getHeight(data.height),
  moves: data.moves,
  name: data.name,
  sprite: getSprite(data.name),
  stats: mappingStats(data.stats),
  types: mappingTypes(data.types),
  typesRelation: mappingTypesRelation(data.typesRelation),
  weight: getWeight(data.weight)
});

export default mappingPokemonData;
