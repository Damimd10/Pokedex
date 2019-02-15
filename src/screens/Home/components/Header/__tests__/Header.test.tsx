import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Header from '../Header';

describe('<Header /> Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  describe('rendering', () => {
    describe('<Header /> Component', () => {
      let header: ShallowWrapper;

      beforeEach(() => {
        header = wrapper.find('Styled(Header)');
      });

      it('should render one Styled(Header) component', () => expect(header).toHaveLength(1));

      it('should have a noShadow prop as true', () => expect(header.prop('noShadow')).toBe(true));

      it('should have a transparent prop as true', () => expect(header.prop('transparent')).toBe(true));

      it('should render one Styled(Left) component into header', () => expect(header.find('Styled(Left)')).toHaveLength(1));
    });

    it('should render one Styled(Body) component into Header', () => expect(wrapper.find('Styled(Header)').find('Styled(Body)')).toHaveLength(
      1,
    ));

    it('should render one Styled(Title) component into Body', () => expect(wrapper.find('Styled(Body)').find('Styled(Title)')).toHaveLength(
      1,
    ));

    it('should have "Pokedex" string as title', () => expect(wrapper.find('Styled(Title)').prop('children')).toBe('Pokedex'));
  });
});
