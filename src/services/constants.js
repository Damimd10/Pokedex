const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const BASE_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const MAX_STATS = {
  hp: 255,
  attack: 190,
  defense: 230,
  'special-attack': 194,
  'special-defense': 230,
  speed: 180,
};

const PALETTE_COLOR = {
  blue: {
    dark: '#1976D2',
    light: '#BBDEFB',
    primary: '#2196F3',
  },
  brown: {
    dark: '#5D4037',
    light: '#D7CCC8',
    primary: '#795548',
  },
  gray: {
    dark: '#616161',
    light: '#F5F5F5',
    primary: '#9E9E9E',
  },
  green: {
    dark: '#00796B',
    light: '#B2DFDB',
    primary: '#009688',
  },
  pink: {
    dark: '#C2185B',
    light: '#F8BBD0',
    primary: '#E91E63',
  },
  purple: {
    dark: '#7B1FA2',
    light: '#E1BEE7',
    primary: '#9C27B0',
  },
  red: {
    dark: '#D32F2F',
    light: '#FFCDD2',
    primary: '#F44336',
  },
  yellow: {
    dark: '#FBC02D',
    light: '#FFF9C4',
    primary: '#FFEB3B',
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

export { BASE_SPRITE_URL, BASE_URL, MAX_STATS, PALETTE_COLOR, STATS_COLOR };
