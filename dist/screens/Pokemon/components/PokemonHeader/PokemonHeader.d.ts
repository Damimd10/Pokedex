import React from 'react';
declare type Props = {
    color: any;
    goBack(routeKey?: string | null): boolean;
    name: string;
};
declare const PokemonHeader: React.FunctionComponent<Props>;
export default PokemonHeader;
