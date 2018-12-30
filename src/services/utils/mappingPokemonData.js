import { BASE_SPRITE_URL } from '../constants';

const getColor = species => species.color.name;

const getSprite = id => `${BASE_SPRITE_URL}${id}.png`;

const mappingStats = stats =>
  stats.reduce((acc, { base_stat, stat }) => {
    acc.push({
      baseStat: base_stat,
      name: stat.name,
    });

    return acc;
  }, []);

const mappingTypes = types => types.map(({ type }) => type.name.toUpperCase()).join(' / ');

const mappingPokemonData = data => ({
  color: getColor(data.species),
  sprite: getSprite(data.id),
  stats: mappingStats(data.stats),
  types: mappingTypes(data.types),
});

export default mappingPokemonData;
