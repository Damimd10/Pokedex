// @flow

import { APIResource, Details, MoveFlavorText, Name } from './shared';

interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: Details;
}

interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: Details;
}

interface Description {
  description: string;
  language: Details;
}

interface Genus {
  genus: string;
  language: Details;
}

interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: Details;
}

export interface PokemonSpecies {
  id: number;
  name: number;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: Details;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: Details[];
  color: Details;
  shape: Details;
  evolves_from_species: Details;
  evolution_chain: APIResource;
  habitat: Details;
  generation: Details;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: MoveFlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}
