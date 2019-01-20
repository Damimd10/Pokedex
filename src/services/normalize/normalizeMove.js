const formatName = name => name.replace(/-/g, ' ');

const normalizeMove = moves => ({
  name: formatName(moves.name),
  accuracy: moves.accuracy || 0,
  power: moves.power || 0,
  pp: moves.pp || 0,
});

export default normalizeMove;
