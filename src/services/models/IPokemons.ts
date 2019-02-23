import { NormalizedEvolutions } from './IEvolutionChain';
import { ColorRange } from './IPaletteColor';
import { Details } from './shared';
import { PokemonType } from './IPokemonTypes';
import { PokemonStat, MappedStat } from './IStats';
import { PokemonMove } from './IPokemonMoves';

export interface Pokemons {
  count: number;
  next?: boolean;
  previous?: boolean;
  results: Details[];
}

interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: Details;
}

interface VersionGameIndex {
  game_index: number;
  version: Details;
}

interface PokemonHeldItemVersion {
  version: Details;
  rarity: number;
}

interface PokemonHeldItem {
  item: Details;
  version_details: PokemonHeldItemVersion[];
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: Details[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: any;
  species: Details;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface NormalizedPokemon {
  color: ColorRange;
  description: any;
  evolutionChain: NormalizedEvolutions[];
  height: string;
  moves: any[];
  name: any;
  sprite: any;
  stats: MappedStat[];
  types: any[];
  typesRelation: any;
  weight: string;
}
