var BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
var BASE_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
var BASE_SPRITE_URL_V2 = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal';
var NAME_STATS = {
  hp: 'HP',
  speed: 'SPD',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
};
var MAX_STATS = {
  hp: 255,
  attack: 190,
  defense: 230,
  'special-attack': 194,
  'special-defense': 230,
  speed: 180,
};
var DAMAGE_TABLE = {
  double_damage_from: '2x',
  half_damage_from: '1/2x',
  no_damage_from: '---',
  double_damage_to: '2x',
  half_damage_to: '1/2x',
  no_damage_to: '---',
};
var PALETTE_COLOR = {
  black: {
    dark: '#231930',
    light: '#B0A8B9',
    primary: '#4B4453',
  },
  blue: {
    dark: '#1976D2',
    light: '#BBDEFB',
    primary: '#2196F3',
  },
  brown: {
    dark: '#5D4037',
    light: '#F4E7D6',
    primary: '#B9926B',
  },
  gray: {
    dark: '#616161',
    light: '#CED6E3',
    primary: '#748CA6',
  },
  green: {
    dark: '#55A5A2',
    light: '#A2CECD',
    primary: '#009688',
  },
  pink: {
    dark: '#C2185B',
    light: '#F8BBD0',
    primary: '#E91E63',
  },
  purple: {
    dark: '#7B1FA2',
    light: '#D3D1E7',
    primary: '#7C7FAC',
  },
  red: {
    dark: '#D32F2F',
    light: '#FFCDD2',
    primary: '#F44336',
  },
  white: {
    dark: '#BFBFBF',
    light: '#FCFCFC',
    primary: '#F5F5F5',
  },
  yellow: {
    dark: '#FFA000',
    light: '#FFECB3',
    primary: '#FFC107',
  },
};
var STATS_COLOR = {
  hp: '#E64D3D',
  attack: '#E67F20',
  defense: '#F1C40F',
  'special-attack': '#3699DC',
  'special-defense': '#2ECB70',
  speed: '#F39C11',
};
var POKEMON_TYPES = {
  bug: { color: '#ab2', icon: require('../assets/img/type-bug.png') },
  dark: { color: '#754', icon: require('../assets/img/type-dark.png') },
  dragon: { color: '#76e', icon: require('../assets/img/type-dragon.png') },
  electric: { color: '#fc3', icon: require('../assets/img/type-electric.png') },
  fairy: { color: '#e9e', icon: require('../assets/img/type-fairy.png') },
  fighting: { color: '#b54', icon: require('../assets/img/type-fighting.png') },
  fire: { color: '#f42', icon: require('../assets/img/type-fire.png') },
  flying: { color: '#89f', icon: require('../assets/img/type-flying.png') },
  ghost: { color: '#66b', icon: require('../assets/img/type-ghost.png') },
  grass: { color: '#7c5', icon: require('../assets/img/type-grass.png') },
  ground: { color: '#db5', icon: require('../assets/img/type-ground.png') },
  ice: { color: '#6cf', icon: require('../assets/img/type-ice.png') },
  normal: { color: '#dbdbdb', icon: require('../assets/img/type-normal.png') },
  poison: { color: '#a59', icon: require('../assets/img/type-poison.png') },
  psychic: { color: '#f59', icon: require('../assets/img/type-psychic.png') },
  rock: { color: '#ba6', icon: require('../assets/img/type-rock.png') },
  steel: { color: '#aab', icon: require('../assets/img/type-steel.png') },
  water: { color: '#39f', icon: require('../assets/img/type-water.png') },
};
export {
  BASE_SPRITE_URL,
  BASE_URL,
  BASE_SPRITE_URL_V2,
  DAMAGE_TABLE,
  MAX_STATS,
  NAME_STATS,
  PALETTE_COLOR,
  STATS_COLOR,
  POKEMON_TYPES,
};
//# sourceMappingURL=constants.js.map
