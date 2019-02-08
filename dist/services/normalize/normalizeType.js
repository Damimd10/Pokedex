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
import { DAMAGE_TABLE, POKEMON_TYPES } from '../constants';
var mappedDamageDetails = function(damage, key) {
  return damage[key].map(function(_a) {
    var name = _a.name;
    return {
      name: name,
      icon: POKEMON_TYPES[name].icon,
      damage: DAMAGE_TABLE[key],
    };
  });
};
var mapDamage = function(damage, who) {
  var keys = Object.keys(damage);
  return keys.reduce(function(accumulator, key) {
    if (key.includes(who) && damage[key].length > 0) {
      accumulator.push.apply(accumulator, __spread(mappedDamageDetails(damage, key)));
    }
    return accumulator;
  }, []);
};
var normalizeType = function(_a) {
  var damageRelations = _a.damage_relations;
  return {
    damageFrom: mapDamage(damageRelations, 'from'),
    damageTo: mapDamage(damageRelations, 'to'),
  };
};
export default normalizeType;
//# sourceMappingURL=normalizeType.js.map
