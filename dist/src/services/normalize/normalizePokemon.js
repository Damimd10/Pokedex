var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __read =
  (this && this.__read) ||
  function(o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread =
  (this && this.__spread) ||
  function() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  };
import {
  BASE_SPRITE_URL_V2,
  PALETTE_COLOR,
  MAX_STATS,
  NAME_STATS,
  STATS_COLOR,
  POKEMON_TYPES,
} from '../constants';
var getColor = function(species) {
  return PALETTE_COLOR[species.color.name];
};
var getDescription = function(species) {
  return species.flavor_text_entries.filter(function(flavor) {
    return flavor.language.name === 'en';
  })[0].flavor_text;
};
var getEvolutionChain = function(species) {
  return species.evolutions;
};
var getSprite = function(name) {
  return BASE_SPRITE_URL_V2 + '/' + name + '.png';
};
var mappingStats = function(stats) {
  return stats.reduce(function(acc, currentStat) {
    return __spread(acc, [
      {
        averageStat: Number((currentStat.base_stat / MAX_STATS[currentStat.stat.name]).toFixed(1)),
        baseStat: currentStat.base_stat,
        colorStat: STATS_COLOR[currentStat.stat.name],
        name: NAME_STATS[currentStat.stat.name],
      },
    ]);
  }, []);
};
var mappingTypes = function(types) {
  return types.map(function(_a) {
    var type = _a.type;
    return {
      name: type.name.toUpperCase(),
      color: POKEMON_TYPES[type.name].color,
      icon: POKEMON_TYPES[type.name].icon,
    };
  });
};
var mappingTypesRelation = function(damage) {
  return __assign({}, damage[0]);
};
var mappingPokemonData = function(data) {
  return {
    color: getColor(data.species),
    description: getDescription(data.species),
    evolutionChain: getEvolutionChain(data.species),
    moves: data.moves,
    name: data.name,
    sprite: getSprite(data.name),
    stats: mappingStats(data.stats),
    types: mappingTypes(data.types),
    typesRelation: mappingTypesRelation(data.typesRelation),
  };
};
export default mappingPokemonData;
//# sourceMappingURL=normalizePokemon.js.map
