import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
describe('<Header /> Component', function() {
  var wrapper;
  beforeEach(function() {
    wrapper = shallow(React.createElement(Header, null));
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
      it('should have a noLeft prop as true', function() {
        return expect(header.prop('noLeft')).toBe(true);
      });
      it('should have a noShadow prop as true', function() {
        return expect(header.prop('noShadow')).toBe(true);
      });
      it('should have a transparent prop as true', function() {
        return expect(header.prop('transparent')).toBe(true);
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
