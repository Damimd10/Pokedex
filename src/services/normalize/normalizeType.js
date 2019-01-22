import { TYPES_COLOR } from '../constants';

const addColor = damageArray =>
  damageArray.map(data => ({ ...data, color: TYPES_COLOR[data.name] }));

const normalizeType = props =>
  console.log('HERE', props) || {
    damageTo: addColor(props.damageRelations.double_damage_to),
    damageFrom: addColor(props.damageRelations.double_damage_from),
  };

export default normalizeType;
