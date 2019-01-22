// @flow

interface Details {
  name: string;
  url: string;
}
interface DamageRelations {
  no_damage_to: Details[];
  half_damage_to: Details[];
  double_damage_to: Details[];
  no_damage_from: Details[];
  half_damage_from: Details[];
  double_damage_from: Details[];
}

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

export interface Types {
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
