const normalizeType = ({ damage_relations: damageRelations }) => ({
  damageTo: damageRelations.double_damage_to,
  damgeFrom: damageRelations.double_damage_from,
});

export default normalizeType;
