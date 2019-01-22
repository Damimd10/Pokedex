// @flow
import type { DamageRelations, Details } from './shared';

interface GameIndices {
  game_index: number;
  generation: Details;
}

interface Names {
  name: string;
  language: Details;
}

interface Pokemon {
  slot: number;
  pokemon: Details;
}

export interface PokemonTypes {
  id: number;
  name: string;
  damage_relations: DamageRelations;
  game_indices: GameIndices[];
  generation: Details;
  move_damage_class: Details;
  names: Names[];
  pokemon: Pokemon[];
  moves: Details[];
}
