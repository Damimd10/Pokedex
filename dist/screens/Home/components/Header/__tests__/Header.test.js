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
import Header from '../Header';
var goBack = jest.fn();
describe('<Header /> Component', function() {
  var wrapper;
  var props = { goBack: goBack };
  beforeEach(function() {
    wrapper = shallow(React.createElement(Header, __assign({}, props)));
  });
  describe('rendering', function() {
    describe('<Header /> Component', function() {
      var header;
      beforeEach(function() {
        header = wrapper.find('Styled(Header)');
      });
      it('should render one Styled(Header) component', function() {
        return expect(header).toHaveLength(1);
      });
      it('should have a noShadow prop as true', function() {
        return expect(header.prop('noShadow')).toBe(true);
      });
      it('should have a transparent prop as true', function() {
        return expect(header.prop('transparent')).toBe(true);
      });
    });
    it('should render one Styled(Left) component into Header', function() {
      return expect(wrapper.find('Styled(Header)').find('Styled(Left)')).toHaveLength(1);
    });
    describe('<Button /> Component', function() {
      var button;
      beforeEach(function() {
        button = wrapper.find('Styled(Left)').find('Styled(Button)');
      });
      it('should render on Styled(Button) component into Left', function() {
        return expect(button).toHaveLength(1);
      });
      it('should have a onPress prop as instance of anonymous function', function() {
        return expect(button.prop('onPress')).toBeInstanceOf(Function);
      });
    });
    it('should render one Styled(Body) component into Header', function() {
      return expect(wrapper.find('Styled(Header)').find('Styled(Body)')).toHaveLength(1);
    });
    it('should render one Styled(Title) component into Body', function() {
      return expect(wrapper.find('Styled(Body)').find('Styled(Title)')).toHaveLength(1);
    });
    it('should have "Pokedex" string as title', function() {
      return expect(wrapper.find('Styled(Title)').prop('children')).toBe('Pokedex');
    });
  });
});
//# sourceMappingURL=Header.test.js.map
