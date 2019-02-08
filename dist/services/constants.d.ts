import { MappedTypes, MaxStats, NameStats, PaletteColor } from './models';
declare const BASE_URL: string;
declare const BASE_SPRITE_URL: string;
declare const BASE_SPRITE_URL_V2: string;
declare const NAME_STATS: NameStats;
declare const MAX_STATS: MaxStats;
declare const DAMAGE_TABLE: {
    double_damage_from: string;
    half_damage_from: string;
    no_damage_from: string;
    double_damage_to: string;
    half_damage_to: string;
    no_damage_to: string;
};
declare const PALETTE_COLOR: PaletteColor;
declare const STATS_COLOR: {
    hp: string;
    attack: string;
    defense: string;
    'special-attack': string;
    'special-defense': string;
    speed: string;
};
declare const POKEMON_TYPES: MappedTypes;
export { BASE_SPRITE_URL, BASE_URL, BASE_SPRITE_URL_V2, DAMAGE_TABLE, MAX_STATS, NAME_STATS, PALETTE_COLOR, STATS_COLOR, POKEMON_TYPES, };
