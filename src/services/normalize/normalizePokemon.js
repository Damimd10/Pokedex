import { BASE_SPRITE_URL, PALETTE_COLOR, MAX_STATS, STATS_COLOR } from '../constants';

const getColor = species => PALETTE_COLOR[species.color.name];

const getEvolutionChain = species => species.evolutions;

const getSprite = id => `${BASE_SPRITE_URL}${id}.png`;

const mappingStats = stats =>
  stats.reduce((acc, { base_stat, stat }) => {
    acc.push({
      averageStat: Number((base_stat / MAX_STATS[stat.name]).toFixed(1)),
      baseStat: base_stat,
      colorStat: STATS_COLOR[stat.name],
      name: stat.name,
    });

    return acc;
  }, []);

const mappingTypes = types => types.map(({ type }) => type.name.toUpperCase()).join(' / ');

const mappingTypeRelations = types =>
  types.reduce(
    (acc, { damageFrom, damageTo }) => ({
      damageTo: [...acc.damageTo, ...(damageTo ? [...damageTo] : [])],
      damageFrom: [...acc.damageFrom, ...(damageFrom ? [...damageFrom] : [])],
    }),
    { damageTo: [], damageFrom: [] }
  );

const mappingPokemonData = data => ({
  color: getColor(data.species),
  evolutionChain: getEvolutionChain(data.species),
  moves: data.moves,
  name: data.name,
  sprite: getSprite(data.id),
  stats: mappingStats(data.stats),
  types: mappingTypes(data.types),
  typesRelation: mappingTypeRelations(data.typesRelation),
});

export default mappingPokemonData;
