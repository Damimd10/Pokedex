import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonList, { PokemonListProps } from '../PokemonList';
import PokemonCard from '../../PokemonCard';

const pokemons = [{ id: 1, name: 'bulbasur', sprite: 'bulbasur-sprite' }];

describe('<PokemonList /> Component', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper<PokemonListProps>;
    let props: PokemonListProps;

    beforeEach(() => {
      props = { onPokemonSelect: jest.fn(), pokemons };
      wrapper = shallow(<PokemonList {...props} />);
    });

    it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

    describe('<FlatList /> Component', () => {
      let flatList: ShallowWrapper<any>;

      beforeEach(() => {
        flatList = wrapper.find('FlatList');
      });

      it('should render one FlatList component', () => expect(flatList).toHaveLength(1));

      it('should have a data prop equal to pokemons prop', () => expect(flatList.prop('data')).toEqual(props.pokemons));

      it('should have a keyExtractor function that return "bulbasur"', () => expect(flatList.prop('keyExtractor')(pokemons[0])).toBe('bulbasur'));

      it('should have a numColumns prop equal to 3', () => expect(flatList.prop('numColumns')).toEqual(3));

      it('should have a renderItem function that render a PokemonCard component', () => expect(flatList.prop('renderItem')({ item: pokemons }).type).toEqual(PokemonCard));
    });
  });
});
