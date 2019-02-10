var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from '../PokemonList';
import PokemonCard from '../../PokemonCard';
var pokemons = [{ id: 1, name: 'bulbasur', sprite: 'bulbasur-sprite' }];
describe('<PokemonList /> Component', function() {
  describe('rendering', function() {
    var wrapper;
    var props;
    beforeEach(function() {
      props = { onPokemonSelect: jest.fn(), pokemons: pokemons };
      wrapper = shallow(React.createElement(PokemonList, __assign({}, props)));
    });
    it('should render one View component', function() {
      return expect(wrapper.find('View')).toHaveLength(1);
    });
    describe('<FlatList /> Component', function() {
      var flatList;
      beforeEach(function() {
        flatList = wrapper.find('FlatList');
      });
      it('should render one FlatList component', function() {
        return expect(flatList).toHaveLength(1);
      });
      it('should have a data prop equal to pokemons prop', function() {
        return expect(flatList.prop('data')).toEqual(props.pokemons);
      });
      it('should have a keyExtractor function that return "bulbasur"', function() {
        return expect(flatList.prop('keyExtractor')(pokemons[0])).toBe('bulbasur');
      });
      it('should have a numColumns prop equal to 3', function() {
        return expect(flatList.prop('numColumns')).toEqual(3);
      });
      it('should have a renderItem function that render a PokemonCard component', function() {
        return expect(flatList.prop('renderItem')({ item: pokemons }).type).toEqual(PokemonCard);
      });
    });
  });
});
//# sourceMappingURL=PokemonList.test.js.map
