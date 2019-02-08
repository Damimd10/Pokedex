import { Details } from './shared';
interface EvolutionDetail {
    item: Details;
    trigger: Details;
    gender: number;
    held_item: Details;
    known_move: Details;
    known_move_type: Details;
    location: Details;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: Details;
    party_type: Details;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: Details;
    turn_upside_down: boolean;
}
export interface ChainLink {
    is_baby: boolean;
    species: Details;
    evolution_details: EvolutionDetail[];
    evolves_to: ChainLink[];
}
export interface EvolutionChain {
    id: number;
    baby_trigger_item: Details;
    chain: ChainLink;
}
export interface NormalizedEvolutions {
    name: string;
    level: number;
    sprite: string;
}
export {};
