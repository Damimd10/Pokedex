import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonEvolution, { PokemonEvolutionProps} from '../PokemonEvolution';
import { toCapitalizeText } from '../../../../../../../shared/utils';

jest.mock('../../../../../../../shared/utils', () => ({ toCapitalizeText: jest.fn() }));

describe('<PokemonEvolution /> Component', () => {
  let wrapper: ShallowWrapper<PokemonEvolutionProps>;

  const props: PokemonEvolutionProps = {
    name: 'charmander',
    sprite: 'charmander-sprite',
  };

  beforeEach(() => {
    (toCapitalizeText as jest.Mock).mockReturnValue('Charmander');
    wrapper = shallow(<PokemonEvolution {...props} />);
  });

  afterEach(() => {
    (toCapitalizeText as jest.Mock).mockClear();
  })

  it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

  it('should render one Image component into view', () => expect(wrapper.find('View').find('Component')).toHaveLength(1));

  it('should have a source prop into Image with the sprite prop value', () => expect(wrapper.find('Component').prop('source')).toEqual({
    uri: 'charmander-sprite',
  }));

  it('should render one Text component into View', () => expect(wrapper.find('View').find('Text')).toHaveLength(1));

  it('should call toCaptializeText once', () => expect(toCapitalizeText).toHaveBeenCalledTimes(1));

  it('should call toCapitalizeText with "charmander"', () => expect(toCapitalizeText).toHaveBeenCalledWith('charmander'));

  it('should render "Charmander" text', () => expect(wrapper.find('Text').first().prop('children')).toBe('Charmander'))
});
