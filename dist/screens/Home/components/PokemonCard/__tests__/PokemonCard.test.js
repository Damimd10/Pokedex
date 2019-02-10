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
import PokemonCard from '../PokemonCard';
var onPokemonSelectSpy = jest.fn();
describe('<PokemonCard /> Component', function() {
  var wrapper;
  var props;
  beforeEach(function() {
    props = {
      id: 36,
      name: 'pikachu',
      sprite: 'pikachu-sprite',
      onPokemonSelect: onPokemonSelectSpy,
    };
    wrapper = shallow(React.createElement(PokemonCard, __assign({}, props)));
  });
  afterEach(function() {
    onPokemonSelectSpy.mockClear();
  });
  describe('rendering', function() {
    it('should render one View component', function() {
      return expect(wrapper.find('View')).toHaveLength(1);
    });
    describe('TouchableOpacity component', function() {
      var touchableElement;
      beforeEach(function() {
        touchableElement = wrapper.find('TouchableOpacity');
        touchableElement.prop('onPress')();
      });
      it('should render one TouchableOpacity component', function() {
        return expect(touchableElement).toHaveLength(1);
      });
      it('should call onPokemonSelect once', function() {
        return expect(onPokemonSelectSpy).toHaveBeenCalledTimes(1);
      });
      it('should clal onPokemonSelect with 36', function() {
        return expect(onPokemonSelectSpy).toHaveBeenCalledWith(36);
      });
    });
    it('should render one Text component', function() {
      return expect(wrapper.find('TouchableOpacity').find('Text')).toHaveLength(1);
    });
    it('should render "pikachu" as the name of the pokemon', function() {
      return expect(
        wrapper
          .find('Text')
          .first()
          .props().children,
      ).toBe('pikachu');
    });
    it('should have a source property that contains "pikachu-sprite"', function() {
      return expect(
        wrapper
          .find('TouchableOpacity')
          .childAt(1)
          .prop('source'),
      ).toEqual({ uri: 'pikachu-sprite' });
    });
  });
});
//# sourceMappingURL=PokemonCard.test.js.map
