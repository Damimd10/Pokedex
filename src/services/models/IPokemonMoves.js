// @flow

import type { APIResource, Details } from './shared';

interface ContestComboDetail {
  use_after: ?(Details[]);
  use_before: ?(Details[]);
}

interface ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}

interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: Details;
}

interface Effect {
  effect: string;
  language: Details;
}

interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: Details;
}

interface MoveFlavorText {
  flavor_text: string;
  language: Details;
  version_group: Details;
}

interface MachineVersionDetail {
  machine: APIResource;
  version_group: Details;
}

interface Name {
  name: string;
  language: Details;
}

interface PastMoveStatValues {
  accuracy: PastMoveStatValues;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: VerboseEffect[];
  type: Details;
  version_group: Details;
}

interface MoveStatChange {
  change: number;
  stat: Details;
}

interface MoveMetaData {
  aliment: Details;
  category: Details;
  min_hints: ?number;
  max_hits: ?number;
  min_turns: ?number;
  max_turns: ?number;
  drain: number;
  healing: number;
  crit_rate: number;
  aliment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: ContestComboSets;
  contest_type: Details;
  contest_effect: APIResource;
  damage_class: Details;
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: MoveFlavorText[];
  generation: Details;
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  past_values: PastMoveStatValues[];
  stat_changes: MoveStatChange[];
  super_contest_effect: APIResource;
  target: Details;
  type: Details;
}

export interface NormalizedMove {
  level: string;
  name: string;
  accuracy: number;
  power: number;
  pp: number;
  type: string;
  typeIcon: any;
}
