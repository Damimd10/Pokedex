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

  describe('rendering', () => {});
});
