import * as React from 'react';
import { NormalizedPokemon } from '../../../../services/models';
declare type Props = Pick<NormalizedPokemon, 'description' | 'name' | 'types'>;
export default class PokemonDetails extends React.Component<Props, {}> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
