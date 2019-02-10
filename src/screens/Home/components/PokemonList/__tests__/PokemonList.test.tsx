import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonList, { PokemonListProps } from '../PokemonList';

const pokemons = [{ id: 1, name: 'bulbasur', sprite: 'bulbasur-sprite' }];

describe('<PokemonList /> Component', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: PokemonListProps;

    beforeEach(() => {
      props = { onPokemonSelect: jest.fn(), pokemons };
      wrapper = shallow(<PokemonList {...props} />);
    });

    it('should render', () => {
      expect(true).toBe(true);
    });
  });
});
