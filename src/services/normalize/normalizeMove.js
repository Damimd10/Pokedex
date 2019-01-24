const formatName = name => name.replace(/-/g, ' ');

const normalizeMove = (move, level) => ({
  level,
  name: formatName(move.name),
  accuracy: move.accuracy || 0,
  power: move.power || 0,
  pp: move.pp || 0,
  type: move.type.name,
});

export default normalizeMove;
