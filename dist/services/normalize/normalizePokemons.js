import { BASE_SPRITE_URL_V2 } from '../constants';
var mappingPokemons = function(pokemons) {
  return pokemons.map(function(_a, index) {
    var name = _a.name;
    return {
      id: index + 1,
      name: name.toUpperCase(),
      sprite: BASE_SPRITE_URL_V2 + '/' + name + '.png',
    };
  });
};
export default mappingPokemons;
//# sourceMappingURL=normalizePokemons.js.map
