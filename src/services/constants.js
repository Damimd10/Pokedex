const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const BASE_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const BASE_SPRITE_URL_V2 = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal';

const MAX_STATS = {
  hp: 255,
  attack: 190,
  defense: 230,
  'special-attack': 194,
  'special-defense': 230,
  speed: 180,
};

const PALETTE_COLOR = {
  black: {
    dark: '',
    light: '#6d6d6d',
    primary: '#424242',
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
    dark: '',
    light: '#F1F0DC',
    primary: '#B1CFCD',
  },
  yellow: {
    dark: '#FFA000',
    light: '#FFECB3',
    primary: '#FFC107',
  },
};

const STATS_COLOR = {
  hp: '#E64D3D',
  attack: '#E67F20',
  defense: '#F1C40F',
  'special-attack': '#3699DC',
  'special-defense': '#2ECB70',
  speed: '#F39C11',
};

const TYPES_COLOR = {
  bug: '#ab2',
  dark: '#754',
  dragon: '#76e',
  electric: '#fc3',
  fairy: '#e9e',
  fighting: '#b54',
  fire: '#f42',
  flying: '#89f',
  ghost: '#66b',
  grass: '#7c5',
  ground: '#db5',
  ice: '#6cf',
  normal: '#dbdbdb',
  poison: '#a59',
  psychic: '#f59',
  rock: '#ba6',
  shadow: '#7f848e',
  steel: '#aab',
  unknown: '#000f3e',
  water: '#39f',
};

export {
  BASE_SPRITE_URL,
  BASE_URL,
  BASE_SPRITE_URL_V2,
  MAX_STATS,
  PALETTE_COLOR,
  STATS_COLOR,
  TYPES_COLOR,
};
