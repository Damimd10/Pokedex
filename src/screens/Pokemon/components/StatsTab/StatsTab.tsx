import * as React from 'react';
import { View } from 'react-native';

import { NormalizedPokemon } from '../../../../services/models';

import Damage from './components/Damage';
import PokemonStats from './components/PokemonStats';

type Props = Pick<NormalizedPokemon, 'color' | 'stats' | 'typesRelation'>;

const StatsTab: React.SFC<Props> = ({ color, stats, typesRelation }) => (
  <View>
    <PokemonStats color={color} stats={stats} />
    <Damage color={color} title="Weaknesses" damage={typesRelation.damageFrom} />
    <Damage color={color} title="Strengths" damage={typesRelation.damageTo} />
  </View>
);

export default StatsTab;
