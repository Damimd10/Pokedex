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

const mappingPokemonData = data => ({
  color: getColor(data.species),
  evolutionChain: getEvolutionChain(data.species),
  name: data.name,
  sprite: getSprite(data.id),
  stats: mappingStats(data.stats),
  types: mappingTypes(data.types),
});

export default mappingPokemonData;
