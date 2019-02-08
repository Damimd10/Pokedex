import React from 'react';
declare type Props = {
    color: any;
    isActiveStats: boolean;
    isActiveEvolutions: boolean;
    isActiveMoves: boolean;
    onTabPress(tab: string): void;
};
declare const PokemonFooter: React.FunctionComponent<Props>;
export default PokemonFooter;
