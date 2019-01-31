import {
  MappedTypes, MaxStats, NameStats, PaletteColor,
} from './models'

const BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon/'
const BASE_SPRITE_URL: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const BASE_SPRITE_URL_V2: string = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal'

const NAME_STATS: NameStats = {
  hp: 'HP',
  speed: 'SPD',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
}

const MAX_STATS: MaxStats = {
  hp: 255,
  attack: 190,
  defense: 230,
  'special-attack': 194,
  'special-defense': 230,
  speed: 180,
}

const DAMAGE_TABLE = {
  double_damage_from: '2x',
  half_damage_from: '1/2x',
  no_damage_from: '---',
  double_damage_to: '2x',
  half_damage_to: '1/2x',
  no_damage_to: '---',
}

const PALETTE_COLOR: PaletteColor = {
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
}

const STATS_COLOR = {
  hp: '#E64D3D',
  attack: '#E67F20',
  defense: '#F1C40F',
  'special-attack': '#3699DC',
  'special-defense': '#2ECB70',
  speed: '#F39C11',
}

const POKEMON_TYPES: MappedTypes = {
  bug: { color: '#ab2', icon: require('../assets/type-bug.png') },
  dark: { color: '#754', icon: require('../assets/type-dark.png') },
  dragon: { color: '#76e', icon: require('../assets/type-dragon.png') },
  electric: { color: '#fc3', icon: require('../assets/type-electric.png') },
  fairy: { color: '#e9e', icon: require('../assets/type-fairy.png') },
  fighting: { color: '#b54', icon: require('../assets/type-fighting.png') },
  fire: { color: '#f42', icon: require('../assets/type-fire.png') },
  flying: { color: '#89f', icon: require('../assets/type-flying.png') },
  ghost: { color: '#66b', icon: require('../assets/type-ghost.png') },
  grass: { color: '#7c5', icon: require('../assets/type-grass.png') },
  ground: { color: '#db5', icon: require('../assets/type-ground.png') },
  ice: { color: '#6cf', icon: require('../assets/type-ice.png') },
  normal: { color: '#dbdbdb', icon: require('../assets/type-normal.png') },
  poison: { color: '#a59', icon: require('../assets/type-poison.png') },
  psychic: { color: '#f59', icon: require('../assets/type-psychic.png') },
  rock: { color: '#ba6', icon: require('../assets/type-rock.png') },
  steel: { color: '#aab', icon: require('../assets/type-steel.png') },
  water: { color: '#39f', icon: require('../assets/type-water.png') },
}

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
}
