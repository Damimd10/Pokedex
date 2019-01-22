import { TYPES_COLOR } from '../constants';

const addColor = damageArray =>
  damageArray.map(data => ({ ...data, color: TYPES_COLOR[data.name] }));

const normalizeType = ({ damage_relations: damageRelations }) => ({
  damageTo: addColor(damageRelations.double_damage_to),
  damageFrom: addColor(damageRelations.double_damage_from),
});

export default normalizeType;
