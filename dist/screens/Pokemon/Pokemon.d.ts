import * as React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { Error, NormalizedPokemon } from '../../services/models';
declare type NavStateParams = {
    pokemon: NormalizedPokemon;
};
declare type PokemonScreenProps = {
    navigation: NavigationScreenProp<NavStateParams>;
};
declare type State = {
    activeTab: string;
    error: Error | null;
    loading: boolean;
    pokemon: NormalizedPokemon;
};
declare class Pokemon extends React.Component<PokemonScreenProps, State> {
    readonly state: State;
    isActive: (value: string) => boolean;
    getTabContent: () => JSX.Element;
    onTabPress: (tab: string) => void;
    render(): JSX.Element;
}
export default Pokemon;
