import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonFooter, { PokemonFooterProps } from '../PokemonFooter';

const onTabPress = jest.fn();

describe('<PokemonFooter /> Component', () => {
  let wrapper: ShallowWrapper<PokemonFooterProps>;

  const props: PokemonFooterProps = {
    color: { primary: '#aab', dark: '#baa', light: '#bab' },
    isActiveEvolutions: false,
    isActiveMoves: false,
    isActiveStats: false,
    onTabPress,
  };

  beforeEach(() => {
    wrapper = shallow(<PokemonFooter {...props} />);
  });

  describe('rendering', () => {
    it('should render one Footer component', () => expect(wrapper.find('Styled(Footer)')).toHaveLength(1));

    it('should render one FooterTab component into Footer component', () => expect(
      wrapper.find('Styled(Footer)').find('Styled(FooterTab)'),
    ).toHaveLength(1));

    it('should render three Tab components into FooterTab component', () => expect(wrapper.find('Styled(FooterTab)').find('Tab')).toHaveLength(3));

    it('should pass "stats" as name of the first Tab component', () => expect(
      wrapper
        .find('Tab')
        .at(0)
        .prop('tabName'),
    ).toBe('stats'));

    it('should pass "evolutions" as name of the first Tab component', () => expect(
      wrapper
        .find('Tab')
        .at(1)
        .prop('tabName'),
    ).toBe('evolutions'));

    it('should pass "moves" as name of the first Tab component', () => expect(
      wrapper
        .find('Tab')
        .at(2)
        .prop('tabName'),
    ).toBe('moves'));
  });
});
