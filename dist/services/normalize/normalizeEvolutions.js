import { BASE_SPRITE_URL_V2 } from '../constants';
var getEvolve = function(chain, evolve) {
  if (!evolve) return chain;
  var level = evolve.evolution_details.length > 0 ? evolve.evolution_details[0].min_level : 0;
  var sprite = BASE_SPRITE_URL_V2 + '/' + evolve.species.name + '.png';
  chain.push({ name: evolve.species.name, level: level, sprite: sprite });
  return getEvolve(chain, evolve.evolves_to[0]);
};
var mappingEvolutions = function(evolutions) {
  return getEvolve([], evolutions.chain);
};
export default mappingEvolutions;
//# sourceMappingURL=normalizeEvolutions.js.map
