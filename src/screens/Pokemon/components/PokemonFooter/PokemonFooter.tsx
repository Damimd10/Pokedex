import React from 'react';
import { Footer, FooterTab } from 'native-base';

import { ColorRange } from '../../../../services/models';
import Tab from '../Tab';

export type PokemonFooterProps = {
  color: ColorRange,
  isActiveStats: boolean,
  isActiveEvolutions: boolean,
  isActiveMoves: boolean,
  onTabPress(tab: string): void,
};

const PokemonFooter: React.FunctionComponent<PokemonFooterProps> = ({
  color,
  isActiveStats,
  isActiveEvolutions,
  isActiveMoves,
  onTabPress,
}) => (
  <Footer>
    <FooterTab style={{ backgroundColor: '#FAFAFA' }}>
      <Tab
        color={color.primary}
        isActive={isActiveStats}
        onTabPress={onTabPress}
        tabName="stats"
      />
      <Tab
        color={color.primary}
        isActive={isActiveEvolutions}
        onTabPress={onTabPress}
        tabName="evolutions"
      />
      <Tab
        color={color.primary}
        isActive={isActiveMoves}
        onTabPress={onTabPress}
        tabName="moves"
      />
    </FooterTab>
  </Footer>
);

export default PokemonFooter;
