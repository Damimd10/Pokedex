const formatName = name => name.replace(/-/g, ' ');

const normalizeMove = moves => ({
  name: formatName(moves.name),
  accuracy: moves.accuracy,
  power: moves.power,
  pp: moves.pp,
});

export default normalizeMove;
