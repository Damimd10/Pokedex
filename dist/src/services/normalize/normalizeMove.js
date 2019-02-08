import { POKEMON_TYPES } from '../constants';
var formatName = function(name) {
  return name.replace(/-/g, ' ');
};
var normalizeMove = function(move, level) {
  return {
    level: level,
    name: formatName(move.name),
    accuracy: move.accuracy || 0,
    power: move.power || 0,
    pp: move.pp || 0,
    type: move.type.name,
    typeIcon: POKEMON_TYPES[move.type.name].icon,
  };
};
export default normalizeMove;
//# sourceMappingURL=normalizeMove.js.map
