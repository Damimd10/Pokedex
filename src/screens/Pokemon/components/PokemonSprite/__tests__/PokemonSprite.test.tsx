import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonSprite, { PokemonSpirteProps } from '../PokemonSprite';

describe('<PokemonSpirte />', () => {
  let wrapper: ShallowWrapper<PokemonSpirteProps>;

  const props: PokemonSpirteProps = { name: 'charmander' };

  beforeEach(() => {
    wrapper = shallow(<PokemonSprite {...props} />);
  });

  describe('rendering', () => {
    it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

    it('should render one Image component (as Component) into View component', () => expect(wrapper.find('View').find('Component')).toHaveLength(1));

    it('should have a source object that contains an uri prop with the url of the sprite', () => expect(wrapper.find('Component').prop('source')).toEqual({
      uri: 'https://img.pokemondb.net/artwork/vector/large/charmander.png',
    }));
  });
});
